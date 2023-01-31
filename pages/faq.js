import React, {Fragment} from "react"
import Head from "next/head"
import Faq from "../components/Faq"

const FaqPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Faq | Oak Finance </title>
    <meta 
    name="description" 
    content=""/>  
    </Head>  
    <Faq/>
</Fragment>
   
  )
}

export default FaqPage 