import React, {Fragment} from "react"
import Head from "next/head"
import Home from "../components/Home"

const HomePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Home | Oak Finance </title>
    <meta 
    name="description" 
    content=""/>  
    </Head>  
    <Home/>
</Fragment>
   
  )
}

export default HomePage 