import React, {Fragment} from "react"
import Head from "next/head"
import Microservices from "../components/Microservices"

const MicroServicesPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Micro Services | Oak Finance </title>
    <meta 
    name="description" 
    content=""/>  
    </Head>  
    <Microservices/>
</Fragment>
   
  )
}

export default MicroServicesPage 