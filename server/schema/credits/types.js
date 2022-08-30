export const CreditsTypes = `
    type Credits {
        id: ID!
        cast: [Cast!]!
        crew: [Crew!]!
    }

    type CreditsTv {
        id: ID!
        cast: [Cast!]!
        crew: [CrewAggregate!]!
    }

    type Cast {
        id: ID!
        name: String
        character: String
        profile_path: String
        known_for_department: String
        job: String
        department: String
        person: Person!
    }
    
    type Crew {
        id: ID!
        name: String!
        department: String
        job: String
        profile_path: String
        person: Person!
    }

    type CrewAggregate {
        id: ID!
        name: String!
        department: String
        profile_path: String
        popularity: Float
        jobs: [Job!]
    }

    type Job {
        credit_id: String
        job: String
        episode_count: Int
    }
`;
