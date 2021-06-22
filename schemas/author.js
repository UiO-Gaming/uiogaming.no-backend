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
      options: {
        hotspot: true,
      },
    },
    {
      name: "role",
      title: "Stilling",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "email",
      title: "E-post",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "bio",
      title: "Bio",
      type: "string",
      validation: (Rule) => Rule.required().max(280),
    },
    {
      name: "order",
      title: "Rekkefølge",
      type: "number",
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
