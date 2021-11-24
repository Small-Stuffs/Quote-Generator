const quoteContainer = document.querySelector(".quote-container");
const quoteText = document.querySelector("#quote");
const author = document.querySelector("#author");
const btnTwitter = document.querySelector(".twitter-btn");
const btnNewQuote = document.querySelector("#new-quote");

let apiQuotes = [];

let markup = "";

//Show quote
const newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (quote.text.length > 120) {
    quoteText.classlist.add("long-quote");
  }
  // console.log(quote);
  quoteText.innerText = quote.text;
  author.innerText = quote.author;
};

// Get Quotes from API
(async function getQuotes() {
  const API_URL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(API_URL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // error
  }
})();

// Tweet quote

function tweetQuote() {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${author.textContent} `;
  window.open(twitterURL, "_blank");
}

// Listeners
btnNewQuote.addEventListener("click", newQuote);
btnTwitter.addEventListener("click", tweetQuote);
