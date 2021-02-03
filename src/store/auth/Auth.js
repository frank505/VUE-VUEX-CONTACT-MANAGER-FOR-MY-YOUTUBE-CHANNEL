import { LoginService, RegisterService } from "../../services/auth/AuthService";
import * as Types from "./MutationTypes"
import Cookies from 'js-cookie'
import router from '../../router'

export default {
    namespaced: true,
    state: {
        loginResponse:'',
        registerResponse:''
    },
    mutations: 
    {
        [Types.RESTART_LOGIN_RESPONSE] (state) {
           state.loginResponse = "";
          },
        [Types.LOGIN_LOADING] (state) {
            state.loginResponse = "loading..";
           },
        [Types.LOGIN_SUCCESS] (state, data) {
            state.loginResponse = data;
        },
        [Types.LOGIN_ERROR] (state, data) {
            if(typeof data.error == 'undefined')
            {
                let dataErr = {success:false,message:data.error};
                state.loginResponse = dataErr;

            }else if(typeof data.error =='object')
            {
                Object.keys(data.error).map((keys)=>{
                    
                    let dataErr = {success:false,message:data.error[keys][0]};
                   state.loginResponse = dataErr;
                   
                  });
            }else if(typeof data.error == 'string')
            {
                let dataErr = {success:false, message:data.error};
                state.loginResponse = dataErr;
            
            }
           },
         [Types.RESTART_REGISTER_RESPONSE] (state) {
             state.registerResponse = "";
            },
        [Types.REGISTER_LOADING] (state) {
                state.registerResponse = "loading..";
            },
        [Types.REGISTER_SUCCESS] (state, data) {
                state.registerResponse = data;
            },
        [Types.REGISTER_ERROR] (state, data) 
        {
            if(typeof data.error == 'undefined')
            {
                let dataErr = {success:false,message:data.error};
                state.registerResponse = dataErr;

            }else if(typeof data.error =='object')
            {
                Object.keys(data.error).map((keys)=>{
                    
                    let dataErr = {success:false,message:data.error[keys][0]};
                   state.registerResponse = dataErr;
                   
                  });
            }else if(typeof data.error == 'string')
            {
                let dataErr = {success:false, message:data.error};
                state.registerResponse = dataErr;
            
            }
        },         
    },
    actions: 
    {
        clearLoginState({commit})
        {
            commit(Types.RESTART_LOGIN_RESPONSE);
        },
      login ({commit}, data)
      {
          console.log(router);
          commit(Types.RESTART_LOGIN_RESPONSE);
          commit(Types.LOGIN_LOADING);
          LoginService(data).then((response)=>
          {
             if(response.success == true)
             {
                Cookies.set("user-auth",response.token);
                router.push('/dashboard');
                 commit(Types.LOGIN_SUCCESS,response);
                 
             }else
             {
               commit(Types.LOGIN_ERROR,response);
             }
          });
      },
      clearRegisterState({commit})
      {
          commit(Types.RESTART_REGISTER_RESPONSE);
      },
      register ({commit}, data)
      {
          commit(Types.RESTART_REGISTER_RESPONSE);
          commit(Types.REGISTER_LOADING);
          RegisterService(data).then((response)=>
          {
             if(response.success == true)
             {
                 commit(Types.REGISTER_SUCCESS,response);
                 
             }else
             {
               commit(Types.REGISTER_ERROR,response);
             }
          });
      },

    }
  }