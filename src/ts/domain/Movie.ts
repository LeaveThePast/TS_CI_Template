export default class Movie {
  private title: string;
  private year: number;
  private genre: string[];
  private rating: number;
  private director: string;

  constructor(title: string, year: number, genre: string[], rating: number, director: string) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.rating = rating;
    this.director = director;
  }

  displayInfo(): void {
    console.log(this.title, this.year, this.genre, this.rating, this.director)
  }
}
