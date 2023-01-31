import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from "./Growth.module.css"


const Growth = () => {
  const router = useRouter();

    return (
      <>
      
      <div className="container">
           
           <div className="row">
        
               
           <div className={`col-md-6 ${classes.investorsimage}`}>
                   <p style={{textAlign:"center"}} ><img className="img-fluid" src="/images/homepage/mockupphone.svg" alt="" /></p>
               </div>

               <div className="col-md-6">
               <h1 className={classes.steps_title}>Start growing your <br/> wealth now </h1>
               {/* <h2 className={classes.steps_subtitle}>Building wealth shouldn't be nerve racking. With Oak Finance.</h2> */}
                <h6 className={classes.steps_subtitle_trust}>Building wealth shouldn't be nerve racking. With <br/>Oak Finance.</h6>

               </div>

         

             
           </div>
       </div>
     </>
    )
}

export default Growth