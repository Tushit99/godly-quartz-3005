import React, { useContext } from 'react'
import styles from "./forgot.module.css"
import { useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
    const emailRef = useRef(null);
    const {sendpassreset} = useContext(AuthContext)
    const navigate = useNavigate() 

    const getformdata = async (event) => {
        event.preventDefault();
        try {
            await sendpassreset(emailRef.current.value);
            navigate("/login")
            
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div>
            <div style={{ width: "100%", height: "auto", backgroundColor: "#f9f9fa", paddingBottom: "2rem" }}  >
                <form action="" onSubmit={getformdata} >

                    <div className={styles.main}>
                        <div >
                            <h3 style={{ marginTop: "2rem", marginLeft: "7rem" }} >
                                Change your Password
                            </h3>
                        </div>
                       
                        
                        <div style={{ marginTop: "1rem" }}>
                            <div style={{ textAlign: "left", paddingLeft: "2rem" }}>
                                Enter email
                            </div>
                            <input ref={emailRef} style={{ marginLeft: "0rem", marginTop: "0.5rem", width: "87%", height: "2rem", borderColor: "rgb(173, 169, 173)", borderRadius: "0.4rem", backgroundColor: "white", outline: "none", border: "1px solid rgb(222, 87, 229)", padding: "0.5rem" }} type="email" placeholder='Enter email' />
                        </div>




                        <div style={{ height: "auto", width: "86%", margin: "auto", marginTop: "1rem", padding: "0.5rem", marginBottom: "1rem" }} >

                            <input className={styles.registerbutton} type="submit" value={"CONTINUE"} />
                        </div>

                    </div>

                </form>
            </div>

        </div>
    )
}

export default Forgot;