export interface IMovie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
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

export interface IGenreData {
    genres: [IGenre];
}

export interface IGenre {
    id: string;
    name: string;
}

export interface IDiscoverData {
    discoverMovies: [IMovie];
}
