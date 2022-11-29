import "./buttons.css";

function TweetButton(props) {
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
            <button disabled={tweetText.length > 140 || tweetText.length === 0} className="tweet-button" onClick={addTweet}>Tweet</button>
        </>
    )
}

export default TweetButton;