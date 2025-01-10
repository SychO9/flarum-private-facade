import app from 'flarum/forum/app';
import type Mithril from 'mithril';
import Component from 'flarum/common/Component';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import Icon from 'flarum/common/components/Icon';
import { AuthViewAttrs } from './LogInView';
import { IInternalModalAttrs } from 'flarum/common/components/Modal';

export default class SignUpView extends Component<AuthViewAttrs> {
  view() {
    return <CustomSignUpModal routeSwitcher={this.attrs.routeSwitcher} animateShow={() => null} />;
  }
}

class CustomSignUpModal extends SignUpModal<AuthViewAttrs & IInternalModalAttrs> {
  static readonly isDismissible: boolean = false;

  // @ts-ignore
  title(): Mithril.Children {
    return [<Icon name="fas fa-user-plus" />, super.title()];
  }

  view(): JSX.Element {
    const view = super.view() as Mithril.Vnode<Mithril.Attributes>;

    view.attrs.className = view.attrs?.className?.replace('fade', '');

    return view;
  }

  footer() {
    const view = super.footer();

    view[0] = this.attrs.routeSwitcher();

    return view;
  }
}
