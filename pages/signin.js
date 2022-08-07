import React, {Fragment} from "react"
import Head from "next/head"
import Signin from "../components/Signin"

const SignInPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Sign in | Chores </title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <Signin/>
</Fragment>
   
  )
}

export default SignInPage 