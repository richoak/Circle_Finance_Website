import React, {Fragment} from "react"
import Head from "next/head"
import Investment from "../components/Investment"



const InvestmentPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Investment | Oak Finance </title>
    <meta 
    name="description" 
    content=""/>  
    </Head>  
    <Investment/>
</Fragment>
   
  )
}

export default InvestmentPage 