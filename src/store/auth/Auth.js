import { LoginService, RegisterService } from "../../services/auth/AuthService";
import * as Types from "./MutationTypes"
import Cookies from 'js-cookie'

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
            state.loginResponse = "loading";
           },
        [Types.LOGIN_SUCCESS] (state, data) {
            state.loginResponse = data;
        },
        [Types.LOGIN_ERROR] (state, data) {
            state.loginResponse = data;
           },
         [Types.RESTART_REGISTER_RESPONSE] (state) {
             state.registerResponse = "loading";
            },
        [Types.REGISTER_LOADING] (state) {
                state.registerResponse = "loading";
            },
        [Types.REGISTER_SUCCESS] (state, data) {
                state.registerResponse = data;
            },
        [Types.REGISTER_ERROR] (state, data) {
                state.registerResponse = data;
               },         
    },
    actions: 
    {
      login ({commit}, data,router)
      {
          commit(Types.RESTART_LOGIN_RESPONSE);
          commit(Types.LOGIN_LOADING);
          LoginService(data).then((response)=>
          {
             if(response.success == true)
             {
                 commit(Types.LOGIN_SUCCESS,response);
                 Cookies.set("user-auth",response.token);
                router.push('/dashboard');
             }else
             {
               commit(Types.LOGIN_ERROR,response);
             }
          });
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