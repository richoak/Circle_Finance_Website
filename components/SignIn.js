import React, { Fragment } from "react";
import Header from "./Header";
import classes from "./Signup.module.css"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import useHttp from "../hooks/use-http";

const Signin = () => {
    const dispatch = useDispatch()
    const { isLoading, error, sendRequest:sendLoginRequest }  = useHttp();
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    
    
    const loginHandler = (e) => {
        e.preventDefault()
        const createdUser = ((response) => {
            console.log(response)
            // dispatch(authActions.login({

            // }))
        })

        sendLoginRequest({
            "url": "https://credisol-app.herokuapp.com/v1/registration/sign_in/",
            method: "POST",
            body: {
                email:"mideadeniyi7@gmail.com",
                password:"@Marvinsroom1"
            },
            headers: { 'Content-Type': 'application/json',},
        }, createdUser)

    }


    return (
        <Fragment>
             <Header/>
             <div className="container">
             <h5 className={classes.signuptitle}>Signin</h5>
             
             <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <form>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    <p className={classes.signupbuttonparagraph}>
                    <button onClick={loginHandler} style={{backgroundColor:"#000", color:"#FFF"}} type="submit" class="btn btn-block ">Sign in</button>
                    </p>
                   

            </form>
                </div>
                <div className="col-md-4"></div>
             </div>
          
             </div>
             
        </Fragment>
        
    )
}

export default Signin