import "./tweets.css";
import { sort } from 'fast-sort';


function Tweets(props) {
    const { tweetItemsSortedByDate } = props;
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
            {tweetItemsSortedByDate.map((tweet) => (
                <div className="tweet-card" 
                // style={{"order" : `${tweetItemsSortedByDate.indexOf(tweet) * -1}`}} 
                >
                    <div className="header">
                        <h2>{tweet.userName}</h2>
                        <p>{`tweeted on: ${humanReadebleDate(tweet.date)}`}</p>
                    </div>
                    <div className="card-content">
                        <p>{tweet.content}</p>
                    </div>
                </div>
            ))}  
        </div>
    </>
    )
}

export default Tweets;