export default {
  name: "post",
  title: "Blogginnlegg",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "Lenke til innlegget. Sørg for at tittelen er unik og trykk på generate. Hvis ikke, endre denne til noe unikt",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Person",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Forsidebilde",
      type: "image",
    },
    {
      name: "body",
      title: "Brødtekst",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Sammendrag",
      description:
        "Dette er teksten som vil vises på forsiden som forhåndsvisning",
      type: "string",
      validation: (Rule) => Rule.required().max(150),
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `${author}`,
      });
    },
  },
};
