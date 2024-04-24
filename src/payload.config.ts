import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'

import Users from "./collections/Users";
import Pages from "./collections/Pages";
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Pages, Users],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
    disableIndexHints: true,
    connectOptions: {
      dbName: 'payload',
      useFacet: false,
      autoIndex: true,
      autoCreate: true
    }
  })
});
