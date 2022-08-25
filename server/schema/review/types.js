export const ReviewTypes = `
    type Review {
        id: ID!
        author_details: ReviewAuthor!
        content: String!
        created_at: String!
    }

    type ReviewAuthor {
        username: String!
        avatar_path: String
    }
`;
