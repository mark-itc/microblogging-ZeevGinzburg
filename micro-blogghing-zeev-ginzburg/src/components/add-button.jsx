import { useState } from "react";
import "./buttons.css";

function AddButton(props) {
    const {addNewNote, tweetText} = props;

    function addNote(e) {
        e.preventDefault();
        const newNoteItem = {
            text: tweetText,
            date: new Date(),
            title: `user-name: Zeev Ginzburg`
        };
        addNewNote(newNoteItem);
    }

    return (
        <>
            <button disabled={tweetText.length >= 140} className="add-button" onClick={addNote}>Tweet</button>
        </>
    )

}

export default AddButton;