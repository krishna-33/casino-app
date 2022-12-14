const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} = require("graphql");

const PromotionType = new GraphQLObjectType({
  name: "promotion",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    image: { type: GraphQLString },
  }),
});

module.exports = PromotionType;
