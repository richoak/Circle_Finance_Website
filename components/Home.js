import React, { Fragment } from "react";
import Header from "./Header";
import classes from "./Home.module.css"
import Autocomplete from "../utils/autoComplete"
import { useSelector } from "react-redux";


const Home = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    const userDetails = useSelector(state => state.auth.userDetails)


    return (
        <Fragment>
            <Header/>
            <div className={classes.homepage}>
                <div className={classes.box}>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                    <h4 className={classes.homepage_title}>Well vetted individuals to carry out your errands<br/> Regardless of how <span className={classes.homepage_emphasis}>weird</span> it is.</h4>
                    <h6 className={classes.homepage_subtitle}>Begin with a search below.</h6>
                    <div className={classes.homepage_search}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10">
                        <Autocomplete/>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                
                        
                </div>         
                <h6 className={classes.chores}>&copy; Chores 2022</h6>
            </div>
  
        </Fragment>
       
    )
}

export default Home