import React,{useState,useContext} from 'react';
import GoogleLogin from 'react-google-login';
import {contextValue} from './App'



function GoogleLoginc() {
    //app component e value={{name,setname}} ekhen same name na dile asbena props er value ba set hbe na value
    const {names,setNames} = useContext(contextValue)
    const [fullName,setFullName] =useState('')
    const responseGoogle = (response) => {
        console.log(response);
        // email: "babamarony@gmail.com"
        // givenName: "Abdur Rakib"
        // imageUrl: "https://lh3.googleusercontent.com/a-/AOh14Gin5o1Cjl53Y9puW5mJeXiWFrgakKrzURRVQB-Hvg=s96-c"
        // name: "Abdur Rakib Rony"
        setFullName(response.profileObj.name)
        setNames(response.profileObj.name)
    }
    console.log(names)
    //Abdur Rakib Rony
    console.log(fullName)
    //Abdur Rakib Rony
    
    return (
        <div>
            <GoogleLogin
                clientId="186781137147-rp5l811pbrqvjjt0mrsprs6pj"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default GoogleLoginc
