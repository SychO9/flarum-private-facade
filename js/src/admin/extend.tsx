import Extend from 'flarum/common/extenders';
import AdminPage from 'flarum/admin/components/AdminPage';
import UploadImageButton from './components/UploadImageButton';

export default [
  new Extend.Admin()
    .setting(() => ({
      setting: 'sycho-private-facade.header_layout',
      label: app.translator.trans('sycho-private-facade.admin.settings.header_layout.title'),
      default: 'show_only_logo',
      options: {
        show_header: app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.show_header'),
        show_only_logo: app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.show_only_logo'),
        hide_secondary_items: app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.hide_secondary_items'),
      },
      type: 'select',
    }))
    .setting(
      () =>
        function (this: AdminPage) {
          const useWelcomeBannerValue = this.setting('sycho-private-facade.use_welcome_hero_text')();
          console.log(typeof useWelcomeBannerValue, useWelcomeBannerValue);
          // @ts-ignore
          const useWelcomeBanner = useWelcomeBannerValue === true || useWelcomeBannerValue === '1';

          return (
            <div className="Form-group BasicsPage-welcomeBanner-input PrivateFacade-screenBanner">
              <label>{app.translator.trans('sycho-private-facade.admin.settings.screen_banner_heading')}</label>
              <input
                disabled={useWelcomeBanner}
                type="text"
                className="FormControl"
                placeholder={app.translator.trans('sycho-private-facade.admin.settings.screen_banner_title')}
                aria-label={app.translator.trans('sycho-private-facade.admin.settings.screen_banner_title')}
                bidi={this.setting('sycho-private-facade.screen_banner_title')}
              />
              <textarea
                disabled={useWelcomeBanner}
                className="FormControl"
                placeholder={app.translator.trans('sycho-private-facade.admin.settings.screen_banner_description')}
                aria-label={app.translator.trans('sycho-private-facade.admin.settings.screen_banner_description')}
                bidi={this.setting('sycho-private-facade.screen_banner_message')}
              />
            </div>
          );
        }
    )
    .setting(() => ({
      setting: 'sycho-private-facade.use_welcome_hero_text',
      label: app.translator.trans('sycho-private-facade.admin.settings.use_welcome_hero_text'),
      default: true,
      type: 'boolean',
    }))
    .setting(() => ({
      setting: 'sycho-private-facade.primary_color_bg',
      label: app.translator.trans('sycho-private-facade.admin.settings.primary_color_bg'),
      default: true,
      type: 'boolean',
    }))
    .setting(() => ({
      setting: 'sycho-private-facade.force_redirect',
      label: app.translator.trans('sycho-private-facade.admin.settings.force_redirect'),
      default: true,
      type: 'boolean',
    }))
    .setting(() => ({
      setting: 'sycho-private-facade.route_exclusions',
      label: app.translator.trans('sycho-private-facade.admin.settings.route_exclusions'),
      type: 'text',
    }))
    .setting(() => ({
      setting: 'sycho-private-facade.url_exclusions',
      label: app.translator.trans('sycho-private-facade.admin.settings.url_exclusions'),
      type: 'text',
    }))
    .setting(
      () =>
        function () {
          return (
            <div className="Form-group HeroImageForm">
              <label for="sycho-private-facade.illustration_path">
                {app.translator.trans('sycho-private-facade.admin.settings.illustration_path')}
              </label>
              <UploadImageButton
                setting="sycho-private-facade.illustration_path"
                serializedName="sycho-private-facade.illustration_url"
                routeName="private_facade_illustration"
                name="private_facade_illustration"
              />
            </div>
          );
        }
    ),
];
