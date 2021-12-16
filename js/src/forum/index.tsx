import app from 'flarum/forum/app';
import PrivateFacade from "./components/PrivateFacade";
import HeaderPrimary from "flarum/forum/components/HeaderPrimary";
import {override} from "flarum/common/extend";
import HeaderSecondary from "flarum/forum/components/HeaderSecondary";

app.initializers.add('sycho/flarum-private-facade', () => {
  app.routes.login = {
    path: '/login',
    component: PrivateFacade,
  };

  app.routes.signup = {
    path: '/signup',
    component: PrivateFacade,
  };

  override(HeaderSecondary.prototype, "view", (orig) => {
    if (['show_only_logo', 'hide_secondary_items'].includes(app.forum.attribute('sycho-private-facade.header_layout'))) {
      return null;
    }

    return orig;
  });

  override(HeaderPrimary.prototype, "view", (orig) => {
    if (app.forum.attribute('sycho-private-facade.header_layout') === 'show_only_logo') {
      return null;
    }

    return orig;
  });
});
