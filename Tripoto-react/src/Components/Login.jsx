import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <div 
        style={{display:"flex" ,gap:"10px"}}
      >
            {
              isAuthenticated && <div>
                <h2 >{user.name}</h2>
              </div>
            }
            {
              isAuthenticated ? (<button 
                style={{  fontSize:"20px" ,  color:"black", padding:"1px" ,borderRadius:"5px"}}
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>) : (
                <button
                style={{backgroundColor:"sky" , color:"black",  fontSize:"20px" , padding:"1px" ,borderRadius:"5px"}}
                onClick={() => loginWithRedirect()}>Log In</button>
              )

            }
          </div>
    </div>
  )
}

export default Login