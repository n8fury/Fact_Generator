// Collection Of Quote
const quotes = [
  {
    quote: "Bangladesh is the 8th most populous country in the world.",
  },
  {
    quote:
      "Three UNESCO World Heritage sites are located in Bangladesh, including the Mosque City of Bagerhat.",
  },
  {
    quote: "The nominal GDP per capita is $3,900.",
  },
  {
    quote:
      "One of the largest mangrove forests in the world is located in Bangladesh.",
  },
  {
    quote:
      "The Pohela Boishakh is a huge part of Bengali culture. It takes place in April, and it is the country’s new year’s celebration.",
  },
  {
    quote: "Mahasthangarh is the oldest city in Bangladesh.",
  },
  {
    quote:
      "Bangladesh has had a rapidly growing economy over the last few years, boasting about 6% growth annually from 1996 to 2008.",
  },
  {
    quote: "Bangladesh gained its independence from Pakistan in 1971.",
  },
  {
    quote:
      "One of the largest mangrove forests in the world is located in Bangladesh.",
  },
  {
    quote: "Close to 90% of the population are Muslims.",
  },
];
// New Quote Button
const quoteBtn = document.getElementById("quote-btn");
// Get Quote and author Section
const quote = document.querySelector(".quote");

// Event Handler
quoteBtn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
});
