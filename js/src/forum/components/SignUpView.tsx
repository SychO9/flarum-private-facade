import Component from 'flarum/common/Component';
import type { AuthViewAttrs } from './LogInView';
import type Mithril from 'mithril';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

export default class SignUpView extends Component<AuthViewAttrs> {
  protected loading: boolean = true;
  protected SignUpSection: any;

  oninit(vnode: Mithril.Vnode<AuthViewAttrs, this>) {
    super.oninit(vnode);

    import('flarum/forum/components/SignUpModal').then(() =>
      import('./SignUpSection').then((SignUpSection) => {
        this.SignUpSection = SignUpSection.default;

        this.loading = false;
        m.redraw();
      })
    );
  }

  view() {
    if (this.loading) {
      return <LoadingIndicator />;
    }

    const SignUpSection = this.SignUpSection;

    return <SignUpSection routeSwitcher={this.attrs.routeSwitcher} animateShow={() => null} />;
  }
}
