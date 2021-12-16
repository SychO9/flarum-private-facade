import app from 'flarum/forum/app';
import type Mithril from "mithril";
import Component from "flarum/common/Component";
import SignUpModal from "flarum/forum/components/SignUpModal";
import icon from "flarum/common/helpers/icon";
import { AuthViewAttrs } from "./LogInView";
import {IInternalModalAttrs} from "flarum/common/components/Modal";

export default class SignUpView extends Component<AuthViewAttrs> {
  view() {
    return <CustomSignUpModal routeSwitcher={this.attrs.routeSwitcher} />;
  }
}

class CustomSignUpModal extends SignUpModal<AuthViewAttrs & IInternalModalAttrs> {
  static readonly isDismissible: boolean = false;

  // @ts-ignore
  title(): Mithril.Children {
    return [icon('fas fa-user-plus'), super.title()];
  }

  footer() {
    const view = super.footer();

    view[0] = this.attrs.routeSwitcher();

    return view;
  }
}
