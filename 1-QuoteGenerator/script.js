
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');


let apiQuotes= [];

//Show New Quote
function newQuote() {
  //Pick a random quote from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random()*localQuotes.length)];
  console.log(quote);
}


/*
// Get Quotes From API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  //const apiUrl = 'https://type.fit/api/quotes';

  try {
 const response= await fetch(apiUrl);
 apiQuotes= await response.json();
newQuote();
  }
  catch(error) {

  }
}
*/

//onLoad
//getQuotes();
newQuote();