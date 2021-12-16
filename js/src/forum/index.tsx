import app from 'flarum/forum/app';
import PrivateFacade from "./components/PrivateFacade";
import HeaderPrimary from "flarum/forum/components/HeaderPrimary";
import {override} from "flarum/common/extend";
import HeaderSecondary from "flarum/forum/components/HeaderSecondary";
import Mithril from "mithril";
import Navigation from "flarum/common/components/Navigation";

app.initializers.add('sycho/flarum-private-facade', () => {
  app.routes.login = {
    path: '/login',
    component: PrivateFacade,
  };

  app.routes.signup = {
    path: '/signup',
    component: PrivateFacade,
  };

  // @ts-ignore
  const isPrivateFacadePage = (): boolean => ['login', 'signup'].includes(app.current.data.routeName);

  override(HeaderSecondary.prototype, "view", (orig, ...args) => {
    if (isPrivateFacadePage() && ['show_only_logo', 'hide_secondary_items'].includes(app.forum.attribute('sycho-private-facade.header_layout'))) {
      return null;
    }

    return orig(...args);
  });

  override(HeaderPrimary.prototype, "view", (orig, ...args) => {
    if (isPrivateFacadePage() && app.forum.attribute('sycho-private-facade.header_layout') === 'show_only_logo') {
      return null;
    }

    const original = orig(...args);

    if (isPrivateFacadePage() && original && app.forum.attribute('sycho-private-facade.primary_color_bg')) {
      (original as Mithril.Vnode<any>).attrs['data-primary-background'] = true;
    }

    return original;
  });

  // @ts-ignore
  override(Navigation.prototype, "getBackButton", (orig, ...args) => {
    if (isPrivateFacadePage()) {
      return null;
    }

    // @ts-ignore
    return orig(...args);
  });
});
