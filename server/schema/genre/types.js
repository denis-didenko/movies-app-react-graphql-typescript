export const GenreTypes = `
    extend type Query {
        genres: [Genre!]!
        genresSeries: [Genre!]!
    }
    type Genre {
        id: ID!
        name: String!
    }
`;
