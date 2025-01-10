import SignUpModal from 'flarum/forum/components/SignUpModal';
import type { AuthViewAttrs } from './LogInView';
import type { IInternalModalAttrs } from 'flarum/common/components/Modal';
import type Mithril from 'mithril';
import Icon from 'flarum/common/components/Icon';

export default class SignUpSection extends SignUpModal<AuthViewAttrs & IInternalModalAttrs> {
  static readonly isDismissibleViaCloseButton: boolean = false;
  static readonly isDismissibleViaBackdropClick: boolean = false;
  static readonly isDismissibleViaEscKey: boolean = false;

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
