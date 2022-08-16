import { ApolloServer } from 'apollo-server';
import { schema as typeDefs } from './schema/index.js';
import { resolvers } from './schema/resolvers.js';
import { MovieAPI } from './api/index.js';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    dataSources: () => ({
        movieAPI: new MovieAPI(),
    }),
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
