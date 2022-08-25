export const CreditsTypes = `
    type Credits {
        id: ID!
        cast: [Cast!]!
        crew: [Crew!]!
    }

    type Cast {
        id: ID!
        name: String!
        character: String!
        profile_path: String
        known_for_department: String
        job: String
        department: String
        person: Person!
    }
    
    type Crew {
        id: ID!
        name: String!
        department: String!
        job: String!
        profile_path: String
        person: Person!
    }
`;
