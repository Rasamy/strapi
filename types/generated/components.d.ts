import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsArticleList extends Schema.Component {
  collectionName: 'components_components_article_lists';
  info: {
    displayName: 'ArticleList';
    icon: 'bulletList';
  };
  attributes: {
    Article: Attribute.Component<'components.article', true>;
  };
}

export interface ComponentsArticle extends Schema.Component {
  collectionName: 'components_components_articles';
  info: {
    displayName: 'Article';
  };
  attributes: {
    title: Attribute.String;
    date: Attribute.Date;
    icon: Attribute.Media;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    type: Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'outline-icon']
    >;
  };
}

export interface ComponentsHeader extends Schema.Component {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface ComponentsInfoCards extends Schema.Component {
  collectionName: 'components_components_info_cards';
  info: {
    displayName: 'InfoCards';
    icon: 'feather';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    backgroud: Attribute.Enumeration<['blue', 'grey', 'purple', 'white']>;
    description: Attribute.Text;
  };
}

export interface ComponentsTitle extends Schema.Component {
  collectionName: 'components_components_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ComponentsTwoButton extends Schema.Component {
  collectionName: 'components_components_two_buttons';
  info: {
    displayName: 'TwoButton';
  };
  attributes: {
    FirstBtn: Attribute.Component<'components.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.article-list': ComponentsArticleList;
      'components.article': ComponentsArticle;
      'components.button': ComponentsButton;
      'components.header': ComponentsHeader;
      'components.info-cards': ComponentsInfoCards;
      'components.title': ComponentsTitle;
      'components.two-button': ComponentsTwoButton;
    }
  }
}
