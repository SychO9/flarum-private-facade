import app from 'flarum/admin/app';
import UploadImageButton from "./components/UploadImageButton";

app.initializers.add('sycho/flarum-private-facade', (app) => {
  app.extensionData.for('sycho-private-facade')
    .registerSetting({
      setting: 'sycho-private-facade.header_layout',
      label: app.translator.trans('sycho-private-facade.admin.settings.header_layout.title'),
      default: 'show_only_logo',
      options: {
        'show_header': app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.show_header'),
        'show_only_logo': app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.show_only_logo'),
        'hide_secondary_items': app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.hide_secondary_items'),
      },
      type: "select",
    })
    .registerSetting({
      setting: 'sycho-private-facade.primary_color_bg',
      label: app.translator.trans('sycho-private-facade.admin.settings.primary_color_bg'),
      default: true,
      type: "boolean",
    })
    .registerSetting({
      setting: 'sycho-private-facade.force_redirect',
      label: app.translator.trans('sycho-private-facade.admin.settings.force_redirect'),
      default: true,
      type: "boolean",
    })
    .registerSetting(() => {
      return (
        <div className="Form-group HeroImageForm">
          <label for="sycho-private-facade.illustration_path">{app.translator.trans('sycho-private-facade.admin.settings.illustration_path')}</label>
          <p className="helpText">{app.translator.trans('sycho-private-facade.admin.settings.illustration_path_help', {
            link: <a href="https://themeisle.com/illustrations/" target="_blank" rel="nofollow noopener">ThemeIsle</a>
          })}</p>
          <UploadImageButton setting="sycho-private-facade.illustration_path" serializedName="sycho-private-facade.illustration_url" routeName="private_facade_illustration" name="private_facade_illustration" />
        </div>
      );
    });
});
