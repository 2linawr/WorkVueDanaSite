<template>
   <div class="MainblockSideBar">
        <span class="text_1blockside">Поиск сотрудников</span>
        <input id="searchinput" class="searchinput"  @change="getdata()" type="text" placeholder="Введите id или имя"/>
        <span class="text_2blockside">Результаты</span>
<div class="blocksearchfinded" v-if="allPosts.length==0 && getLoadata==false">
 <span class="text_3blockside" >начните поиск</span>
 
 </div>

<div class="blocksearchfinded" v-if="allPosts.length!=0 && getLoadata==false" >
  <div className="blockprofile" v-for="post in allPosts" :key="post.id">
        <div className="Click" @click="MutationProfile(post.id)"></div>
        <div className="logoProfile"></div>
        <div :id="post.id" className="infomation">
          <span className='textinfomation_1'>{{post.username}}</span>
          <span className='textinfomation_2'>{{post.email}}</span>
        </div>
        </div>     
</div>
<div class="blocksearchfinded" v-if="getLoadata==true">
<div class="col-sm-2 col-xs-4 text-center" >
    <div class="spinner-loader"> </div>
  </div>

     
</div>

  </div>
</template>

<script>



import { mapGetters, mapActions} from "vuex";
import './style.scss';

    
export default {
  name: 'SideBar',
  computed: mapGetters(["allPosts","getLoadata","getUser"]),
  methods: {...mapActions(["fetchPosts","updateLoad","clearData","updateUser"]),
  getdata: function () {
  let hrefdataid = 'https://jsonplaceholder.typicode.com/users?id=""';
  let hrefdataname = 'https://jsonplaceholder.typicode.com/users?username=""';
const textinput = document.getElementById('searchinput').value;
    if(textinput!=""){
    const mass = textinput.split(",");
   for(var i=0;i<=mass.length;i++){
      if(!isNaN(parseInt(mass[i]))  && mass[i]!=undefined && mass[i]!=''){
        hrefdataid+="&id="+String(mass[i]);
      }
       else if(isNaN(parseInt(mass[i])) && mass[i]!=undefined && mass[i]!=''){
              hrefdataname+="&username="+String(mass[i]);
    }
    }
    const url = {
      url_1:hrefdataid,
      url_2:hrefdataname,
    }
  this.clearData();
  this.updateLoad();
   setTimeout(() => {
   this.fetchPosts(url);}, 1000);
    }
    else{
      this.clearData();
    }
            },
  MutationProfile: function (id) {
    var mass=this.allPosts;
  let user = {}  
  var foo = document.querySelectorAll(".infomation");
  var foo_2 = document.getElementById(id);
  for (var j = 0; j < foo.length; j++) {
    foo[j].classList.remove("active");
  }

   foo_2.classList.add("active");
      for(var i=0;i<mass.length;i++){
       
        if(mass[i].id==id){
           user = {
                id:mass[i].id,
                username:mass[i].username,
                email:mass[i].email,
                phone:mass[i].phone
              }  
        }
  } 
  this.updateUser(user); 
  },
  }
  }
</script>
