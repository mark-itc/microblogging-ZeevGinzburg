import "./tweets.css"


function Tweets(props) {
    const { tweetItems, openTweet } = props;

    const humanReadebleDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();



        return (
            `${day}/${month}/${year} ${hour}:${minute} ${second}`
        )

    }


    return (<>
        <div className="tweet-div">
            {tweetItems.map((tweet) => (
                <div className="tweet-card" onClick={() => { openTweet(tweet) }}>
                    <div className="header">
                        <h2>{tweet.title}</h2>
                        <p>{`tweet date: ${humanReadebleDate(tweet.date)}`}</p>
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