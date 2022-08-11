import React, { Fragment, useRef } from "react";
import Header from "./Header";
import classes from "./Signup.module.css"
import { useRouter } from 'next/router';
import useHttp from "../hooks/use-http";

const HelperSignUp = () => {
    const router = useRouter()

    const nameRef = useRef();
    const totalErrandsRef = useRef();
    const mobileRef = useRef();
    const summaryRef = useRef();
    const imageRef = useRef();
    const ratingsRef = useRef();
    const noofreviewsRef = useRef();
    const priceRef = useRef();
    const phoneRef = useRef();

    const { isLoading, error, sendRequest:sendSignUpRequest }  = useHttp();
    
    const signupHandler = (e) => {
        e.preventDefault()
        const createdUser = ((response) => {
            console.log(response)
            router.push(`/helpersignup`)
            nameRef.current.value = ""
             totalErrandsRef.current.value = "",
            mobileRef.current.value= "",
            summaryRef.current.value= "",
            imageRef.current.value= "",
            ratingsRef.current.value= "",
            noofreviewsRef.current.value= "",
            priceRef.current.value= "",
            phoneRef.current.value= ""
        })

        sendSignUpRequest({
            "url": "/api/new-helper",
            method: "POST",
            body: {
                name:nameRef.current.value,
                totalerrand: totalErrandsRef.current.value,
                mobile:mobileRef.current.value,
                summary:summaryRef.current.value,
                image:imageRef.current.value,
                ratings:ratingsRef.current.value,
                noofreviews:noofreviewsRef.current.value,
                price:priceRef.current.value,
                phone:phoneRef.current.value
              
            },
            headers: { 'Content-Type': 'application/json',},
        }, createdUser)

    }


    return (
        <Fragment>
             <Header/>
             <div className="container">
             <h5 className={classes.signuptitle}>Signup as an Helper</h5>
             
             <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <form>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input ref={nameRef} type="text" class="form-control"  placeholder="Enter your name"/>
                    </div>

                    <div class="form-group">
                        <label for="">Total Errands</label>
                        <input ref={totalErrandsRef} type="number" class="form-control" id="" placeholder="Total errands so far"/>
                    </div>

                 
                        <div class="form-group">
                        <label for="">Are you mobile ?</label>
                        <select class="form-control" id="" ref={mobileRef}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select>
                    </div>
                    

                    <div class="form-group">
                        <label for="">Summary</label>
                        <input ref={summaryRef} type="text" class="form-control" id="" placeholder="A brief summary"/>
                    </div>

                    <div class="form-group">
                        <label for="">Image</label>
                        <input ref={imageRef} type="text" class="form-control" id="" placeholder="Image url"/>
                    </div>

                    <div class="form-group">
                        <label for="">Ratings (1 - 5)</label>
                        <input ref={ratingsRef} type="number" class="form-control" id="" placeholder="Ratings"/>
                    </div>

                    <div class="form-group">
                        <label for="">No of Reviews</label>
                        <input ref={noofreviewsRef} type="number" class="form-control" id="" placeholder="No of reviews"/>
                    </div>

                    <div class="form-group">
                        <label for="">Price</label>
                        <input ref={priceRef} type="number" class="form-control" id="" placeholder="Price"/>
                    </div>

                    <div class="form-group">
                        <label for="">Phone Number</label>
                        <input ref={phoneRef} type="number" class="form-control" id="" placeholder="Phone Number"/>
                    </div>

    

                    <p className={classes.signupbuttonparagraph}>
                    <button onClick={signupHandler} style={{backgroundColor:"#000", color:"#FFF"}} type="submit" class="btn btn-block ">Sign up</button>
                    </p>
                   

            </form>
                </div>
                <div className="col-md-4"></div>
             </div>
          
             </div>
             
        </Fragment>
        
    )
}

export default HelperSignUp