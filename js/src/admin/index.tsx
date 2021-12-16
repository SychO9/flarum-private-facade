import app from 'flarum/admin/app';

app.initializers.add('sycho/flarum-private-facade', (app) => {
  app.extensionData.for('sycho-private-facade')
    .registerSetting({
      setting: 'sycho-private-facade.header_layout',
      label: app.translator.trans('sycho-private-facade.admin.settings.header_layout.title'),
      default: 'show_only_logo',
      options: {
        'show_header': app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.show_header'),
        'show_only_logo': app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.show_only_logo'),
        'hide_secndary_items': app.translator.trans('sycho-private-facade.admin.settings.header_layout.options.hide_secondary_items'),
      },
      type: "select",
    })
    .registerSetting({
      setting: 'sycho-private-facade.primary_color_bg',
      label: app.translator.trans('sycho-private-facade.admin.settings.primary_color_bg'),
      default: true,
      type: "boolean",
    });
});
