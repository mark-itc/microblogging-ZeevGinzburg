import AddButton from "./add-button";
import "./form.css"

function Form(props){
    const {addNewNote} = props;

    return(
        <form className="main-form" action="">
            <div>placeholder for text-area</div>
            <AddButton addNewNote={addNewNote}/>
        </form>
    )

}

export default Form;