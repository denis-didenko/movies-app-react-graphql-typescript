import { gql } from 'apollo-server';
import { MovieTypes } from './movie/index.js';
import { PersonTypes } from './person/index.js';
import { CreditsTypes } from './credits/index.js';
import { GenreTypes } from './genre/index.js';
import { ReviewTypes } from './review/index.js';

export const schema = gql`
    type Query
    type Mutation
    ${MovieTypes}
    ${PersonTypes}
    ${CreditsTypes}
    ${GenreTypes}
    ${ReviewTypes}
`;
