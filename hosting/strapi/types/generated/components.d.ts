import type { Struct, Schema } from '@strapi/strapi';

export interface MiscTypewriter extends Struct.ComponentSchema {
  collectionName: 'components_misc_typewriters';
  info: {
    displayName: 'typewriter';
  };
  attributes: {
    text: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    duration: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 500;
        },
        number
      >;
  };
}

export interface MiscLottie extends Struct.ComponentSchema {
  collectionName: 'components_misc_lotties';
  info: {
    displayName: 'lottie';
    description: '';
  };
  attributes: {
    json: Schema.Attribute.JSON & Schema.Attribute.Required;
    loop: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'links.href', false> &
      Schema.Attribute.Required;
  };
}

export interface LinksHref extends Struct.ComponentSchema {
  collectionName: 'components_links_hrefs';
  info: {
    displayName: 'href';
    description: '';
  };
  attributes: {
    value: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

export interface CardsSimpleCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_simple_cards';
  info: {
    displayName: 'simpleCard';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    button: Schema.Attribute.Component<'links.link', false>;
  };
}

export interface AboutUsJoin extends Struct.ComponentSchema {
  collectionName: 'components_about_us_joins';
  info: {
    displayName: 'join';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    Button: Schema.Attribute.Component<'links.link', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AboutUsCards extends Struct.ComponentSchema {
  collectionName: 'components_about_us_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    cardsTitle: Schema.Attribute.String & Schema.Attribute.Required;
    cardsDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    cards: Schema.Attribute.Component<'cards.simple-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'misc.typewriter': MiscTypewriter;
      'misc.lottie': MiscLottie;
      'links.link': LinksLink;
      'links.href': LinksHref;
      'cards.simple-card': CardsSimpleCard;
      'about-us.join': AboutUsJoin;
      'about-us.cards': AboutUsCards;
    }
  }
}
