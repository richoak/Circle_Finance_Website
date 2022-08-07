import React, {Fragment} from "react"
import Head from "next/head"
import Signup from "../components/Signup"

const SignUpPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Sign Up | Chores </title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <Signup/>
</Fragment>
   
  )
}

export default SignUpPage 