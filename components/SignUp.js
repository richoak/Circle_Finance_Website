import React, { Fragment, useRef } from "react";
import Header from "./Header";
import classes from "./Signup.module.css"

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import { useRouter } from 'next/router';
import useHttp from "../hooks/use-http";

const Signup = () => {
    const router = useRouter()
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch()
    const { isLoading, error, sendRequest:sendSignUpRequest }  = useHttp();
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    
    
    const signupHandler = (e) => {
        e.preventDefault()
        const createdUser = ((response) => {
            console.log(response)
            dispatch(authActions.signup({
                'email':response.email,
                'token': response.idToken
            }))
            router.push(`/`)
        })

        sendSignUpRequest({
            "url": "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDKhXVc8335PCPux2LWkAhwE5H6mbKsZk4",
            method: "POST",
            body: {
                email:emailRef.current.value,
                password: passwordRef.current.value,
              
            },
            headers: { 'Content-Type': 'application/json',},
        }, createdUser)

    }


    return (
        <Fragment>
             <Header/>
             <div className="container">
             <h5 className={classes.signuptitle}>Signup</h5>
             
             <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <form>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>

                    <div class="form-group">
                        <label for="">Password</label>
                        <input ref={passwordRef} type="password" class="form-control" id="" placeholder="Password"/>
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

export default Signup