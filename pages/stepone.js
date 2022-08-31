import React, {Fragment} from "react"
import Head from "next/head"
import Stepone from "../components/Order/Stepone"

const SteponePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Step One | Workerr </title>
    <meta 
    name="description" 
    content="Find trusted hands to handle your chores"/>  
    </Head>  
    <Stepone/>
</Fragment>
   
  )
}

export default SteponePage 