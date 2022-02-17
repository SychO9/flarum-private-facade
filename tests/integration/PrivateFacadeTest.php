<?php

namespace SychO\PrivateFacade\Tests\integration;

use Flarum\Testing\integration\RetrievesAuthorizedUsers;
use Flarum\Testing\integration\TestCase;
use Flarum\Extend;

class PrivateFacadeTest extends TestCase
{
    use RetrievesAuthorizedUsers;

    protected function setUp(): void
    {
        parent::setUp();

        $this->extend(
            (new Extend\Csrf)
                ->exemptRoute('login')
                ->exemptRoute('register')
        );

        $this->extension('sycho-private-facade');
    }

    /** @test */
    public function login_route_works()
    {
        $response = $this->send(
            $this->request('GET', '/login')
        );

        $this->assertEquals(200, $response->getStatusCode());
    }

    /** @test */
    public function password_reset_route_works()
    {
        $response = $this->send(
            $this->request('GET', '/reset/lol')
        );

        $this->assertEquals(404, $response->getStatusCode());
    }

    /** @test */
    public function password_reset_route_works_when_logged_in()
    {
        $response = $this->send(
            $this->request('GET', '/reset/lol', [
                'authenticatedAs' => 1
            ])
        );

        $this->assertEquals(404, $response->getStatusCode());
    }

    /** @test */
    public function signup_route_works()
    {
        $response = $this->send(
            $this->request('GET', '/signup')
        );

        $signupLoginResponse = $this->send(
            $this->request('POST', '/register', [
                'json' => [
                    'username' => 'test',
                    'password' => 'too-obscure',
                    'email' => 'test@machine.local',
                ]
            ])
        );

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals(201, $signupLoginResponse->getStatusCode());
    }

    /** @test */
    public function guests_force_redirected_by_default()
    {
        $response = $this->send(
            $this->request('GET', '/')
        );

        $this->assertEquals(302, $response->getStatusCode());
        $this->assertEquals('/login', $response->getHeader('Location')[0]);
    }

    /** @test */
    public function guests_not_force_redirected_by_choice()
    {
        $this->setting('sycho-private-facade.force_redirect', false);

        $response = $this->send(
            $this->request('GET', '/')
        );

        $this->assertEquals(200, $response->getStatusCode());
    }

    /** @test */
    public function users_cant_access_private_facade()
    {
        $postLoginResponse = $this->send(
            $this->request('POST', '/login', [
                'json' => [
                    'identification' => 'admin@machine.local',
                    'password' => 'password'
                ]
            ])
        );

        $loginResponse = $this->send(
            $this->request('GET', '/login', [
                'cookiesFrom' => $postLoginResponse
            ])
        );
        $signupResponse = $this->send(
            $this->request('GET', '/signup', [
                'cookiesFrom' => $postLoginResponse
            ])
        );

        $this->assertEquals(200, $postLoginResponse->getStatusCode());
        $this->assertEquals(302, $loginResponse->getStatusCode());
        $this->assertEquals('/', $loginResponse->getHeader('Location')[0]);
        $this->assertEquals(302, $signupResponse->getStatusCode());
        $this->assertEquals('/', $signupResponse->getHeader('Location')[0]);
    }
}
