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
    // Shuffle the quotes array
    for (let i = quotes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [quotes[i], quotes[j]] = [quotes[j], quotes[i]];
    }
  
    // Get the first quote from the shuffled array
    const randomQuote = quotes[0];
  
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
    if (randomNum < 0.2) {
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
    const quoteElem = document.getElementById("quote");
  
    // Capture the screenshot using html2canvas
    html2canvas(quoteElem).then((canvas) => {
      // Convert the canvas to an image data URL
      const imageData = canvas.toDataURL();
  
      // Create an anchor element with the image as a data URL
      const anchorElem = document.createElement("a");
      anchorElem.href = imageData;
      anchorElem.download = "quote_screenshot.png";
      anchorElem.style.display = "none";
  
      // Append the anchor element to the document body
      document.body.appendChild(anchorElem);
  
      // Trigger a click event on the anchor element
      anchorElem.click();
  
      // Clean up by removing the anchor element
      document.body.removeChild(anchorElem);
    });
  }
  
  // Trigger Share
  document.getElementById("share").addEventListener("click", shareQuote);