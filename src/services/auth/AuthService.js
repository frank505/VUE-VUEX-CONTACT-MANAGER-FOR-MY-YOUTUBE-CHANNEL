import HttpService from '../HttpService';
import Cookies from 'js-cookie'



export const LoginService = (credentials) =>{
    const http = new HttpService();
    let addedUrl = "user/login";
    return http.postData(credentials,addedUrl,"POST").then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
   return error; 
    });
}


export const RegisterService = (credentials) =>{
    const http = new HttpService();
    let addedUrl = "user/register";
    return http.postData(credentials,addedUrl,"POST").then(data=>{
        console.log(JSON.stringify(data));
        return data;
    }).catch((error)=> {console.log(error)
   return error; 
    });
}

export const LogoutService =()=>
{
return new Promise(function(resolve)
 {
  Cookies.remove('vt-music');
  resolve(true);
  });
}




