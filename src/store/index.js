import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products:[1,2,3]
  },
  mutations: {
    
  },
  actions: {
    loadProducts({commit}){
      axios
      .get('https://fakestoreapi.com/products')
      .then(response=>{
       commit('increment',response.data);
    })

  }},
  modules: {
  }
  })
