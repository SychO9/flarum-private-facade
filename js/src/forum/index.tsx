import app from 'flarum/forum/app';
import PrivateFacade from "./components/PrivateFacade";

app.initializers.add('sycho/flarum-private-facade', () => {
  app.routes.login = {
    path: '/login',
    component: PrivateFacade,
  };

  app.routes.signup = {
    path: '/signup',
    component: PrivateFacade,
  };
});
