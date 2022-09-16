export interface IReview {
  id: number;
  author_details: ReviewAuthor;
  content: string;
  created_at: string;
}

interface ReviewAuthor {
  username: string;
  avatar_path: string;
}
