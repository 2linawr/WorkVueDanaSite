<template>
        <div className="MainTwoPages">
        <div className="blockprofile_2" v-if="Object.entries(getUser).length !== 0 && getLoadataProfile ==false">
        <div className="logoProfile_2"></div>
        <div className="infomation_2">
          <span className='textinfomation_1_2'>{{getUser.username}}</span>
          <span className='textinfomation_2_2'><span className="email">email:</span>{{getUser.email}}</span>
          <span className='textinfomation_2_2'><span className="email">phone:</span> {{getUser.phone}}</span>
          <span className='textinfomation_3_2'>О себе:</span>
          <span className='textinfomation_4_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
        </div>
        <div className="blockprofile_2" v-if="Object.entries(getUser).length ===0 && getLoadataProfile ==false">
        <span className="textTwoPages" >Выберите сотрудника, чтобы посмотреть его профиль</span>
        </div>

         <div className="MainSpinner" v-if=" Object.entries(getUser).length ===0 && getLoadataProfile==true">
        <div className="col-sm-2 col-xs-4 text-center">
        <div className="spinner-loader_2"> </div>
      </div>
      </div>
        
    </div>
</template>

<script>
import './style.scss';
import { mapGetters} from "vuex";
export default {
  name: 'ProfilePages',
  computed: mapGetters(["getUser","getLoadataProfile"]),
}
</script>

