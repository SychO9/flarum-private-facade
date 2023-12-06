import app from 'flarum/forum/app';
import PrivateFacade from './components/PrivateFacade';
import HeaderPrimary from 'flarum/forum/components/HeaderPrimary';
import { extend, override } from 'flarum/common/extend';
import HeaderSecondary from 'flarum/forum/components/HeaderSecondary';
import Mithril from 'mithril';
import Navigation from 'flarum/common/components/Navigation';
import LinkButton from 'flarum/common/components/LinkButton';
import DefaultResolver from 'flarum/common/resolvers/DefaultResolver';

app.initializers.add('sycho/flarum-private-facade', () => {
  app.routes['sycho-private-facade.login'] = {
    path: '/login',
    component: PrivateFacade,
  };

  app.routes['sycho-private-facade.signup'] = {
    path: '/signup',
    component: PrivateFacade,
  };

  // @ts-ignore
  const isPrivateFacadePage = (): boolean => ['sycho-private-facade.login', 'sycho-private-facade.signup'].includes(app.current.data.routeName);

  override(HeaderSecondary.prototype, 'view', (orig, ...args) => {
    if (isPrivateFacadePage() && ['show_only_logo', 'hide_secondary_items'].includes(app.forum.attribute('sycho-private-facade.header_layout'))) {
      return null;
    }

    return orig(...args);
  });

  override(HeaderPrimary.prototype, 'view', (orig, ...args) => {
    if (isPrivateFacadePage() && app.forum.attribute('sycho-private-facade.header_layout') === 'show_only_logo') {
      return null;
    }

    const original = orig(...args);

    if (
      isPrivateFacadePage() &&
      original &&
      app.forum.attribute('sycho-private-facade.primary_color_bg') &&
      app.forum.attribute('sycho-private-facade.header_layout') !== 'show_header'
    ) {
      (original as Mithril.Vnode<any>).attrs['data-primary-background'] = true;
    }

    return original;
  });

  // @ts-ignore
  override(Navigation.prototype, 'getBackButton', (orig, ...args) => {
    if (isPrivateFacadePage()) {
      return null;
    }

    // @ts-ignore
    return orig(...args);
  });

  extend(HeaderSecondary.prototype, 'items', (items) => {
    if (items.has('logIn')) {
      items.setContent(
        'logIn',
        <LinkButton className="Button Button--link" href={app.route('sycho-private-facade.login')}>
          {app.translator.trans('core.forum.header.log_in_link')}
        </LinkButton>
      );
    }

    if (items.has('signUp')) {
      items.setContent(
        'signUp',
        <LinkButton className="Button Button--link" href={app.route('sycho-private-facade.signup')}>
          {app.translator.trans('core.forum.header.sign_up_link')}
        </LinkButton>
      );
    }
  });

  override(DefaultResolver.prototype, 'onmatch', function (orig, args, requestedPath, route) {
    const urlExclusions = app.forum.attribute<Array<string>>('sycho-private-facade.url_exclusions');

    if (
      !app.session.user &&
      app.forum.attribute<boolean>('sycho-private-facade.force_redirect') &&
      !app.forum.attribute<Array<string>>('sycho-private-facade.route_exclusions').includes(this.routeName) &&
      !urlExclusions.some((url) => url.includes('*') ? new RegExp(url.replace(/\*/g, '.*').replace(/\//g, '\\/')).test(requestedPath) : url === requestedPath)
    ) {
      return m.route.set(app.route('sycho-private-facade.login'));
    }

    return orig(args, requestedPath, route);
  });
});
