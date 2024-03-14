import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonsAsideEntry extends Struct.ComponentSchema {
  collectionName: 'components_buttons_aside_entries';
  info: {
    description: '';
    displayName: 'withIcon';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'links.link', false> &
      Schema.Attribute.Required;
  };
}

export interface CreateEvent extends Struct.ComponentSchema {
  collectionName: 'components_create_events';
  info: {
    description: '';
    displayName: 'event';
  };
  attributes: {
    shared: Schema.Attribute.Component<'create.shared', false>;
  };
}

export interface CreatePost extends Struct.ComponentSchema {
  collectionName: 'components_create_posts';
  info: {
    description: '';
    displayName: 'post';
  };
  attributes: {
    shared: Schema.Attribute.Component<'create.shared', false>;
  };
}

export interface CreateReel extends Struct.ComponentSchema {
  collectionName: 'components_create_reels';
  info: {
    description: '';
    displayName: 'reel';
  };
  attributes: {
    shared: Schema.Attribute.Component<'create.shared', false>;
  };
}

export interface CreateShared extends Struct.ComponentSchema {
  collectionName: 'components_create_shareds';
  info: {
    description: '';
    displayName: '_shared';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'links.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface CreateStory extends Struct.ComponentSchema {
  collectionName: 'components_create_stories';
  info: {
    description: '';
    displayName: 'story';
  };
  attributes: {
    shared: Schema.Attribute.Component<'create.shared', false>;
  };
}

export interface FeedFollowMore extends Struct.ComponentSchema {
  collectionName: 'components_feed_follow_mores';
  info: {
    displayName: 'followMore';
  };
  attributes: {
    button: Schema.Attribute.Component<'links.link', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FeedNoMoreData extends Struct.ComponentSchema {
  collectionName: 'components_feed_no_more_data';
  info: {
    displayName: 'noMoreData';
  };
  attributes: {
    buttonTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    src: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    title: Schema.Attribute.String;
  };
}

export interface MiscLogo extends Struct.ComponentSchema {
  collectionName: 'components_misc_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface MiscSearchbar extends Struct.ComponentSchema {
  collectionName: 'components_misc_searchbars';
  info: {
    displayName: 'searchbar';
  };
  attributes: {
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'buttons.aside-entry': ButtonsAsideEntry;
      'create.event': CreateEvent;
      'create.post': CreatePost;
      'create.reel': CreateReel;
      'create.shared': CreateShared;
      'create.story': CreateStory;
      'feed.follow-more': FeedFollowMore;
      'feed.no-more-data': FeedNoMoreData;
      'links.link': LinksLink;
      'misc.logo': MiscLogo;
      'misc.searchbar': MiscSearchbar;
    }
  }
}
