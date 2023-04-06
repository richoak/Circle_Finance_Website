import React, { Fragment, useState, useEffect , useRef} from "react";
import { useRouter } from 'next/router'
import classes from "./Calculator.module.css"



const Calculator = () => {

const router = useRouter()
const query = router.query

const netearningsRef = useRef();
const loanamountRef = useRef();
const loandurationRef = useRef();
const [ loanRepayment, setLoanRepayment ] = useState(0)
const [ maxAmount, setMaxAmount ] = useState(0)

class Tabs extends React.Component{
    state ={
      activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {
  
      this.setState({ activeTab: tab });
    };
    render(){
      
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}
           
          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
          <div className="tab-content">{content}</div>
          
        </div>
      );
    }
  }
  
  const TabButtons = ({buttons, changeTab, activeTab}) =>{
     
    return(
        <div className="tab-buttons">
        {buttons.map(button =>{
           return <button className={ button === activeTab? 'tabactive': ''} onClick={()=>changeTab(button)}>{button}</button>
        })}
        </div>
      
    )
  }
  
  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }

  const calcLoan = () => {
    const net = netearningsRef.current.value;
    const duration = loandurationRef.current.value;
    const amount= loanamountRef.current.value
    const maxamount = (net * duration * 0.4).toLocaleString(2)
    const lramount =(net * duration * 0.4).toLocaleString(2)

    setLoanRepayment(lramount)
    setMaxAmount(maxamount)
  }
   
return (
    <div className={classes.loancalculatorbox}>
         <div className={classes.calculatorboxhead}>
            <p className={classes.calculatorhead}>Loan Calculator</p>
        </div>
                    
        <div className={classes.tabs}>

            <Tabs>
            <Tab label="Consumer loan">
            <div className={classes.consumerloan}>
                <div class="form-group">
               <label for="firstname" className={classes.label}>Your Net Earnings (&#8358;)</label>
               <input type="number" class="form-control form-control-lg" id="firstname" ref={netearningsRef} onKeyUp={calcLoan}  placeholder="Enter net earning"/>
                </div>

                <div class="form-group">
               <label for="firstname" className={classes.label}>Loan Amount (&#8358;)</label>
               <input type="number" class="form-control form-control-lg" id="firstname" ref={loanamountRef} onKeyUp={calcLoan} placeholder="Enter loan amount"/>
                </div>

                <div class="form-group">
                <label for="lastname" className={classes.label}>Loan Duration</label>
                <select class="form-control form-control-lg form-select" aria-label="Default select example" onChange={calcLoan} ref={loandurationRef}>
                <option value="">Select </option>
                <option value="1">1 Month (4% Interest)</option>
                <option value="3">3 Months (4% Interest)</option>
                <option value="6">6 Month (6% Interest)</option>
                <option value="12">12 Months (12% Interest)</option>
                </select>
                </div>

                <div className={classes.loanresult}>
                <hr/>
                <p className={classes.loanrepaymenttiitle}>Your Loan Repayment</p>
                <p className={classes.loanrepayment}>&#8358;{loanRepayment}</p>
                <hr/>
                <p className={classes.loannotifiication}>The Maximum Amount You Can Access Is &#8358;{maxAmount}</p>
                </div>
                
                </div>
            </Tab>

            <Tab label="Business loan">
            <div className={classes.consumerloan}>
                <div class="form-group">
               <label for="firstname" className={classes.label}>Your Net Earnings (&#8358;)</label>
               <input type="number" class="form-control form-control-lg" id="firstname" ref={netearningsRef} onKeyUp={calcLoan}  placeholder="Enter net earning"/>
                </div>

                <div class="form-group">
               <label for="firstname" className={classes.label}>Loan Amount (&#8358;)</label>
               <input type="number" class="form-control form-control-lg" id="firstname" ref={loanamountRef} onKeyUp={calcLoan} placeholder="Enter loan amount"/>
                </div>

                <div class="form-group">
                <label for="lastname" className={classes.label}>Loan Duration</label>
                <select class="form-control form-control-lg form-select" aria-label="Default select example" onChange={calcLoan} ref={loandurationRef}>
                <option value="">Select </option>
                <option value="1">1 Month (4% Interest)</option>
                <option value="3">3 Months (4% Interest)</option>
                <option value="6">6 Month (6% Interest)</option>
                <option value="12">12 Months (12% Interest)</option>
                </select>
                </div>

                <div className={classes.loanresult}>
                <hr/>
                <p className={classes.loanrepaymenttiitle}>Your Loan Repayment</p>
                <p className={classes.loanrepayment}>&#8358;{loanRepayment}</p>
                <hr/>
                <p className={classes.loannotifiication}>The Maximum Amount You Can Access Is &#8358;{maxAmount}</p>
                </div>
                
                </div>
            </Tab>
            </Tabs>


</div>
        <p style={{textAlign:"center"}}>
        <a target="_blank" href="https://app.circlefinance.com"><button  className={classes.homepage_button}>Sign up now</button></a>

        </p>

    </div>
   
)}

export default Calculator