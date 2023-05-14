        // Generate Random Quote
        function generateRandomQuote() {
            fetch("https://api.quotable.io/random")
                .then(response => response.json())
                .then(data => {
                    document.getElementById("quote").textContent = data.content;
                    document.getElementById("author").textContent = data.author;
                })
                .catch(error => {
                    console.log("Error:", error);
                });
        }

        // Trigger Generation
        document.getElementById("generate").addEventListener("click", generateRandomQuote);

        // Initial Quote Generation
        generateRandomQuote();