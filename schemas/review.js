export default {
  name: "review",
  title: "review",
  type: "object",
  fields: [
    {
      name: "reviewDescription",
      title: "reviewDescription",
      type: "string",
    },
    {
      name: "traveller",
      title: "Traveller",
      type: "traveller",
    },

    {
      name: "rating",
      title: "rating",
      type: "string",
      options: {
        list: [
          { title: "5 start", value: "5 star" },
          { title: "4 start", value: "4 star" },
          { title: "3 star", value: "3 star" },
          { title: "2 star", value: "2 star" },
          { title: "1 star", value: "1 star" },
        ],
        layout: "Radio",
      },
    },
  ],
};
