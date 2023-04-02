import { useState, useEffect } from "react";
function Alert() {
    const [timeCheck, setTimeCheck] = useState(false);
    const afterThreeSecs = () => {
        console.log(timeCheck);
        setTimeout(  () => {
            setTimeCheck(true);
            console.log(timeCheck);
        } ,3000);
    }

    useEffect(()=>{
        afterThreeSecs() 
    },[]) 

    return(
        <>
        {timeCheck && 
        <div style={{"background-color": "yellow"}}>
            passed three secs form loadin'
        </div>}
        </>
    )
}

export default Alert;