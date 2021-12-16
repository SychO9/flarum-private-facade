import app from 'flarum/admin/app';
import Button, {IButtonAttrs} from 'flarum/common/components/Button';
import type Mithril from "mithril";

interface IUploadImageButtonAttrs extends IButtonAttrs {
  onclick: () => void;
}

export default class UploadImageButton<T extends IUploadImageButtonAttrs> extends Button<T> {
  loading = false;

  view(vnode: Mithril.Vnode<T, this>) {
    this.attrs.loading = this.loading;
    this.attrs.className = (this.attrs.className || '') + ' Button';

    if (app.data.settings[this.attrs.setting]) {
      this.attrs.onclick = this.remove.bind(this);

      return (
        <div className="UploadImageButton-container">
          <div className="UploadImageButton-image-container">
            <img className="UploadImageButton-image" src={app.forum.attribute(this.attrs.serializedName)} alt="" />
          </div>
          {/* @ts-ignore */}
          {super.view({ ...vnode, children: <>{app.translator.trans('core.admin.upload_image.remove_button')}</> })}
        </div>
      );
    } else {
      this.attrs.onclick = this.upload.bind(this);
    }

    // @ts-ignore
    return super.view({ ...vnode, children: <>{app.translator.trans('core.admin.upload_image.upload_button')}</> });
  }

  /**
   * Prompt the user to upload an image.
   */
  upload() {
    if (this.loading) return;

    const $input = $('<input type="file">');

    $input
      .appendTo('body')
      .hide()
      .click()
      .on('change', (e) => {
        const body = new FormData();
        // @ts-ignore
        body.append(this.attrs.name, $(e.target)[0].files[0]);

        this.loading = true;
        m.redraw();

        app
          .request({
            method: 'POST',
            url: this.resourceUrl(),
            serialize: (raw) => raw,
            body,
          })
          .then(this.success.bind(this), this.failure.bind(this));
      });
  }

  /**
   * Remove the logo.
   */
  remove() {
    this.loading = true;
    m.redraw();

    app
      .request({
        method: 'DELETE',
        url: this.resourceUrl(),
      })
      .then(this.success.bind(this), this.failure.bind(this));
  }

  resourceUrl() {
    return app.forum.attribute('apiUrl') + '/' + this.attrs.routeName;
  }

  /**
   * After a successful upload/removal, reload the page.
   */
  success() {
    window.location.reload();
  }

  /**
   * If upload/removal fails, stop loading.
   */
  failure() {
    this.loading = false;
    m.redraw();
  }
}
