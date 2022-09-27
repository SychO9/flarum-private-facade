import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LogInView from './LogInView';
import DefaultLoginIllustration from './DefaultLoginIllustration';
import SignUpView from './SignUpView';
import Button from 'flarum/common/components/Button';
import extractText from 'flarum/common/utils/extractText';
import Mithril from 'mithril';
import Page, { IPageAttrs } from 'flarum/common/components/Page';
import classList from 'flarum/common/utils/classList';

type SubRoute = 'sycho-private-facade.login' | 'sycho-private-facade.signup';
type SubRouteDefinition = {
  label: string;
  component: any;
  next: SubRoute;
};

const routes: () => Record<SubRoute, SubRouteDefinition> = () => ({
  'sycho-private-facade.login': {
    label: extractText(app.translator.trans('sycho-private-facade.forum.log_in_label')),
    component: LogInView,
    next: 'sycho-private-facade.signup',
  },
  'sycho-private-facade.signup': {
    label: extractText(app.translator.trans('sycho-private-facade.forum.sign_up_label')),
    component: SignUpView,
    next: 'sycho-private-facade.login',
  },
});

export default class PrivateFacade<T extends IPageAttrs> extends Page<T> {
  currentRoute!: SubRouteDefinition;
  routes!: Record<string, SubRouteDefinition>;

  oninit(vnode: Mithril.Vnode<T, this>) {
    super.oninit(vnode);

    this.routes = routes();
    // @ts-ignore
    this.currentRoute = this.routes[app.current.data.routeName as 'sycho-private-facade.login' | 'sycho-private-facade.signup'];

    app.setTitle(this.currentRoute.label);

    if (!document.body.classList.contains('body--privateFacade')) {
      document.body.classList.add('body--privateFacade');
    }

    const showHeader = !['show_only_logo', 'hide_secondary_items'].includes(app.forum.attribute('sycho-private-facade.header_layout'));

    this.bodyClass = classList({
      'App--privateFacade': true,
      'App--privateFacade--showHeader': showHeader,
      'App--privateFacade--logoOnly': !showHeader,
      'App--privateFacade--primaryBg': app.forum.attribute('sycho-private-facade.primary_color_bg'),
    });
  }

  view() {
    return (
      <div className="PrivateFacade">
        <div className="PrivateFacade-container container">
          <div className="PrivateFacade-AuthView">
            <div className="PrivateFacade-AuthView-interface" data-primary-background={app.forum.attribute('sycho-private-facade.primary_color_bg')}>
              <h2 className="PrivateFacade-AuthView-interface-title">{app.forum.attribute('sycho-private-facade.screen_banner_title')}</h2>
              <p className="PrivateFacade-AuthView-interface-message">{m.trust(app.forum.attribute('sycho-private-facade.screen_banner_message'))}</p>
              <DefaultLoginIllustration />
            </div>
            <div className="PrivateFacade-AuthView-form">
              <this.currentRoute.component
                routeSwitcher={() =>
                  app.forum.attribute<boolean>('allowSignUp') ? (
                    <>
                      <div className="PrivateFacade-AuthView-separator">
                        <span class="PrivateFacade-AuthView-separator-label">{app.translator.trans('sycho-private-facade.forum.or_label')}</span>
                      </div>
                      <Button
                        className="Button Button--block PrivateFacade-Button--outline PrivateFacade-Button"
                        onclick={() => {
                          if (
                            ['sycho-private-facade.login', 'sycho-private-facade.signup'].includes(app.history.getPrevious()?.name) &&
                            app.history.getPrevious()?.name === this.currentRoute.next
                          ) {
                            app.history.back();
                          } else {
                            app.history.push(this.currentRoute.next, this.routes[this.currentRoute.next].label, app.route(this.currentRoute.next));
                            m.route.set(app.route(this.currentRoute.next));
                          }
                        }}
                      >
                        {this.routes[this.currentRoute.next].label}
                      </Button>
                    </>
                  ) : null
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
