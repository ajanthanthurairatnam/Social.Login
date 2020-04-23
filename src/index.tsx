import * as React from "react";
import * as ReactDOM from "react-dom";

import FacebookLogin from 'react-facebook-login';
import { Hello } from "./components/Hello";
 

const responseFacebook = (response:any) => 
{
    console.log(response.accessToken);
}

ReactDOM.render(
    <FacebookLogin
    appId="162157535121840"
    autoLoad={true}
    fields="name,email,picture"
    onClick={()=>alert('Hello World')}
    callback={responseFacebook} />,
    document.getElementById("example")
);