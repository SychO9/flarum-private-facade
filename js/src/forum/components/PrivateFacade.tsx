import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LogInView from "./LogInView";
import DefaultLoginIllustration from "./DefaultLoginIllustration";
import SignUpView from "./SignUpView";
import Button from "flarum/common/components/Button";
import extractText from "flarum/common/utils/extractText";
import Mithril from "mithril";

type SubRoute = 'login' | 'signup';
type SubRouteDefinition = {
  label: string;
  component: any;
  next: SubRoute;
};

const routes: () => Record<SubRoute, SubRouteDefinition> = () => ({
  login: {
    label: extractText(app.translator.trans('sycho-private-facade.forum.log_in_label')),
    component: LogInView,
    next: "signup",
  },
  signup: {
    label: extractText(app.translator.trans('sycho-private-facade.forum.sign_up_label')),
    component: SignUpView,
    next: "login",
  },
});

export default class PrivateFacade<T> extends Component<T> {
  currentRoute!: SubRouteDefinition;
  routes!: Record<string, SubRouteDefinition>;

  oninit(vnode: Mithril.Vnode<T, this>) {
    super.oninit(vnode);

    this.routes = routes();
    this.currentRoute = this.routes[app.initialRoute.split('/').pop() as "login"|"signup"];
  }

  view() {
    return (
      <div className="PrivateFacade">
        <div className="PrivateFacade-container container">
          <div className="PrivateFacade-AuthView">
            <div className="PrivateFacade-AuthView-interface">
              <h2 className="PrivateFacade-AuthView-interface-title">{app.forum.attribute('welcomeTitle')}</h2>
              <p className="PrivateFacade-AuthView-interface-message">{m.trust(app.forum.attribute('welcomeMessage'))}</p>
              <DefaultLoginIllustration />
            </div>
            <div className="PrivateFacade-AuthView-form">
              <this.currentRoute.component routeSwitcher={() => (
                <>
                  <div className="PrivateFacade-AuthView-separator">
                    <span class="PrivateFacade-AuthView-separator-label">{app.translator.trans('sycho-private-facade.forum.or_label')}</span>
                  </div>
                  <Button
                    className="Button Button--block PrivateFacade-Button--outline PrivateFacade-Button"
                    onclick={() => {
                      this.currentRoute = this.routes[this.currentRoute.next];
                    }}>
                    {this.routes[this.currentRoute.next].label}
                  </Button>
                </>
              )} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
