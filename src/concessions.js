/*
  Responsibility:
    Generate the HTML for all concessions and return it
*/
// Import getConcessions function from database.js

import { getConcessions } from "./database.js";

export const Concessions = () => {
  // Invoke the getConcessions function to get data
  const concessionsData = getConcessions();
  // Start building a string filled with HTML syntax
  let htmlString = "<div class='concessions'>";

  // Iterate data
  for (let concession of concessionsData) {
    // create HTML element for each concession showing the name
    htmlString += `<div>${concession.name} <p>${concession.food}</p></div>`;
  }

  htmlString += "</div>";
  // return HTML
  return htmlString

};
