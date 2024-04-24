import {CollectionConfig, Tab} from 'payload/types';
import DocumentBlock from '../blocks';

const PageContent: Tab = {
  name: 'content',
  label: 'Content',
  fields: [DocumentBlock],
  interfaceName: 'IPageContent'
};

const Pages: CollectionConfig = {
  slug: "pages",
  labels: {
    singular: "Page",
    plural: "Pages",
  },
  admin: {
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      type: 'tabs',
      tabs: [ PageContent]
    },
  ],
};

export default Pages;
