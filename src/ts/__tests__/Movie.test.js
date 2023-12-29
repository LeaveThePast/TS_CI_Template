import Movie from "../domain/Movie";

describe('Movie', () => {
  it('should create a movie instance with the correct properties', () => {
    const movie = new Movie("Название фильма", 2022, ["Драма", "Комедия"], 8.5, "Режиссер Имя");
    expect(movie).toEqual({
      title: "Название фильма",
      year: 2022,
      genre: ["Драма", "Комедия"],
      rating: 8.5,
      director: "Режиссер Имя"
    });
  });

  it('should display movie information correctly', () => {
    const movie = new Movie("Название фильма", 2022, ["Драма", "Комедия"], 8.5, "Режиссер Имя");
    const consoleSpy = jest.spyOn(console, 'log');
    movie.displayInfo();
    expect(consoleSpy).toHaveBeenCalledWith("Название фильма", 2022, ["Драма", "Комедия"], 8.5, "Режиссер Имя");
  });
});
