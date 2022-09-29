"use strict";
class Book {
    constructor(name, genre, pageAmount) {
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
function findSuitableBook(genre, pagesLimit, multipleRecommendations = true) {
    const findAlgorithm = (book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return books.find(findAlgorithm);
    }
}
const recommendBook = findSuitableBook("fantasy", 1000);
if (recommendBook instanceof Book) {
    console.log(recommendBook);
}
