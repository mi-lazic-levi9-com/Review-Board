import { GraphQLClient } from "graphql-request";

export const datocmsClient = new GraphQLClient("https://graphql.datocms.com/", {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
  },
});
