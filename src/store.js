import Vue from 'vue';
import Vuex from 'vuex';
import { Toast } from "vant";
import { Login } from "@/api/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: '',
        userID: '',
        user:{}
    },
    mutations: {
        USERSLOGIN(state, userInfo) {
            state.userInfo = userInfo;
        },
        URERLOGIN(state, userID) {
            state.userID = userID
        },
        URERDATA(state,user){
            state.user = user
        }
    },
    actions: {
        usersLogin({ commit }, { phoneNumber, passWord }) {
            // console.log(phoneNumber, passWord)
            Login(phoneNumber, passWord)
                .then(response => {
                    let result = response;
                    if (result.status == 0) {
                        Toast.fail(result.msg);
                    } else if (result.status == 1) {
                        let userInfo = result.data
                        commit('USERSLOGIN', userInfo)
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
});