import { useState } from "react";
import "./buttons.css";

function AddButton(props) {
    const {addNewTweet, tweetText, setTweetText} = props;

    function addTweet(e) {
        e.preventDefault();
        const newTweetItem = {
            text: tweetText,
            date: new Date(),
            title: `user-name: Zeev Ginzburg`
        };
        addNewTweet(newTweetItem);
        setTweetText("");
    }

    return (
        <>
            <button disabled={tweetText.length > 140 || tweetText.length === 0} className="add-button" onClick={addTweet}>Tweet</button>
        </>
    )

}

export default AddButton;