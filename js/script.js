/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote: "If it doesn't challenge you, it won't change you.",
    source: "Fred DeVito",
  },
  {
    quote: "Whatever your mind can conceive and believe, it can achieve.",
    source: "Napoleon Hill",
    citation: "Think and Grow Rich",
    year: 1937,
  },
  {
    quote:
      "“You are braver than you believe, stronger than you seem, and smarter than you think.",
    source: "A.A. Milne",
    citation: "Winnie-the-Pooh",
    year: 1926,
  },
  {
    quote: "It always seems impossible until it's done.",
    source: "Nelson Mandela",
    year: 2001,
  },
  {
    quote: "The mind is everything. What you think you become.",
    source: "Buddha",
  },
  {
    quote:
      "Strength doesn’t come from what you can do. It comes from overcoming the things you once thought you couldn’t.",
    source: "Rikki Rogers",
  },
  {
    quote:
      "Sometimes the bad things that happen in our lives put us directly on the path to the best things that will ever happen to us.",
    source: "Nicole Reed",
  },
  {
    quote:
      "Don’t be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
    source: "Michelle Obama",
  },
  {
    quote:
      "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016,
  },
];

/***
 * `getRandomQuote` function to generate random number used to access index in array
 ***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function to access properties in each object of array and display quote
 ***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  if (randomQuote.citation !== undefined) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year !== undefined) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  return (document.getElementById("quote-box").innerHTML = html);
}
/***
 * click event listener for the print quote button
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
