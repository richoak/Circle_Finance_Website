import React, { Fragment } from "react";
import Header from "../Header";
import classes from "./Stepthree.module.css"
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Stepthree = () => {
    const errand = useSelector(state => state.errand.details)
    const errandbody = useSelector(state => state.errand.errandBody)
    const router = useRouter()
    console.log(errand)
    console.log(errandbody)

    const goHomeHandler = () => {
        router.push(`/`)
    }
    return (
        <Fragment>
            <Header/>
             <div className="container">
             <h4 className={classes.stepthreetitle}>Order Confirmed</h4>

             <div className={classes.box}>
            <div className="row">
            <div className="col-md-3">
                <img className={classes.image} src={errand.image} alt="" />
            </div>
            <div className="col-md-9">
            <h4>{errand.helper}<span className={classes.price}>&#x20A6; {errand.price}/hr</span></h4>
            <h6><i class="fas fa-car"></i> Phone Number: {errand.phone}</h6>
            <h6><i class="fas fa-car"></i> Status: <span style={{textTransform:"Capitalize"}}>{errand.status}</span></h6>
     
            <hr />
            <p>Errand details: {errandbody.errandBody}</p>
            <button onClick={goHomeHandler} style={{backgroundColor:"#000", color:"#FFF"}} type="submit" class="btn">Go Home</button>

        
            </div>
        </div>
            </div>
             </div>
        </Fragment>
    )
}

export default Stepthree