const quotes = [
    "Life is a succession of lessons which must be lived to be understood." ,
    "Don't allow anyone to steal your joy. .",
    "The only way to do great work is to love what you do.",
    "Life begins at the end of your comfort zone.",
    "The road to success is always under construction.",
    "It always seems impossible until it's done.",
    "You'll never find a rainbow if you're looking down.",

  ];
  
  const quoteText = document.getElementById('quote');
  const button = document.querySelector('button');
  
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.classList.remove('fade');
    setTimeout(() => {
      quoteText.textContent = randomQuote;
      quoteText.classList.add('fade');
    }, 100);
  }
  
  button.addEventListener('click', showRandomQuote);
  showRandomQuote();
  