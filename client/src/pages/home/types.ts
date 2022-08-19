export interface UpcomingMoviesQuery {
    upcomingMovies: UpcomingMovie[];
}

export interface UpcomingMovie {
    title: string;
    backdrop_path: string;
}
