import { useEffect, useState } from "react";

const Quotes = () => {
  const [quoteInfo, setQuoteInfo] = useState({});

  const getQuote = async () => {
    await fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) =>
        setQuoteInfo({
          text: data.content,
          author: data.author,
        })
      );
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div id="quote-box">
      <div className="wrapper">
        <h1 className="heading">Quote of the day</h1>
        <p id="text">{quoteInfo.text}</p>
        <div className="author-container">
          <p id="author">--{quoteInfo.author}</p>
        </div>

        <div className="buttons">
          <div className="features">
            <ul>
              <li>
                <a
                  id="tweet-quote"
                  href={
                    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
                    quoteInfo.text
                  }
                >
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <i class="fas fa-volume-up"></i>
              </li>
            </ul>

            <button id="new-quote" onClick={getQuote}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
