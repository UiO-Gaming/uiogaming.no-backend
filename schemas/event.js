export default {
  name: "event",
  title: "Arrangement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Navn",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "slug",
      title: "Slug",
      description:
        "Lenke til arrangementet. Sørg for at navnet er unikt og trykk på generate. Hvis ikke, endre denne til noe unikt",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Tidspunkt",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
        calendarTodayLabel: "I dag",
      },
    },
    {
      name: "location",
      title: "Sted",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
      validation: (Rule) => Rule.required().max(120),
    },
  ],

  preview: {
    select: {
      title: "title",
      date: "date",
      location: "location",
    },
    prepare(selection) {
      const { date } = selection;
      return Object.assign({}, selection, {
        subtitle: date && `${date}`,
      });
    },
  },
};
