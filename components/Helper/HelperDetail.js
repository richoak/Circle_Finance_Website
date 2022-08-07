import React, { Fragment } from "react";
import classes from"./Helperdetail.module.css"
import { useDispatch } from "react-redux";
import { errandActions } from "../../store/errandSlice";
import { useRouter } from 'next/router';

const HelperDetail = (props) => {
    const router = useRouter()

    const dispatch = useDispatch()    
    const errandHandler = () => {
  
        dispatch(errandActions.add({
            'helper':props.name,
            'status':'pending',
            'price': props.price,
            'body': 'body',
            'phone':props.phone,
            'image':props.image

        }))
    router.push(`/stepthree`)
    }
   
    return (
        <Fragment>
            <div className={classes.box}>
            <div className="row">
            <div className="col-md-3">
                <img className={classes.image} src={props.image} alt="" />
            </div>
            <div className="col-md-9">
            <h4>{props.name} <span className={classes.price}>&#x20A6;{props.price}/hr</span></h4>
            <h6><i class="fas fa-running"></i>  {props.totalErrands} Errands ran</h6>
            <h6><i class="fas fa-car"></i> Mobile: {props.mobile}</h6>
            <h6><i class="far fa-star"></i> Ratings: {props.ratings} ({props.noofreviews} reviews)</h6>
     
            <hr />
            <p>Brief summary: {props.summary}</p>
            <button onClick={errandHandler} style={{backgroundColor:"#000", color:"#FFF"}} type="submit" class="btn">Select & Assign</button>

        
            </div>
        </div>
            </div>
   
      
        </Fragment>
      

    )
}

export default HelperDetail