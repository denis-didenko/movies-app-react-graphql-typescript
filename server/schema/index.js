import { gql } from 'apollo-server';
import { MovieTypes } from './movie/index.js';

export const schema = gql`
    type Query
    type Mutation
    ${MovieTypes}
`;
