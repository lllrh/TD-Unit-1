// FSJS - Random Quote Generator

let quoteText = document.querySelector(".quote");
let quoteSource = document.querySelector(".source");
let quoteTag = document.querySelector(".tag");
const colorArray = ['salmon', 'pink', 'green', 'gray', 'blue'];

let quotes = [
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: "Dr. Seuss",
        year: '2002',
        citation: "book",
        tag: "cry"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        source: "Marilyn Monroe",
        year: '',
        citation: "",
        tag: "love"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        source: "Oscar Wilde",
        year: '1800',
        citation: "",
        tag: "be-yourself"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein",
        year: "",
        citation: "book",
        tag: "human-nature"
    },
    {
        quote: "So many books, so little time.",
        source: "Frank Zappa",
        year: '1903',
        citation: "book",
        tag: "read"
    }
];

// Function to return random quote from quotes Array.
function getRandomQuote(){

    // To find a random element in quotes array.
    return quotes[Math.floor(Math.random() * (quotes.length))];
}

// Function to print quote on page.
function printQuote(){

    // Get a random quote from quotes array.
    let randomQuote = getRandomQuote();

    // Change quote text content.
    quoteText.textContent = randomQuote.quote;

    // Change source, citation, years.
    // Since citation and years are within <p class="source">, we have to use innerHTML instead of textContent.
    if (randomQuote.year && !randomQuote.citation){
        quoteSource.innerHTML = randomQuote.source + "<span class='year'>"+ randomQuote.year + "</span>";
    } else if (randomQuote.citation && !randomQuote.year){
        quoteSource.innerHTML = randomQuote.source + "<span class='citation'>" + randomQuote.citation + "</span>";
    } else if (randomQuote.citation && randomQuote.year){
        quoteSource.innerHTML = randomQuote.source + "<span class='citation'>" + randomQuote.citation + "</span><span class='year'>"+ randomQuote.year + "</span>";
    } else {
        // we can use textContent because both year and citation don't exist.
        quoteSource.textContent = randomQuote.source;
    }

    // Change tag.
    quoteTag.textContent = randomQuote.tag; 

    // Change back ground color to a random color in colorArray.
    document.body.style.backgroundColor = colorArray[Math.floor(Math.random() * (quotes.length))]
}

// The event listener when loadQuote is clicked.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Change quotes automatically after 2.5 seconds passed.
let timeoutID = window.setInterval(printQuote, 2500);