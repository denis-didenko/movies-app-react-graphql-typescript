export const GenreTypes = `
    extend type Query {
        genres: [Genre!]!
    }
    type Genre {
        id: ID!
        name: String!
    }
`;
