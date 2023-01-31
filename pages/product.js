import React, {Fragment} from "react"
import Head from "next/head"
import Product from "../components/Product"


const ProductPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Product | Oak Finance </title>
    <meta 
    name="description" 
    content=""/>  
    </Head>  
    <Product/>
</Fragment>
   
  )
}

export default ProductPage 