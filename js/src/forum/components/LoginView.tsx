import app from 'flarum/forum/app';
import Component from "flarum/common/Component";
import LogInModal from "flarum/forum/components/LogInModal";
import DefaultLoginIllustration from "./DefaultLoginIllustration";
import icon from "flarum/common/helpers/icon";
import Mithril from "mithril";
import Button from "flarum/common/components/Button";

export default class LoginView<T> extends Component {
  view() {
    return (
      <div className="PrivateFacade-AuthView">
        <div className="PrivateFacade-AuthView-interface">
          <h2 className="PrivateFacade-AuthView-interface-title">{app.forum.attribute('welcomeTitle')}</h2>
          <p className="PrivateFacade-AuthView-interface-message">{m.trust(app.forum.attribute('welcomeMessage'))}</p>
          <DefaultLoginIllustration />
        </div>
        <div className="PrivateFacade-AuthView-form">
          <CustomLogInModal />
        </div>
      </div>
    );
  }
}

class CustomLogInModal extends LogInModal {
  static readonly isDismissible: boolean = false;

  // @ts-ignore
  title(): Mithril.Children {
    return [icon('fas fa-sign-in-alt'), super.title()];
  }

  view() {
    const view = super.view();

    const mapChildren = function (item: Mithril.Vnode<Mithril.Attributes>, callback: (item: Mithril.Vnode<Mithril.Attributes>) => Mithril.Vnode<Mithril.Attributes>) {
      const children = (item?.children as Array<Mithril.Vnode<Mithril.Attributes>>);

      if (children instanceof Array && "map" in children) {
        item.children = children?.map(callback).map(item => {
          return ((item?.children as Array<Mithril.Vnode<Mithril.Attributes>> || null)?.length && mapChildren(item, callback)) || item;
        });
      }

      return item;
    };

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
    view[1] = (
      <>
        <div className="PrivateFacade-AuthView-separator">
          <span class="PrivateFacade-AuthView-separator-label">{app.translator.trans('sycho-private-facade.forum.or_label')}</span>
        </div>
        <Button className="Button Button--block PrivateFacade-Button--outline PrivateFacade-Button">
          {app.translator.trans('sycho-private-facade.forum.sign_up_label')}
        </Button>
      </>
    );

    return view;
  }
}
