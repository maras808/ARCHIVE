import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksHref extends Struct.ComponentSchema {
  collectionName: 'components_links_hrefs';
  info: {
    displayName: 'href';
  };
  attributes: {
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.Component<'links.href', false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksSvg extends Struct.ComponentSchema {
  collectionName: 'components_links_svgs';
  info: {
    displayName: 'svg';
  };
  attributes: {
    href: Schema.Attribute.Component<'links.href', false> &
      Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.button': ButtonsButton;
      'links.href': LinksHref;
      'links.link': LinksLink;
      'links.svg': LinksSvg;
    }
  }
}
