import { MovieQuery, MovieMutation, MovieResolvers } from './movie/index.js';
import { PersonQuery, PersonResolvers } from './person/index.js';
import { CreditsResolvers } from './credits/index.js';
import { GenreQuery } from './genre/index.js';
import { SearchQuery } from './search/index.js';

export const resolvers = {
    Query: {
        ...MovieQuery,
        ...PersonQuery,
        ...GenreQuery,
        ...SearchQuery,
    },

    Mutation: {
        ...MovieMutation,
    },

    Movie: MovieResolvers,
    Cast: CreditsResolvers,
    Person: PersonResolvers,
};
