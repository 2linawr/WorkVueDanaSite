import axios from 'axios'

export default {
  actions: {
     fetchPosts({ commit,state }, url) {
      const headers = {
        'Content-Type': 'application/json',
      }
      axios.get(url.url_1,{headers}).then((response) => { const data = response.data;
      commit('updatePosts',data)
    });  

    axios.get(url.url_2,{headers}).then((response) => { const data = response.data;
      commit('updatePosts_2',data)
      setTimeout(() => {
        state.loadata =false;}, 1000);
  
    }); 
    },
    updateLoad({ commit}) {
      let check = true;
      commit('updateLoadMut',check)
    },
    updateUser({ commit,state},user) {
      commit('clearUser')
      state.loaddataprofile=true;

  
      setTimeout(() => {
        commit('updateUser',user)
        state.loaddataprofile =false;}, 1000);
    },
    
    clearData({commit}){
      commit('clearDataMutation')
    }
  },
  mutations: {
    updatePosts(state, users) {
      state.users=users;
    },
    updatePosts_2(state, users) {
      state.users = state.users.concat(users);

    },
    updateLoadMut(state,check) {
        state.loadata = check;
      },
      updateUser(state,user) {
        state.user = user;
      },
      clearUser(state){
        state.user={}
      },  
    clearDataMutation(state){
      state.users=[];
      state.user={}
    }
  },
  state: {
    users: [],
    user:{},
    loadata:false,
    loaddataprofile:false
  },
  getters: {
    allPosts(state) {
      return state.users
    },
    getLoadata(state){
      return state.loadata
    },
    getLoadataProfile(state){
      return state.loaddataprofile
    },
    getUser(state){
      return state.user
    }
  }
}
