import { MovieMutation, MovieQuery } from './movie/index.js';

export const resolvers = {
    Query: {
        ...MovieQuery,
        // ...ReviewQuery,
    },
    Mutation: {
        ...MovieMutation,
        // ...ReviewMutation,
    },
    // Product: ProductResolvers,
    // Review: ReviewResolvers,
};
