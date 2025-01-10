import LogInModal from 'flarum/forum/components/LogInModal';
import type { IInternalModalAttrs } from 'flarum/common/components/Modal';
import type Mithril from 'mithril';
import Icon from 'flarum/common/components/Icon';
import mapChildren from '../utils/mapChildren';
import type { AuthViewAttrs } from './LogInView';

export default class LogInSection extends LogInModal<AuthViewAttrs & IInternalModalAttrs> {
  static readonly isDismissibleViaCloseButton: boolean = false;
  static readonly isDismissibleViaBackdropClick: boolean = false;
  static readonly isDismissibleViaEscKey: boolean = false;

  // @ts-ignore
  title(): Mithril.Children {
    return [<Icon name="fas fa-sign-in-alt" />, super.title()];
  }

  view(): JSX.Element {
    const view = super.view() as Mithril.Vnode<Mithril.Attributes>;

    mapChildren(view, (item) => {
      if (item?.attrs?.className?.includes('Modal-header')) {
        (item.children as Array<Mithril.Vnode<Mithril.Attributes>>).push(super.footer()[0] as Mithril.Vnode<Mithril.Attributes>);
      }

      return item;
    });

    view.attrs.className = view.attrs?.className?.replace('fade', '');

    return view;
  }

  footer() {
    const view = super.footer();

    if (app.forum.attribute<boolean>('allowSignUp') && view.children instanceof Array) {
      view.children[1] = this.attrs.routeSwitcher();
    }

    return view;
  }
}
