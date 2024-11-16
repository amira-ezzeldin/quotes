var quotes = [
    "A room without books is like a body without a soul. ― Marcus Tullius Cicero ",
    "You only live once, but if you do it right, once is enough. ― Mae West" ,
    "In three words I can sum up everything I've learned about life: it goes on.  ― Robert Frost",
    "A friend is someone who knows all about you and still loves you. ― Elbert Hubbard",
    "Always forgive your enemies; nothing annoys them so much. ― Oscar Wilde"
];
var quoteElement = document.getElementById("quote");
var changeQuotebtn = document.getElementById("change");

function changeQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);  
    quoteElement.textContent = quotes[randomIndex];  
}

changeQuotebtn.addEventListener("click", changeQuote);