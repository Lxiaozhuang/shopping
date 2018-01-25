import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex);

let store=new Vuex.Store({
    state:{
        data:[]
    },
    mutations:{
        getAll(state,payload){
            state.data=payload.data
        }
    },
    actions:{
        getAllList({commit},payload){
            setTimeout(()=>{
                Axios.get('https://www.easy-mock.com/mock/5a699a0532767a35bdb7f617/example/example#!method=get').then((res)=>{
                commit('getAll',{data:res.data.data})
                
            })
            },500)
        }
    }
})

export default store