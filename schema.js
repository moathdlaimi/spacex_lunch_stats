const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = require('graphql');

//Lunch Type

const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flightNumber: { type: GraphQLInt },
    missionName: { type: GraphQLString },
    launchYear: { type: GraphQLString },
    launchDateLocal: { type: GraphQLString },
    lunchSuccess: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
});

//Rocket Type

const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocketID: { type: GraphQLString },
    rocketName: { type: GraphQLString },
    rocketType: { type: GraphQLString },
  })
});