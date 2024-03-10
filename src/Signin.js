import React from "react";
import  ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

function Signin(){
    let changeImage=()=> {
        document.getElementById("image").src = "https://static-production.npmjs.com/6bf09f9948c3044dbb2c7ed8b85098dc.png";
      }
      
      let restoreImage=()=> {
        document.getElementById("image").src = "https://static-production.npmjs.com/a39ceb9e9ad640f4de8eee094063d890.png";
      }
    return(
        <div id="app">
            
            <div style={{ background: "#f7f7f7",width:'100%',height:'950px', marginTop:'10px',display:'flex',alignItems:'center',flexDirection:'column' }}>
             <div style={{display:'flex',justifyContent:'center',padding:'50px'}}><svg width="144px" viewBox="0 0 780 250" aria-hidden="true"><path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path></svg></div>
             <div style={{ background: "#ffffff",width:'28%',padding:'40px',borderRadius:'10px',justifyContent:'center',alignItems:'center',textAlign:'left' }}>
                <div style={{display:"flex", alignItems:'center', justifyContent:"center",}}>
                 <div style={{display:"flex", alignItems:'center', justifyContent:"center", background:'#ddd', width:'50%', borderRadius:'250px'}}>
                 <img onMouseOver={changeImage} onMouseOut={restoreImage} style={{userselect: 'none',pointerevents: 'none',Width:'100px',height:'200px',borderStyle:'none',boxSizing:'boderbox'}} alt="" role="presentation" src="https://static-production.npmjs.com/c9e19250d48d66f0e9c70c9b3991bbdb.png"></img>   
                 <img id="image" style={{width:'60px',height:'30px', position:'absolute', left:'48.5%', top:'300px'}} src="https://static-production.npmjs.com/a39ceb9e9ad640f4de8eee094063d890.png" alt="" role="presentation" class="_489835f0"></img>
                 </div>
                </div>
                
                <div>
                  <div style={{fontFamily: 'sans-serif' ,borderBottom:"2px solid #f7f7f7",margin:'0px 10px'}} > <p style={{fontSize:'20px' , fontWeight:'550'}}>Sign In</p></div>
                    <table style={{width:'100%'}}>
                      <tbody>
                        <tr>
                          <td style={{padding:'10px'}}><label>Username</label></td>
                        </tr>
                        <tr>
                          <td><input style={{width:'100%',height:'30px',borderRadius:'5px'}} type='text' name='' required/></td>
                        </tr>
                        <tr>
                          <td style={{padding:'10px', display:"flex", justifyContent:"space-between"}}><label>Password</label>
                           <a style={{color:'black'}} href="">Forgotpassword?</a></td>
                        </tr>
                        <tr>
                        <div style={{border:'1px solid black',borderRadius:'5px', height:'30px',display:"flex", alignItems:"center", paddingLeft:'3%'}}>
                              <input  style={{border:'none', outline:'none', width:'85%'}}/>
                              <button style={{border:'none', background:'none', fontSize:'17px', paddingLeft:'5px', borderLeft:'2px solid #85827b', color:'#85827b'}}>show</button>
                            </div>
                        </tr>

                        
                      </tbody>
                    </table>
                    <button style={{width:'100%',height:'40px' ,margin:"5% 0%",borderRadius:'5px'}}>Sign In</button>
                </div>
               <div style={{display:'flex',justifyContent:'center',textAlign:'center'}}> <Link to="/signup">Create Account</Link></div>
             </div>
       
       
       
       
            </div>
        </div>
    )
}
export default Signin