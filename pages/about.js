import React, {Fragment} from "react"
import Head from "next/head"
import About from "../components/About"

const AboutPage = () => {
  return (
    <Fragment>
    <Head>
    <title>About | Oak Finance </title>
    <meta 
    name="description" 
    content=""/>  
    </Head>  
    <About/>
</Fragment>
   
  )
}

export default AboutPage 