import React, {Fragment} from "react"
import Head from "next/head"
import Contact from "../components/Contact"

const ContactPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Contact | Oak Finance </title>
    <meta 
    name="description" 
    content=""/>  
    </Head>  
    <Contact/>
</Fragment>
   
  )
}

export default ContactPage 