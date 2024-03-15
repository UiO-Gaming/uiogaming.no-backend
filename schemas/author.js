import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export default {
  name: "author",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "boardMember",
      title: "Styremedlem?",
      type: "boolean",
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
    },
    {
      name: "role",
      title: "Stilling",
      type: "localeString",
    },
    {
      name: "contactInfo",
      title: "Kontaktinfo (f. eks: Discordbrukernavn eller E-post)",
      type: "string",
      validation: (Rule) => Rule.max(50),
    },
    {
      name: "bio",
      title: "Bio",
      type: "localeString",
    },
    orderRankField({ type: "author" }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title.$baseLanguage.id",
      media: "image",
    },
  },
};
