import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Header from "./Header";
import Footer from "./Footer";
import Growth from "./Growth";
import classes from "./Product.module.css"


const Product = () => {
const [ product, setProduct ] = useState()
const [ productDescription, setProductDescription ] = useState()
const [ productMinimumInvestment, setProductMinimumInvestment ] = useState()
const [ productDuration, setProductDuration ] = useState()
const [ productInterest, setProductInterest ] = useState()
const [ productRiskLevel, setProductRiskLevel ] = useState()

const router = useRouter()
const query = router.query

useEffect(() => {
    
    if (query.name == "premium"){
        setProduct(query.name)
        setProductDescription("The Oak Premium Investment Plan is a savings plan that is tailored for individuals who earn a salary and want to consistently invest a specific amount of money each month towards a specific financial goal. This means that at the end of the first year, an additional 12% of the total investment will be added to the overall amount saved. This plan is an excellent option for those who want to save money consistently over time and earn a higher return on their investment.")
        setProductMinimumInvestment("50,000 Monthly")
        setProductDuration("12 Months")
        setProductInterest("16% Per Annum")
        setProductRiskLevel("Minimal")
    }

    else if (query.name == "premiumplus"){
        setProduct(query.name)
        setProductDescription("The Oak Premium Plus is a high-yield investment option that allows investors to invest a larger sum of money at a competitive interest rate. This option is designed for individuals who have a significant amount of idle cash that they want to put to work and potentially increase their long-term earnings.Investing in Oak Premium Plus also offers investors the opportunity to diversify their portfolio and potentially mitigate risk by spreading their investment across multiple assets. This investment option is suitable for those who are willing to take on more risk in pursuit of a higher return on their investment.")
        setProductMinimumInvestment("50,000 Monthly")
        setProductDuration("12 Months")
        setProductInterest("16% Per Annum")
        setProductRiskLevel("Minimal")
    }

    else if (query.name == "reif"){
        setProduct(query.name)
        setProductDescription("The Oak Real Estate Investment Fund is a unique investment opportunity that allows individuals to invest in a diversified portfolio of real estate assets. The fund is designed for investors who do not have the deep pockets to buy off properties or build from the ground up, but wish to own prime real estate. This means that you don't need to have a large amount of money to get started, and you can share in the ownership of valuable real estate assets. The fund is also managed by a team of experienced real estate professionals who are responsible for researching, acquiring, and managing the properties in the fund, so investors do not have to worry about the day-to-day management of their investments.")
        setProductMinimumInvestment("50,000 Monthly")
        setProductDuration("12 Months")
        setProductInterest("16% Per Annum")
        setProductRiskLevel("Minimal")
    }

    else if (query.name == "platinum"){
        setProduct("platinum investment plan")
        setProductDescription("The OAK Platinum Investment Plan is a high-value investment option designed for individuals with large sums of money starting at 10 million naira and above. This plan is tailored for individuals who are looking to invest in a safe and profitable plan and want to get good returns on their investment.")
        setProductMinimumInvestment("50,000 Monthly")
        setProductDuration("12 Months")
        setProductInterest("16% Per Annum")
        setProductRiskLevel("Minimal")
    }

    else if (query.name == "partnership"){
        setProduct("limited partnership")
        setProductDescription("The Limited Partnership Fund is a partnership investment vehicle, where profit is shared between investing partners, based on their stake in the business (55% for major partners and 25% for minority partners). The project will run for ten years, during which time partners will receive monthly earnings. This is a unique investment opportunity that allows investors to be a part of a real estate project and share in its profits.")
        setProductMinimumInvestment("50,000 Monthly")
        setProductDuration("12 Months")
        setProductInterest("16% Per Annum")
        setProductRiskLevel("Minimal")
    }




})



    return (
        <Fragment>

    <Header className={classes.header}/>




    {/* SECOND BOX */}
    <div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
        <div className="col-md-6">
        <h1 className={classes.about_firstbox_title}>{product}</h1>
        <h6 className={classes.about_secondbox_subtitle}>{productDescription}</h6>
        </div> 
        <div className="col-md-6">
      
        </div> 
    </div>
    <hr className={classes.secondboxhr}/>
</div>
</div>
    {/* SECOND BOX */}


    {/* THIRD BOX */}
    <div className={classes.about_second_box}>
    <div className="container">
    <div className="row">
    <div className="col-md-6">
      
      </div> 
        <div className={`col-md-6 ${classes.productinfo}`}>
        <p><span className={classes.about_secondbox_subtitle}> Minimum Investment: </span><span className={classes.about_secondbox_title}>{productMinimumInvestment}</span></p>
        <p><span className={classes.about_secondbox_subtitle}> Plan Duration: </span><span className={classes.about_secondbox_title}>{productDuration}</span></p>
        <p><span className={classes.about_secondbox_subtitle}> Investment Returns: </span><span className={classes.about_secondbox_title}>{productInterest}</span></p>
        <p><span className={classes.about_secondbox_subtitle}> Risk Level: </span><span className={classes.about_secondbox_title}>{productRiskLevel}</span></p>
        <button  className={classes.homepage_button}>Start investing</button>
                    <p  className={classes.about_button}>Micro services <img src="/images/homepage/green-right-arrow.svg" style={{paddingLeft:"15px", fontSize:"20px"}}/></p>
                    
        </div> 
     
    </div>
    {/* <hr className={classes.secondboxhr}/> */}
</div>
</div>
    {/* THIRD BOX */}



    <>
<div className={classes.growth_steps}>
<Growth/>
</div>

</>

{/* FOOTER */}
<Footer className={classes.footer}/>
{/* FOOTER */}

</Fragment>
)
}

export default Product