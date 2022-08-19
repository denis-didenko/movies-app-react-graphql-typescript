export interface IMovie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    casts: [ICast];
    reviews: [IReview];
    recommendations: [IMovie];
}

interface ICast {
    id: number;
    name: string;
    character: string;
    profile_path: string;
    known_for_department: string;
}

interface IReview {
    id: number;
    author_details: ReviewAuthor;
    content: string;
    created_at: string;
}

interface ReviewAuthor {
    username: string;
    avatar_path: string;
}
