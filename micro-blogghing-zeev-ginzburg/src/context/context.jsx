import React from "react";
import { createContext } from React;

const myContext = createContext(false);



function Context() {

    
    return(
        <userNameContext.Provider value="Zeev">
            
        </userNameContext.Provider>
    
        )

}

export default myContext;