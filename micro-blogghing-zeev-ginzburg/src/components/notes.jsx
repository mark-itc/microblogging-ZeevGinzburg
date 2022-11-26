import "./notes.css"


function Notes(props) {
    const { noteItems, deleteNote, openNote } = props;

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
        <div className="note-div">
            {noteItems.map((note) => (
                <div className="note-card" onClick={() => { openNote(note) }}>
                    <div className="header">
                        <h2>{note.title}</h2>
                        <button onClick={(event) => {
                            event.stopPropagation();
                            deleteNote(note);
                        }}>
                            x
                        </button>
                    </div>
                    <div className="card-content">
                        <p>{note.text}</p>
                        <p>{`note date: ${humanReadebleDate(note.date)}`}</p>
                    </div>
                </div>
            ))}
        </div>

    </>

    )

}

export default Notes;