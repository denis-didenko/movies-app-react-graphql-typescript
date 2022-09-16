export interface IGenre {
  id: string;
  name: string;
}

export interface IGenreMoviesData {
  genres: [IGenre];
}

export interface IGenreSeriesData {
  genresSeries: [IGenre];
}
