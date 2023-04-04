import React, { useState } from 'react';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);
  const apiUrl = process.env.REACT_APP_API_GATEWAY_URL;

  const fetchTweets = async () => {
    try {
      const response = await fetch(apiUrl + '/fetchTweets');
      const data = await response.json();
      setTweets(data);
    } catch (error) {
      console.error('Error fetching tweets:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Social Media Aggregator</h1>
        <button onClick={fetchTweets}>Fetch Tweets</button>
        <div className="tweets-container">
          {tweets.map((tweet, index) => (
            <div key={index} className="tweet">
              <h3>{tweet.user.name}</h3>
              <p>{tweet.text}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
