export const PersonTypes = `
    extend type Query {
        person(id: ID!): Person
    }

    type Person {
        id: ID!
        name: String!
        biography: String!
        birthday: String
        deathday: String
        place_of_birth: String
        profile_path: String
        cast: [Movie!]!
    }
`;
