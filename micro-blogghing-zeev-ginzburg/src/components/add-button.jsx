import { useState } from "react";
import "./buttons.css";

function AddButton(props) {
    const {addNewNote} = props;

    function addNote(e) {
        e.preventDefault();
        const newNoteItem = {
            text:`Example Note`,
            date: new Date(),
            title: `user-name: Zeev Ginzburg`
        };
        addNewNote(newNoteItem);
    }

    return (
        <>
            <button className="add-button" onClick={addNote}>Tweet</button>
        </>
    )

}

export default AddButton;