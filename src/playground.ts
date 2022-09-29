class Book {
  name: string;
  genre: string;
  pageAmount: number;

  constructor(name: string, genre: string, pageAmount: number) {
    this.name = name;
    this.genre = genre;
    this.pageAmount = pageAmount;
  }
}

const books = [
  new Book("Harry Potter", "fantasy", 980),
  new Book("Lord of the Rings", "fantasy", 1001),
  new Book("How to be productive", "lifestyle", 500),
  new Book("Game of Thrones", "fantasy", 999),
];

// function findSuitableBook(genre: string, pagesLimit: number) {
//   return books.find((book) => {
//     return book.genre === genre && book.pageAmount <= pagesLimit;
//   });
// }

function findSuitableBook(
  genre: string,
  pagesLimit: number,
  multipleRecommendations = true
): Book | Book[] | undefined {
  const findAlgorithm = (book: Book) => {
    return book.genre === genre && book.pageAmount <= pagesLimit;
  };
  if (multipleRecommendations) {
    return books.filter(findAlgorithm);
  } else {
    return books.find(findAlgorithm);
  }
}

const recommendBook = findSuitableBook("fantasy", 1000);
if (recommendBook instanceof Book) {
  console.log(recommendBook)
}
