(function() {

    var quotes = $(".quotes");
    var quoteIndex = 0;
  
    function showNextQuote() {
      
      quotes.eq(quoteIndex % quotes.length)//eq() is an inbuilt method that returrns the elements index
        .fadeIn(1500)
        .delay(1500)
        .fadeOut(1500, showNextQuote);
        ++quoteIndex;
    }
  
    showNextQuote();
  
  })();