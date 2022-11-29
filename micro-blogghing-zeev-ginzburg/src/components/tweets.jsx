import "./tweets.css"


function Tweets(props) {
    const { tweetItems } = props;
    const humanReadebleDate = (date) => {
        let dateForTransform = new Date(date)
        const day = dateForTransform.getDate();
        const month = dateForTransform.getMonth() + 1;
        const year = dateForTransform.getFullYear();
        const hour = dateForTransform.getHours();
        const minute = dateForTransform.getMinutes();
        const second = dateForTransform.getSeconds();

        return (
            `${day}/${month}/${year} at ${hour}:${minute} ${second}`
        )

    }



    return (
    <>
        <div className="tweet-div">
            {tweetItems.map((tweet) => (
                <div className="tweet-card" style={{"order" : `${tweetItems.indexOf(tweet) * -1}`}} 
                // onClick={() => { openTweet(tweet) }}
                >
                    <div className="header">
                        <h2>{tweet.title}</h2>
                        <p>{`tweeted on: ${humanReadebleDate(tweet.date)}`}</p>
                    </div>
                    <div className="card-content">
                        <p>{tweet.text}</p>
                    </div>
                </div>
            ))}  
        </div>
    </>
    )
}

export default Tweets;