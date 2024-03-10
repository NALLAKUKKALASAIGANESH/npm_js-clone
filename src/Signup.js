import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
function Signup() {
  return (
    <div id="app">
        <div style={{ background: "#f7f7f7",width:'100%',height:'950px', marginTop:'10px',display:'flex',alignItems:'center',flexDirection:'column' }}>
            <div style={{display:'flex',justifyContent:'center',padding:'50px'}}><svg width="144px" viewBox="0 0 780 250" aria-hidden="true"><path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path></svg></div>
    
            <div style={{ background: "#ffffff",width:'28%',padding:'40px',borderRadius:'10px',boxshadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'left' }}>
                <div>
                  <div style={{fontFamily: 'sans-serif' ,borderBottom:"2px solid #f7f7f7",margin:'0px 10px'}} > <p style={{fontSize:'20px' , fontWeight:'550'}}>Sign Up</p></div>
                    <table>
                      <tbody>
                        <tr>
                          <td style={{padding:'10px'}}><label>Username*</label></td>
                        </tr>
                        <tr>
                          <td><input style={{width:'100%',height:'30px',borderRadius:'5px'    }} type='text' name='' required/></td>
                        </tr>
                        <tr>
                          <td style={{padding:'10px'}}><label>Email address</label></td>
                        </tr>
                        <tr>
                          <td><input style={{width:'100%',height:'30px',borderRadius:'5px'}} type='email' name=''/></td>
                        </tr>
                        <tr>
                          <p style={{color:'#000000CC' ,fontSize:'14px',   fontFamily: 'sans-serif'}}>Your email address will be added to the metadata of packages that you publish,so it may be seen publicly.</p>
                        </tr>
                        <tr>
                          <td>
                            <label>Password</label>
                            <div style={{border:'1px solid black',borderRadius:'5px', height:'30px',display:"flex", alignItems:"center", paddingLeft:'3%'}}>
                              <input  style={{border:'none', outline:'none', width:'85%'}}/>
                              <button style={{border:'none', background:'none', fontSize:'17px', paddingLeft:'5px', borderLeft:'2px solid #85827b', color:'#85827b'}}>show</button>
                            </div>
                          </td>
                        </tr>
                        {/* <tr>
                          <td><div style={{border:'1px solid black',borderRadius:'5px'}}><input style={{width:'85%',height:'30px',border:'none', outline: 'none'}} type='password' name=''/><button style={{backgroundColor:'#ffff',border:'none'}}>Show</button></div></td>
                        </tr> */}
                        <tr>
                          <div style={{display:'flex'}}>
                          <p style={{color:'#000000CC' ,fontSize:'14px',fontFamily: 'sans-serif'}}>Minimum of 10 characters and must meet our <a href='' style={{color:'balck'}}>password</a><a href=''>guidelines</a></p>
                          </div>
                        </tr>
                        <tr>
                          <div style={{display:'flex',fontFamily: 'sans-serif' ,fontSize:'14px' }}>
                          <p><input type='checkbox' required></input>
                          I agree to the <a href=''>End User License Agreement</a> and the <a href=''>Privacy Policy.*</a></p>
                          </div>
                        </tr>
                      </tbody>
                    </table>
                    <button style={{width:'100%',height:'40px'}}>Create  an Account</button>
                </div>

            </div>
            <div>
              <div style={{padding:'30px',fontFamily:'sans-serif',fontSize:'15px'}}>
              Already have an account?
              </div>
            </div>
            <div>
            <div style={{padding:'1px',fontFamily:'sans-serif',fontSize:'15px'}}>
                <Link  to='/signin' style={{color:'black'}}>Sign In  </Link> 
              </div>
            </div>

         </div>
          
          
    </div>

  )

}

export default Signup