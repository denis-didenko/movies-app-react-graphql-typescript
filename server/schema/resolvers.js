import { MovieQuery, MovieMutation, MovieResolvers } from './movie/index.js';
import { PersonQuery, PersonResolvers } from './person/index.js';
import { CastResolvers } from './cast/index.js';
import { GenreQuery } from './genre/index.js';

export const resolvers = {
    Query: {
        ...MovieQuery,
        ...PersonQuery,
        ...GenreQuery,
    },

    Mutation: {
        ...MovieMutation,
    },

    Movie: MovieResolvers,
    Cast: CastResolvers,
    Person: PersonResolvers,
};
