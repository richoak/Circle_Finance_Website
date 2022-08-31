import React, {Fragment} from "react"
import Head from "next/head"
import HelperSignUp from "../components/HelperSignUp"

const HelperSignUpPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Sign Up | Helper | Workerr </title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <HelperSignUp/>
</Fragment>
   
  )
}

export default HelperSignUpPage 