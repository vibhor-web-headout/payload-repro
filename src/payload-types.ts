/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ITabArrayList".
 */
export type ITabArrayList =
  | {
      title: string;
      isDefaultOpen: boolean;
      tabContent?: ICardSection[] | null;
      id?: string | null;
    }[]
  | null;

export interface Config {
  collections: {
    pages: Page;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  content: {
    blocks?: (IAccordion | ICardSection | ITabWrapper)[] | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "IAccordion".
 */
export interface IAccordion {
  blockData?: {
    title: string;
    useFaqSchema: boolean;
    items?:
      | {
          title: string;
          description?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ('ltr' | 'rtl') | null;
              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          id?: string | null;
        }[]
      | null;
  };
  displayFields?: boolean | null;
  required?: boolean | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'accordion';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ICardSection".
 */
export interface ICardSection {
  blockData?: {
    title?: string | null;
    cardInARow: number;
    sectionType: 'Grid' | 'carousel';
    description?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    cards?:
      | {
          title: string;
          description?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ('ltr' | 'rtl') | null;
              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          cardLinkType?: ('Title' | 'Full Card') | null;
          ctaText?: string | null;
          media: IMedia;
          id?: string | null;
        }[]
      | null;
    exitDescription?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
  };
  displayFields?: boolean | null;
  required?: boolean | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'card-section';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "IMedia".
 */
export interface IMedia {
  alt: string;
  url?: string | null;
  type: 'IMAGE' | 'VIDEO';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ITabWrapper".
 */
export interface ITabWrapper {
  blockData?: {
    title: string;
    description?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    tabItems?: ITabArrayList;
  };
  displayFields?: boolean | null;
  required?: boolean | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'tab-wrapper';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  role: 'admin' | 'editor' | 'writer' | 'catalog' | 'media' | 'translator' | 'freelancer' | 'guest' | 'api';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}