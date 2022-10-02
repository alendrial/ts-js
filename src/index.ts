// import { renderSearchFormBlock } from "./search-form";
// import { renderSearchStubBlock } from "./search-results";
// import { renderUserBlock } from "./user";
// import { renderToast } from "./lib";

import { Book } from "./book"
import { books } from "./book-collection"


// window.addEventListener("DOMContentLoaded", () => {
//   renderUserBlock("Maxim", "/img/max.png", 0);
//   renderSearchFormBlock(new Date(), new Date());
//   renderSearchStubBlock();
//   renderToast(
//     {
//       text: "Это пример уведомления. Используйте его при необходимости",
//       type: "success",
//     },
//     {
//       name: 'Понял',
//       handler: () => {
//         console.log('Уведомление закрыто');
//       },
//     }
//   );
// });


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
} else {
  console.log(recommendBook && recommendBook[0].name)
}
