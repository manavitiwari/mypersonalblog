export default {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      name: "propertyType",
      title: "propertyType",
      type: "string",
      option: {
        list: [
          { title: "house", value: "house" },
          { title: "flat", value: "flat" },
          { title: "bed and breakfast", value: "bed-and-breakfast" },
          { title: "boutique Hotel", value: "boutique-hotel" },
        ],
        layout: "radio",
      },
    },
    {
      name: "mainImage",
      title: "main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "propertyImage" }],
    },
    {
      name: "pricePerNight",
      title: "pricePerNight",
      type: "number",
    },
    {
      name: "bed",
      title: "bed",
      type: "number",
    },
    {
      name: "bedrooms",
      title: "bedrooms",
      type: "number",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "description",
      title: "description",
      type: "string",
    },
    {
      name: "host",
      title: "host",
      type: "host",
    },
    {
      name: "reviews",
      title: "reviews",
      type: "array",
      of: [{ type: "review" }],
    },
  ],
};
