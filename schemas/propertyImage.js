export default {
  name: "propertyImage",
  title: "Property Image",
  type: "image",
  fields: [
    {
      name: "caption",
      title: "caption",
      type: "string",
      options: {
        isHightLength: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
};
