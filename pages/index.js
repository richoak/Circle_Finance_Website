import React, {Fragment} from "react"
import Head from "next/head"
import Home from "../components/Home"

const HomePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Home | Circle Finance </title>
    <meta 
    name="description" 
    content=""/>  
    </Head>  
    <Home/>
</Fragment>
   
  )
}

export default HomePage 