import React, { Fragment } from "react";
import Header from "../Header";
import classes from "./Steptwo.module.css"
import AllHelpers from "../Helper/AllHelpers";

const Steptwo = (props) => {
    return (
        <Fragment>
             <Header/>
             <div className="container">
             <h4 className={classes.steptwotitle}>Select a helper to assign to your errand</h4>
             <AllHelpers all_helpers={props.helpers}/>    
             </div>
             
        </Fragment>
        
    )
}

export default Steptwo