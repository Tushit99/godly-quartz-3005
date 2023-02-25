

import React, { useRef, useState, useContext } from 'react'
import styles from "../loginsignup/Signup.module.css"
import { AuthContext } from "../../context/AuthContext";
import {Link as RouterLink,useNavigate} from "react-router-dom"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [strong,setStrong] = useState("")
  const nameRef = useRef(null)
const emailRef = useRef(null);
const passRef = useRef(null);
const cpassRef = useRef(null);
const {Signup ,updateprofilename,emailverify} = useContext(AuthContext)
const [iterror, setIterror] = useState("")
  const navigate = useNavigate()


const getformdata = async (event) => {
  event.preventDefault();
  if(passRef.current.value !== cpassRef.current.value){
    setIterror("password are not match");
    return;
  }

  setIterror("")
  let strength = check_strength(passRef.current.value)

  if(strength){
    try {
      setIterror("")
      await Signup(emailRef.current.value, passRef.current.value);
      await updateprofilename(nameRef.current.value);
      await emailverify()
      navigate("/")
    } catch (error) {
      setIterror("Sorry there is some error")
    }
  }
}

function check_strength(password) {
  var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
 
 if (mediumRegex.test(password)) {
      setStrong("")
      return true;
  } else {
      setStrong("Password is weak")
      return false;
  }
}

  return (
    <div >
        <div style={{ width:"100%" , height:"auto",backgroundColor:"#f9f9fa",paddingBottom:"2rem" }}  >

        <form action="" onSubmit={getformdata} >
        <div className={styles.main}>
       
      <div >
        <h3 style={{marginTop:"2rem",marginLeft:"6rem"}} >
        Sign Up with Black pearl
        </h3>
      </div>
      <div className={styles.imagediv}>
        <div className={styles.img}>
        <img className={styles.image} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAZlBMVEU7WZj///8sT5Omscs1VZZrfqx/j7YYRI7a3uk4V5clSpHHzd34+vvv8fZMZp8pTZJzhbDO0+K0vNLi5e5jeKl5irSToMGtts+eqseElLlfdKdVbaNHYp2+xdmZpcQSQY0AO4oAN4mgpEJQAAACPUlEQVRoge3b0bKaMBAG4BgWNQGNiSIej0fa93/J4rHtDLJIGrLJRfef8cZBPhfBhOiK1SPWFanj7Lcs+kclpJGpY6Sonv5Fg8gR0JeHX2mVhRdC6ar3RZ7qH4FetzIbL4S0wpmMvnGiyFp/wT777LPPfswopUCaZ/q5BgD0zyDDPImvQMP+1JyL1rVtcbmfP5qyvH7ekDdA4IOEw9d2t3pNvbM3el9tbm5sP7Pbjw5AbN/sqwk8hQ/yPq3T+yDsO57aBzi+5Yl9BVPnXRJfzVVP7Gs3x5P6spnlSX099+HT+u8vfHq/8yif0IeDB0/oyzff+kmOf53Vh5MPv6qpfFNMiEd3bg5/U45fGcfX+Li3LTv9Pff7EyJ/4qvfdfMLO3H8PXb1W+OxrBXFh0/s9D/5LGvFqR87/Wvt89I49Zfo4c/r+y2r0fmt127pfL/dss8+++yz/y9RMIjExt9Cw2ti+VCuh8Fuvr6al43WH+Ppb5g/Md2cDTIjCvO97nbGucWqP8yvkV2l9I+Qt37sh9aUPjYjTOkXmf115uN/jXX/GehjTkr/R17/2OX17Savj94QJvTv0cb/MH+d169P2HJMQh8Z/QN92W6HwZa/di/b4H8zCpt/ms0g3RXxLz+HG2FXX6z1p/9t/s8+++yzzz777LPPPvvss88+++yzzz777Hv6y/sfF/jGRej/XFK/jdD/Gu4/+l+X9/8G+8/+38X9z6H+7/7nxf3fGv3/x8a7/3u1tP/d1eNYz/73X0uLLPJwJvCTAAAAAElFTkSuQmCC" alt="" />
        <div style={{margin:"auto",marginLeft:"-1rem",color:"rgb(173, 169, 173)",backgroundColor:"white" }}>Facebook</div>
        </div>
        <div className={styles.img} >
        <img className={styles.image} src="data:image/png;base64,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" alt="" />
        <div style={{margin:"auto",marginLeft:"-1rem",color:"rgb(173, 169, 173)",backgroundColor:"white" }}>Google</div>
        </div>
      </div>
      <div style={{color:"rgb(173, 169, 173)",marginTop:"1rem"}}>
        OR
      </div>
      <div style={{ marginTop:"1rem"}}>
        <div style={{marginLeft:"-14rem"}}>
        Mobile Number
        </div>
       <input style={{marginLeft:"0rem" , marginTop:"0.5rem" , width:"87%" , height:"2rem" , borderColor:"rgb(173, 169, 173)",borderRadius:"0.4rem",backgroundColor:"white",paddingLeft:"0.5rem",outline:"none",border:"1px solid rgb(222, 87, 229)"}} placeholder="Mobile Number" type="number" />
      </div>
      <div style={{ marginTop:"1rem"}}  >
      <div style={{marginLeft:"-16rem"}}>
        Enter Email
        </div>
       <input ref={emailRef} style={{marginLeft:"0rem" , marginTop:"0.5rem" , width:"87%" , height:"2rem" , borderColor:"rgb(173, 169, 173)",borderRadius:"0.4rem",backgroundColor:"white",paddingLeft:"0.5rem",outline:"none",border:"1px solid rgb(222, 87, 229)"}} placeholder="Enter Email" type="email" />
      </div>
      <div style={{display:"flex"}}>
        <div style={{ marginTop:"1rem"}} >
        <div style={{marginLeft:"-4.5rem"}}>
        First Name
        </div>
       <input ref={nameRef} style={{marginLeft:"1rem" , marginTop:"0.5rem" , width:"85%" , height:"2rem" , borderColor:"rgb(173, 169, 173)",borderRadius:"0.4rem",backgroundColor:"white",paddingLeft:"0.5rem",outline:"none",border:"1px solid rgb(222, 87, 229)"}} placeholder="First Name"  type="text" /> 
        </div>
        <div style={{ marginTop:"1rem"}} >
        <div style={{marginLeft:"-4.5rem"}}>
        Last Name
        </div>
       <input style={{marginLeft:"-0.1rem" , marginTop:"0.5rem" , width:"85%" , height:"2rem" , borderColor:"rgb(173, 169, 173)",borderRadius:"0.4rem",backgroundColor:"white",paddingLeft:"0.5rem",outline:"none",border:"1px solid rgb(222, 87, 229)"}} placeholder="Last Name" type="text" /> 
        </div>
      </div>
      <div style={{ marginTop:"1rem"}}>
        <div style={{marginLeft:"-16.5rem"}}>
        Password
        </div>
       <input ref={passRef} style={{marginLeft:"0rem" , marginTop:"0.5rem" , width:"87%" , height:"2rem" , borderColor:"rgb(173, 169, 173)",borderRadius:"0.4rem",backgroundColor:"white",paddingLeft:"0.5rem",outline:"none",border:"1px solid rgb(222, 87, 229)"}} placeholder="Password" type={showPassword ? 'text' : 'password'} />
       <p
                    style={{textAlign:"left",paddingLeft:"2rem"}}
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
      </p>
      </div>
      <div style={{ marginTop:"1rem"}}>
        <div style={{marginLeft:"-12.7rem"}}>
       Confirm Password
        </div>
       <input ref={cpassRef} style={{marginLeft:"0rem" , marginTop:"0.5rem" , width:"87%" , height:"2rem" , borderColor:"rgb(173, 169, 173)",borderRadius:"0.4rem",backgroundColor:"white", paddingLeft:"0.5rem",outline:"none",border:"1px solid rgb(222, 87, 229)"}}  placeholder="Confirm Password" type={showcPassword ? 'text' : 'password'} />
       <p
                    style={{textAlign:"left",paddingLeft:"2rem"}}
                    onClick={() =>
                      setShowcPassword(!showcPassword)
                    }>
                    {showcPassword ? <ViewIcon /> : <ViewOffIcon />}
      </p>
      </div>
      <div style={{margin:"auto", marginTop:"1rem", }}>
         <input type="radio" name='gender' />
          <label> Male </label>
         <input type="radio" name='gender' />
        <label>  Female  </label>
         <input type="radio"  name='gender'/>
          <label> I don't want to specify </label>
      </div>
      <div style={strong ? {display:"block",height:"auto",backgroundColor:"rgb(224, 120, 120)" , borderRadius:"1rem" , width:"84.3%" , margin:"auto", marginTop:"1rem", padding:"0.5rem"} : {display:"none"} } >{strong}</div>
      <div style={iterror ? {display:"block",height:"auto",backgroundColor:"rgb(224, 120, 120)" , borderRadius:"1rem" , width:"84.3%" , margin:"auto", marginTop:"1rem", padding:"0.5rem"} : {display:"none"} } >{iterror}</div>
      <div style={{height:"auto",backgroundColor:"#EFF5EC" , borderRadius:"1rem" , width:"84.3%" , margin:"auto", marginTop:"1rem", padding:"0.5rem"}}>
          <h3>
             Opt for Whatsapp Support</h3>
             <p>
             We will be sharing Delivery & precious order related communication. Also provide you with an interactive whatsapp support
             </p>
      </div>
       <div style={{height:"auto", width:"86%" , margin:"auto", marginTop:"1rem", padding:"0.5rem",marginBottom:"1rem"}} >
       
       <input className={styles.registerbutton} type="submit" value={"REGISTER TO CONTINUE"} />
       
       </div>
       <div>
       
       Already have an account? <RouterLink style={{textDecoration:"none"}} to={"/login"}><span style={{color:"rgb(222, 87, 229)" , cursor: "pointer"}} >Login</span></RouterLink>
        
       </div>
        </div>
        </form>
        </div>
    
      </div>
  )
}
