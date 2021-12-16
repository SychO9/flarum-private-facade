import Component, {ComponentAttrs} from "flarum/common/Component";
import LogInModal from "flarum/forum/components/LogInModal";
import icon from "flarum/common/helpers/icon";
import Mithril from "mithril";
import mapChildren from "../utils/mapChildren";
import {IInternalModalAttrs} from "flarum/common/components/Modal";

export interface AuthViewAttrs extends ComponentAttrs {
  routeSwitcher: () => Mithril.Vnode<Mithril.Attributes>;
}

export default class LogInView extends Component<AuthViewAttrs> {
  view() {
    return <CustomLogInModal routeSwitcher={this.attrs.routeSwitcher} animateShow={() => null} />;
  }
}

class CustomLogInModal extends LogInModal<AuthViewAttrs & IInternalModalAttrs> {
  static readonly isDismissible: boolean = false;

  // @ts-ignore
  title(): Mithril.Children {
    return [icon('fas fa-sign-in-alt'), super.title()];
  }

  view() {
    const view = super.view();

    mapChildren(view, (item) => {
      if (item?.attrs?.className?.includes('Modal-header')) {
        (item.children as Array<Mithril.Vnode<Mithril.Attributes>>).push(super.footer()[0] as Mithril.Vnode<Mithril.Attributes>);
      }

      return item;
    });

    return view;
  }

  footer() {
    const view = super.footer();

    delete view[0];
    view[1] = this.attrs.routeSwitcher();

    return view;
  }
}
