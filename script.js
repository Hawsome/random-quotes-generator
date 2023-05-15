// Quotes Data Source
const quotes = [
    {
      content: "It is what it is, but what it is is not what it's meant to be.",
      author: "Awesome Akinfenwa",
    },
    {
      content: "Life's Not Hard [LNH].",
      author: "Awesome Akinfenwa",
    },
    // Add more quotes here
  ];
  
  let lastLocalQuote = null; // Track the last displayed local quote
  
  // Generate Random Quote from Local Data Source
  function generateLocalRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
  
    // Check if the randomly selected quote is the same as the last displayed local quote
    if (lastLocalQuote !== null && quotes.length > 1) {
      while (quotes[randomIndex] === lastLocalQuote) {
        randomIndex = Math.floor(Math.random() * quotes.length);
      }
    }
  
    const randomQuote = quotes[randomIndex];
    lastLocalQuote = randomQuote; // Update the last displayed local quote
  
    // Display the random quote
    document.getElementById("quote").textContent = randomQuote.content;
    document.getElementById("author").textContent = randomQuote.author;
  }
  
  // Generate Random Quote from API
  function generateAPIRandomQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("quote").textContent = data.content;
        document.getElementById("author").textContent = data.author;
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
  
  // Generate Random Quote
  function generateRandomQuote() {
    const randomNum = Math.random();
    if (randomNum < 0.3) {
      // Generate quote from local data source
      generateLocalRandomQuote();
    } else {
      // Generate quote from API
      generateAPIRandomQuote();
    }
  }
  
  // Trigger Generation
  document.getElementById("generate").addEventListener("click", generateRandomQuote);
  
  // Initial Quote Generation
  generateRandomQuote();
  
  // Share Quote
  function shareQuote() {
    const quote = document.getElementById("quote").textContent;
    const author = document.getElementById("author").textContent;
    const shareText = `"${quote}" - ${author}`;
  
    // Create a temporary element to hold the quote text
    const tempElem = document.createElement("textarea");
    tempElem.value = shareText;
    document.body.appendChild(tempElem);
    tempElem.select();
  
    // Copy the quote text to the clipboard
    document.execCommand("copy");
    document.body.removeChild(tempElem);
  
    // Show a success message
    alert("The quote has been copied to the clipboard!");
  }
  
  // Trigger Share
  document.getElementById("share").addEventListener("click", shareQuote);