import type { Struct, Schema } from '@strapi/strapi';

export interface MiscIcon extends Struct.ComponentSchema {
  collectionName: 'components_misc_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    isAnimated: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    baseIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    animatedIcon: Schema.Attribute.Media<'images'>;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    link: Schema.Attribute.Component<'links.href', false> &
      Schema.Attribute.Required;
  };
}

export interface LinksHref extends Struct.ComponentSchema {
  collectionName: 'components_links_hrefs';
  info: {
    displayName: 'href';
  };
  attributes: {
    value: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'misc.icon': MiscIcon;
      'links.link': LinksLink;
      'links.href': LinksHref;
    }
  }
}
