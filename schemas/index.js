const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require("graphql");
const promotionData = require("../promotions.json");
const PromotionType = require("./typeDefs/PromotionType");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllPromotions: {
      type: new GraphQLList(PromotionType),
      args: { id: { type: GraphQLInt } },
      resolve: () => promotionData,
    },
  },
});
const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    createPromotion: {
      type: PromotionType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        image: { type: GraphQLString },
      },
      resolve(parent, args) {
        promotionData.push({
          id: promotionData.length + 1,
          name: args.name,
          description: args.description,
          image: args.image,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
