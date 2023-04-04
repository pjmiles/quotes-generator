import { useEffect, useState } from "react";
import { ExternalLink } from 'react-external-link';
import axios from "axios";

const Quotes = () => {
  const [quoteInfo, setQuoteInfo] = useState({});
  const [loading, setLoading] = useState(true)

  const baseURL = 'https://api.quotable.io/random'

  const getQuote = async () => {
    try {
     const fetchData = await axios.get(baseURL)
     setQuoteInfo({
        text: fetchData.data.content,
        author: fetchData.data.author,
     })
    } catch(err){
      console.log(err)
    }
  };

  useEffect(() => {
    setTimeout(() => 
    setLoading(false),
    3000)
    getQuote()
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
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <i className="fas fa-volume-up"></i>
              </li>
            </ul>

            <button id="new-quote" onClick={getQuote}>
              {loading === false ? 'New Quote' : 'Loading...'}
            </button>
          </div>
          <div className="link-container">
            <ExternalLink href="https://github.com/pjmiles/quotes-generator">
              <span className="ext-link">pjmiles</span>
            </ExternalLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
