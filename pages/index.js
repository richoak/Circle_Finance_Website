import React, {Fragment} from "react"
import Head from "next/head"
import Home from "../components/Home"

const HomePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Home | Chores </title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <Home/>
</Fragment>
   
  )
}

export default HomePage 