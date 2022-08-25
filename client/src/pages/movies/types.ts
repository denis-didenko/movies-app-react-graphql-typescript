export interface IMovie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    runtime: number;
    homepage: string;
    genres: IGenre[];
    casts: [ICast];
    reviews: [IReview];
    recommendations: [IMovie];
}

export interface IMovieData {
    movie: IMovie;
}

export interface ICast {
    id: number;
    name: string;
    character: string;
    profile_path: string;
    known_for_department: string;
    person: IPerson;
}

export interface IPerson {
    id: number;
    name: string;
    profile_path: string;
    biography: string;
    birthday: string;
    deathday: string;
    place_of_birth: string;
    cast: IMovie[];
}

export interface IPersonData {
    person: IPerson;
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
