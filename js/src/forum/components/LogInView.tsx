import Component, { type ComponentAttrs } from 'flarum/common/Component';
import type Mithril from 'mithril';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

export interface AuthViewAttrs extends ComponentAttrs {
  routeSwitcher: () => Mithril.Vnode<Mithril.Attributes>;
}

export default class LogInView extends Component<AuthViewAttrs> {
  protected loading: boolean = true;
  protected LogInSection: any;

  oninit(vnode: Mithril.Vnode<AuthViewAttrs, this>) {
    super.oninit(vnode);

    import('flarum/forum/components/LogInModal').then(() =>
      import('./LogInSection').then((LogInSection) => {
        this.LogInSection = LogInSection.default;

        this.loading = false;
        m.redraw();
      })
    );
  }

  view() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    const LogInSection = this.LogInSection;

    return <LogInSection routeSwitcher={this.attrs.routeSwitcher} animateShow={() => null} />;
  }
}
