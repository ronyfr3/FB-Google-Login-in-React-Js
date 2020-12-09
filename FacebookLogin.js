import React, { useContext, useState } from 'react'
import FacebookLogin from 'react-facebook-login';
import {contextValue} from './App'

//https://developers.facebook.com/apps/


function FacebookLoginc() {
  //set null picture to fb image so that i can show it to home component
  const {picture,setPicture} =useContext(contextValue)
  const [ImageUrl,setImageUrl] = useState('')

    const responseFacebook = (response) => {
        setImageUrl(response.picture.data.url)
        setPicture(response.picture.data.url)
      }
      console.log(picture,ImageUrl)
    const componentClicked = (response) => {
        alert('you logged in');
      }

    return (
        <div>
              <FacebookLogin
                appId="44030904031"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
             />
        </div>
    )
}

export default FacebookLoginc
