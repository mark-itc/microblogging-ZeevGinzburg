import AddButton from "./add-button";
import "./form.css"
import { useState } from "react";


function Form(props){
    const {addNewNote} = props;
    const [tweetText, setTweetText] = useState("");
    

    const changeTweetText = (e) => {
        setTweetText(e.target.value);
    }

    return(
        <form className="main-form" action="">
            <textarea value={tweetText} onChange={changeTweetText} cols="30" rows="10" placeholder="What you have in mind..."></textarea>
            <div className="chars-warning">The tweet can't contain more then 140 chars.</div>
            <AddButton addNewNote={addNewNote} tweetText={tweetText}/>
        </form>
    )

}

export default Form;