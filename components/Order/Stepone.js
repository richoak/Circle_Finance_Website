import React, { Fragment, useRef, useState } from "react";
import Header from "../Header";
import classes from "./Stepone.module.css"
import { useRouter } from 'next/router';
import Link from "next/link";

import { useDispatch } from "react-redux";
import { errandActions } from "../../store/errandSlice";
import { useSelector } from "react-redux";

const Stepone = () => {

    const router = useRouter()
    const dispatch = useDispatch()    
    const errandRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const location = useSelector(state => state.errand.location)
    console.log(location)

    const steponeHandler = () => {
        setLoading(true)
        const errandInput = errandRef.current.value
        if(errandInput === ""){
            setError("Errand field is empty!")
            setLoading(false)
        }
        else{
            setError("Just a second...")
            dispatch(errandActions.addErrand({
                'errandBody':errandRef.current.value,
            }))
        router.push(`/steptwo`)
        }
       
    }
    return (
        <Fragment>
             <Header/>
             <div className="container">
             <h4 className={classes.steponetitle}>Step One</h4>
             <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Input details about your errand.</label>
                <textarea ref={errandRef} class="form-control" id="" rows="8" placeholder="Be detailed as you can"></textarea>
                 </div>
                 
                 {error && <p style={{textAlign:"center"}}>{error}</p>}
                 
                 {/* <p style={{textAlign:"center"}}>Errand field is empty!</p> */}
                 {/* <p style={{textAlign:"center"}}> */}
                 <Link href="/">
                 <button  style={{backgroundColor:"#000", color:"#FFF"}} type="submit" class="btn"> Go Back</button>
                 </Link>

                    <button  data-testid="num2" onClick={steponeHandler} 
                    style={{backgroundColor:"#000", color:"#FFF", marginLeft:"20px"}} 
                    type="submit" class="btn">
                        
                    { loading &&   <div style={{marginRight:"10px"}} class="spinner-border spinner-border-sm" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>}

                         See helpers & prices
                        
                  
                         </button>
                    {/* </p> */}
                </div>
                <div className="col-md-2"></div>
             </div>
            
          
             </div>
             
        </Fragment>
        
    )
}

export default Stepone