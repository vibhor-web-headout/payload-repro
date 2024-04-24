import { CollectionConfig } from 'payload/types'

import type { User } from 'payload/generated-types';

interface IUserRoleOptions {
  label: string;
  value: User['role'];
}

export const ROLES: IUserRoleOptions[] = [
  {
    label: 'Admin',
    value: 'admin'
  },
  {
    label: 'Editor',
    value: 'editor'
  },
  {
    label: 'Content Writer',
    value: 'writer'
  },
  {
    label: 'Catalog',
    value: 'catalog'
  },
  {
    label: 'Media Ops',
    value: 'media'
  },
  {
    label: 'Translator',
    value: 'translator'
  },
  {
    label: 'Freelancer',
    value: 'freelancer'
  },
  {
    label: 'Guest',
    value: 'guest'
  },
  {
    label: 'API',
    value: 'api'
  }
];


const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      hasMany: false,
      options: ROLES,
      required: true,
      // if you want a field to be part of req.user please enable saveToJWT
      saveToJWT: true,
      admin: {
        width: '50%',
        isClearable: false,
        isSortable: false
      },
      access: {
        read: () => true,
      }
    }
    // Email added by default
    // Add more fields as needed
  ],
}

export default Users
