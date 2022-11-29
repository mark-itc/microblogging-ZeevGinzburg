import './App.css';
import Tweets from './components/tweets';
import Form from './components/form';
import { useState, useEffect } from "react";

let localSavedTweetItems;

function App() {
  if (localSavedTweetItems === null) {
  localStorage.setItem("localSavedTweetItems", JSON.stringify([]));}
  localSavedTweetItems = JSON.parse(localStorage.getItem("localSavedTweetItems"));
  let [tweetItems, setTweetItems] = useState(localSavedTweetItems);

  localSavedTweetItems = localStorage.setItem("localSavedTweetItems", JSON.stringify(tweetItems));

  const addNewTweet = (newTweetItem) => {
    setTweetItems([...tweetItems, newTweetItem]);
  }

  return (
    <div className="App">
      <Form addNewTweet={addNewTweet} />
      <Tweets tweetItems={tweetItems}  />
    </div>
  );
}

export default App;