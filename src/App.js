import { FaHeart } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { IoLogoGithub } from "react-icons/io";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import "../src/App.css";
import { hover } from "@testing-library/user-event/dist/hover";

function App() {

  
    
  
  return (
    <>
      <div id="app">
        <div style={{ background: "#ffffff",width:'100%', marginTop:'10px' }}>
          <div style={{display:"flex",flexDirection:"row", justifyContent:'space-between',padding:'1.5%',
           borderBottom: '0.1px solid #f2f2f2'}}>

            <div style={{display:"flex",flexDirection:"row", justifyContent:'space-between',width:'15%'}}>
              <FaHeart />
              <div> Neonatal Penguin March</div>
            </div>

            <div style={{display:"flex",flexDirection:"row", justifyContent:'space-between',width:'30%'}}>
              <div style={{cursor:'pointer' }}><a>Pro</a></div>
              <div style={{cursor:'pointer'}}>Teams</div>
              <div style={{cursor:'pointer'}}>Pricing</div>  
              <div style={{cursor:'pointer'}}>Documentation</div>
            </div>

          </div>

          <div style={{display:"flex",flexDirection:"row", justifyContent:'space-between',alignItems:'center',padding:'1.1%'}}>
            <svg width="70px" viewBox="0 0 780 250" aria-hidden="true"><path fill="#231F20" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path></svg>

            <div style={{width:"70%",height:'45px', backgroundColor:"#f2f2f2", display:"flex", flexDirection:'row',justifyContent:'center', alignItems:'center', border:'1px solid #f2f2f2'}}>
            <svg width="18px" height="18px" style={{padding:'0% 1%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g stroke="#777777" stroke-width="1.3"><g><path d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z"></path><path d="M11.4913,11.4913 L17.8683,17.8683"></path></g></g></g></svg>

            <input style={{width:'90%',height:'40px',border: 'none', outline: 'none', backgroundColor:'#f2f2f2'}} placeholder="Search Packages"></input>
            <div style={{width:"8%", backgroundColor:'black',color:'white'}}>
              <button style={{width:"100%", backgroundColor:'black',color:'white',height:'45px',fontWeight:'bold',fontFamily:"Poppins, sans-serif"}}>
              search
              </button>
              </div>  
            </div>
              
              <div style={{width:"8%"}}>
                <button  style={{width:"100%", backgroundColor:'white',color:'black',height:'45px',border:'1px solid #cccccc',fontSize:'15px',fontWeight:'500',fontFamily:"Poppins, sans-serif"}} >
                 <Link to="/signup" style={{textDecoration:'none' ,color:'black'}}> Sign Up</Link> 
                </button  >
              </div>
              <div style={{width:"8%" }}>
                <button style={{width:"100%", backgroundColor:'white',color:'black',height:'45px',border:'none',paddingRight:'25px',fontFamily:"Poppins, sans-serif",fontWeight:'500',fontSize:'15px'}}>
                  <Link to='/signin' style={{textDecoration:'none',color:'balck'}}>Sign In</Link>
                </button>
              </div>
           
           

          </div>
        </div>

        <div className='dummy' style={{display:'flex',alignItems:"center", justifyContent:'center', paddingTop:'6%', paddingBottom    :'80px'}}>
          <div style={{width:'50%'}}>
            <div style={{color:'white', fontSize:'80px',textAlign:'center', fontWeight:'bold', fontFamily:"Poppins, sans-serif", marginBottom:'50px'}}>Build amazing things</div>
            <div style={{width:"100%", display:'flex',alignItems:"center", justifyContent:'center',marginBottom:'50px'}}>
            <div style={{color:'#f2f5f7', fontSize:'16.4px',textAlign:'center',width:'70%', fontFamily:"Poppins, sans-serif",lineHeight:'22px'}}>We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</div>
            </div>

            <div style={{width:"100%", display:'flex',alignItems:"center", justifyContent:'center',marginBottom:'50px'}}>
            <div style={{color:'white', fontSize:'40px',textAlign:'center',width:'70%', fontFamily:"Poppins, sans-serif",fontWeight:'bold',}}>Take your JavaScript development up a notch</div>
            </div>

            <div style={{width:"100%", display:'flex',alignItems:"center", justifyContent:'center',marginBottom:'50px'}}>
            <div style={{color:'#f2f5f7', fontSize:'16.4px',textAlign:'center',width:'70%', fontFamily:"Poppins, sans-serif",lineHeight:'22px'}}>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</div>
            </div>
             <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
              <div style={{marginRight:'25px'}}>
                <button  style={{width:"100%",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)", backgroundColor:'#ffc329',color:'black',padding:'15px 50px',border:'1px solid #ffc329',borderRadius:'25px',fontSize:'17px',fontWeight:'bold',fontFamily:"Poppins, sans-serif"}}>
                  Sign up for free
                </button>
              </div> 
              <div style={{marginLeft:'25px'}}>
                <button style={{width:"100%", backgroundColor:'transparent',color:'black',padding:'15px 50px',border:'2px solid white', borderRadius:'25px',fontSize:'17px',fontWeight:'bold',fontFamily:"Poppins, sans-serif"}}>
                  Learn about Pro
                </button>
              </div>
            </div>
          </div>
        </div> 

        <div style={{ background: "#ffffff",width:'100%', paddingBottom:"150px" , borderBottom:"1px soild #f2f2f2"}}>
          <div style={{display:'flex',alignItems:"center", justifyContent:'center'}}>
              <div  style={{marginTop:'55px'}}><img src='https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png'></img></div>
          </div>

          <div style={{width:"100%", display:'flex',alignItems:"center", justifyContent:'center'}}>
            <div  style={{marginTop:'25px',color:'black', fontSize:'40px',textAlign:'center',width:'35%', fontFamily:"Poppins, sans-serif",fontWeight:'bold',}}>Bring the best of open source to you, your team, and your company</div>
          </div>

           <div style={{width:"100%", display:'flex',alignItems:"center", justifyContent:'center'}}>
            <div  style={{marginTop:'25px',color:'#333',inlinelabelwidth: '180px', fontSize:'16px',lineHeight:'25px',textAlign:'center',width:'35%', fontFamily:"'Arimo', sans-serif",lineheight:'15px'}}>Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</div>
          </div>

        </div>

        <div style={{ background: "#ffffff",width:'100%', paddingBottom:"50px",marginBottom:'10px',borderBottom:"10px soild black"}}>
           <div style={{paddingTop:'50px',display:"flex",flexDirection:"row", justifyContent:'space-between' }}>
           <div style={{width:'10%',padding:'30px 30px 30px', margin:'10px'}}>
            <div style={{width:'50px'}}><svg viewBox="0 0 27.23 27.23" aria-hidden="true"><rect fill="#333333" width="27.23" height="27.23" rx="2"></rect><polygon fill="#fff" points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"></polygon></svg></div>
            
               <div style={{paddingTop:'10px'}}><svg aria-hidden="true" role="img" class="" viewBox="0 0 16 16" width="50" height="50" fill="black" ><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></div>
            </div>
            <div style={{width:'30%'}}>
              <div style={{fontFamily:'Poppins, sans-serif',lineHeight:'40px'}}>
                <h3>Support</h3>
                <div style={{color:'#000000B3'}}>
                <div>Help</div>
                <div>Advisories</div>
                <div>Status</div>
                <div>Contact npm</div>
                </div>

              </div>

            </div>
            <div style={{width:'30%'}}>
              <div  style={{fontFamily:'Poppins, sans-serif',lineHeight:'40px' }}>
                <h3>Company</h3>
                <div style={{color:'#000000B3'}}>
                <div>About</div>
                <div>Blog</div>
                <div>Press</div>
                </div>

               

              </div>

            </div>
            <div style={{width:'29%'}}>
              <div  style={{fontFamily:'Poppins, sans-serif',lineHeight:'40px'}}>
                <h3>Terms &  Policies</h3>
                <div style={{color:'#000000B3'}}>
                <div>Policies</div>
                <div>Terms of use</div>
                <div>Code of Conduct</div>
                <div>Privacy</div>
                </div>

              </div>

            </div>

           </div>
            
        </div>






      </div>
    </>
  );
}

export default App;



                