import { gql } from 'apollo-server';
import { MovieTypes } from './movie/index.js';
import { PersonTypes } from './person/index.js';
import { CastTypes } from './cast/index.js';
import { GenreTypes } from './genre/index.js';
import { ReviewTypes } from './review/index.js';

export const schema = gql`
    type Query
    type Mutation
    ${MovieTypes}
    ${PersonTypes}
    ${CastTypes}
    ${GenreTypes}
    ${ReviewTypes}
`;
