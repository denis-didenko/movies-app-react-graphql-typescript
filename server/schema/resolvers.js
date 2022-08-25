import { MovieMutation, MovieQuery, MovieResolvers, CastResolvers, PersonResolvers } from './movie/index.js';

export const resolvers = {
    Query: {
        ...MovieQuery,
        // ...ReviewQuery,
    },

    Mutation: {
        ...MovieMutation,
        // ...ReviewMutation,
    },

    Movie: MovieResolvers,
    Cast: CastResolvers,
    Person: PersonResolvers,
};
