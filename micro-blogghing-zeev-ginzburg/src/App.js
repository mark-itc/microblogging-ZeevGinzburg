import './App.css';
import Tweets from './components/tweets';
import Form from './components/form';
import { useState } from "react";

// localStorage.setItem("twit", JSON.stringify(t))
// const t1 = JSON.parse(localStorage.getItem("twit"))
// aplication localstorage



function App() {
  const [tweetItems, setTweetItems] = useState([]);
  const [opened, setOpened] = useState(null);
  const addNewTweet = (newTweetItem) => {
    setTweetItems([...tweetItems, newTweetItem]);
  }

  const deleteTweet = (tweetToDelete) => {
    setTweetItems(tweetItems.filter((tweet) => {
      if (tweet === tweetToDelete) {
        return false;
      }
      else return true;
    }));
  }

  const openTweet = (tweetToOpen) => {
    setOpened(tweetToOpen);
  }


  return (
    <div className="App">
      <Form addNewTweet={addNewTweet}  />
      <Tweets tweetItems={tweetItems} deleteTweet={deleteTweet} openTweet={openTweet}/>
    </div>
  );
}

export default App;