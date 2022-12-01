import TweetButton from "./tweet-button";
import "./form.css"
import { useState } from "react";


function Form(props){
    const {addNewTweet, serverURL} = props;
    const [tweetText, setTweetText] = useState("");
    
    const changeTweetText = (e) => {
        setTweetText(e.target.value);
    }

    return(
        <form className="main-form" action="">
            <textarea value={tweetText} onChange={changeTweetText} cols="30" rows="10" placeholder="What you have in mind..."></textarea>
            <>{tweetText.length > 140 ? <div className="chars-warning">The tweet can't contain more then 140 chars.</div> : <div className="no-chars-warning"></div> }   </>
            <TweetButton addNewTweet={addNewTweet} setTweetText={setTweetText} tweetText={tweetText} serverURL={serverURL}/>
        </form>
    )
}

export default Form;