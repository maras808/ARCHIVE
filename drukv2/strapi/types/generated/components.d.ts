import type { Struct, Schema } from '@strapi/strapi';

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

export interface CustomImagesDropdownImage extends Struct.ComponentSchema {
  collectionName: 'components_custom_images_dropdown_images';
  info: {
    displayName: 'dropdownImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'links.link', false>;
  };
}

export interface ButtonsHeroButton extends Struct.ComponentSchema {
  collectionName: 'components_buttons_hero_buttons';
  info: {
    displayName: 'heroButton';
    description: '';
  };
  attributes: {
    isMain: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'links.link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'links.link': LinksLink;
      'custom-images.dropdown-image': CustomImagesDropdownImage;
      'buttons.hero-button': ButtonsHeroButton;
    }
  }
}
