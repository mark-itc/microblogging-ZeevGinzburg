// import './home-page.css';
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import Tweets from '../tweets';
import Form from '../form';
import Navbar from '../navbar';
import { useState, useEffect } from "react";
import { sort } from 'fast-sort';

function HomePage() {
    const serverURL = 'https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet';
    
    const [tweetItems,setTweetItems] = useState([]);
    const [loading,setLoading] = useState(false);
    
    async function addNewTweet(newTweet){
    
       fetch(serverURL ,{
        method:'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(newTweet)
       })
       loadTweets();
       console.log(loading);
    
    }
    
    async function loadTweets() {
      setLoading(true)
      const loadingResult = await fetch(serverURL)
      const jsonResult = await loadingResult.json();
      const data = jsonResult.tweets.map(item=>({
        content:item.content,
        date:item.date,
        id:item.id,
        userName:item.userName
      }))
      setTweetItems(data)
      setLoading(false)
    }
    
    useEffect(()=>{
      loadTweets()
    },[]);

    const tweetItemsSortedByDate = sort(tweetItems).desc(tweet => new Date(tweet.date));
 

    
      return (
        <div className="App">
          <Navbar />
          {loading && <div>Loading ...</div>}
          {!loading &&
            <div>
              <Form addNewTweet={addNewTweet} serverURL={serverURL}/>
              <Tweets tweetItemsSortedByDate={tweetItemsSortedByDate}  />
            </div>
            
          }
          </div>
      );
    }
    
    export default HomePage;