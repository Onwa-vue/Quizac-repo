<template>
<div>

<update-dialog v-bind="info" v-on:update-info="updateInfo"></update-dialog>
<delete-account-dialog v-bind:id="id" ></delete-account-dialog>
<new-category-dialog  v-on:submitcategory="addCategory"></new-category-dialog>
<new-subject-dialog v-on:submitsubject="addSubject"></new-subject-dialog>

 <main class="main_content_wrapper bg__off_white">
       <div class="cm_page_content">
           <div class="container">
                <div class="cm_page_body">
                    <!-- Secondary page sidebar for pages with secondary side navs -->
                    <div class="cm_page_body_side_left">
                        <div class="page_nav_secondary">
                            <h4 class="nav_heading">My Account</h4>
                            <ul class="secondary_nav_menu">
                                <li class="" v-bind:class="{active:activeStatus.info_tab}">
                                
                                   <router-link class="sidebar_nav_menu_link" to="/profile">
                                  <!-- <a href="profile_lander.html" class="sidebar_nav_menu_link"> -->
                                        <span class="menu_item_icon">
                                            <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.9 482.9">
                                                <path d="M239.7,260.2c0.5,0,1,0,1.6,0c0.2,0,0.4,0,0.6,0c0.3,0,0.7,0,1,0c29.3-0.5,53-10.8,70.5-30.5c38.5-43.4,32.1-117.8,31.4-124.9c-2.5-53.3-27.7-78.8-48.5-90.7C280.8,5.2,262.7,0.4,242.5,0h-0.7c-0.1,0-0.3,0-0.4,0h-0.6c-11.1,0-32.9,1.8-53.8,13.7c-21,11.9-46.6,37.4-49.1,91.1c-0.7,7.1-7.1,81.5,31.4,124.9C186.7,249.4,210.4,259.7,239.7,260.2zM164.6,107.3c0-0.3,0.1-0.6,0.1-0.8c3.3-71.7,54.2-79.4,76-79.4h0.4c0.2,0,0.5,0,0.8,0c27,0.6,72.9,11.6,76,79.4c0,0.3,0,0.6,0.1,0.8c0.1,0.7,7.1,68.7-24.7,104.5c-12.6,14.2-29.4,21.2-51.5,21.4c-0.2,0-0.3,0-0.5,0l0,0c-0.2,0-0.3,0-0.5,0c-22-0.2-38.9-7.2-51.4-21.4C157.7,176.2,164.5,107.9,164.6,107.3z"></path>
                                                <path d="M446.8,383.6c0-0.1,0-0.2,0-0.3c0-0.8-0.1-1.6-0.1-2.5c-0.6-19.8-1.9-66.1-45.3-80.9c-0.3-0.1-0.7-0.2-1-0.3c-45.1-11.5-82.6-37.5-83-37.8c-6.1-4.3-14.5-2.8-18.8,3.3c-4.3,6.1-2.8,14.5,3.3,18.8c1.7,1.2,41.5,28.9,91.3,41.7c23.3,8.3,25.9,33.2,26.6,56c0,0.9,0,1.7,0.1,2.5c0.1,9-0.5,22.9-2.1,30.9c-16.2,9.2-79.7,41-176.3,41c-96.2,0-160.1-31.9-176.4-41.1c-1.6-8-2.3-21.9-2.1-30.9c0-0.8,0.1-1.6,0.1-2.5c0.7-22.8,3.3-47.7,26.6-56c49.8-12.8,89.6-40.6,91.3-41.7c6.1-4.3,7.6-12.7,3.3-18.8c-4.3-6.1-12.7-7.6-18.8-3.3c-0.4,0.3-37.7,26.3-83,37.8c-0.4,0.1-0.7,0.2-1,0.3c-43.4,14.9-44.7,61.2-45.3,80.9c0,0.9,0,1.7-0.1,2.5c0,0.1,0,0.2,0,0.3c-0.1,5.2-0.2,31.9,5.1,45.3c1,2.6,2.8,4.8,5.2,6.3c3,2,74.9,47.8,195.2,47.8s192.2-45.9,195.2-47.8c2.3-1.5,4.2-3.7,5.2-6.3C447,415.5,446.9,388.8,446.8,383.6z"></path>
                                            </svg>                                                 
                                        </span>
                                        <span class="menu_item_label">Personal Information</span>
                                 <!--   </a> -->
                                    </router-link>
                                </li>
                                 <li class="" v-bind:class="{active:activeStatus.contributor_setting}">
                                  <router-link class="sidebar_nav_menu_link" to="/profile/preference">
                                  <!-- <a href="contr_settings.html" class="sidebar_nav_menu_link"> -->
                                        <span class="menu_item_icon">
                                            <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.3 480.3">
                                                <path d="M254.15,234.1V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v220.6c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v98.2c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5v-98.2c31.3-6.3,55-34,55-67.2C309.15,268.2,285.55,240.4,254.15,234.1z M240.65,342.8c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S263.55,342.8,240.65,342.8z"></path>
                                                <path d="M88.85,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.4c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S120.15,127.2,88.85,120.9z M75.35,229.6c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S98.15,229.6,75.35,229.6z"></path>
                                                <path d="M418.45,120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5,6-13.5,13.5v107.4c-31.3,6.3-55,34-55,67.2s23.7,60.9,55,67.2v211.5c0,7.5,6,13.5,13.5,13.5s13.5-6,13.5-13.5V255.2c31.3-6.3,55-34,55-67.2S449.85,127.2,418.45,120.9z M404.95,229.6c-22.9,0-41.5-18.6-41.5-41.5s18.6-41.5,41.5-41.5s41.5,18.6,41.5,41.5S427.85,229.6,404.95,229.6z"></path>
                                            </svg> 
                                        </span>
                                        <span class="menu_item_label">Contributor Settings</span>
                                   <!-- </a> -->
                                   </router-link>
                                </li>
                                <li class="" v-bind:class="{active:activeStatus.account_setting}">
                                    <router-link class="sidebar_nav_menu_link" to="/profile/account/setting">
                                 
                                  <!-- <a href="act_settings.html" class="sidebar_nav_menu_link"> -->
                                        <span class="menu_item_icon">
                                            <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="-66 0 512 512">
                                                <path d="M 340 197.007812 L 340 150 C 340 67.289062 272.710938 0 190 0 C 107.289062 0 40 67.289062 40 150 L 40 197.007812 C 17.203125 201.652344 0 221.855469 0 246 L 0 302.769531 C 0 308.292969 4.476562 312.769531 10 312.769531 C 15.523438 312.769531 20 308.292969 20 302.769531 L 20 246 C 20 229.457031 33.457031 216 50 216 L 330 216 C 346.542969 216 360 229.457031 360 246 L 360 462 C 360 475.035156 351.640625 486.152344 340 490.28125 L 340 430 C 340 424.476562 335.523438 420 330 420 C 324.476562 420 320 424.476562 320 430 L 320 492 L 50 492 C 33.457031 492 20 478.542969 20 462 L 20 383 C 20 377.476562 15.523438 373 10 373 C 4.476562 373 0 377.476562 0 383 L 0 462 C 0 489.570312 22.429688 512 50 512 L 330 512 C 357.570312 512 380 489.570312 380 462 L 380 246 C 380 221.855469 362.796875 201.652344 340 197.007812 Z M 114 196 L 114 150 C 114 108.09375 148.09375 74 190 74 C 231.90625 74 266 108.09375 266 150 L 266 196 Z M 286 196 L 286 150 C 286 97.066406 242.933594 54 190 54 C 137.066406 54 94 97.066406 94 150 L 94 196 L 60 196 L 60 150 C 60 78.316406 118.316406 20 190 20 C 261.683594 20 320 78.316406 320 150 L 320 196 Z M 286 196 "></path>
                                                <path d="M 10 352.488281 C 12.628906 352.488281 15.210938 351.421875 17.070312 349.558594 C 18.929688 347.699219 20 345.121094 20 342.488281 C 20 339.859375 18.929688 337.277344 17.070312 335.421875 C 15.210938 333.558594 12.628906 332.488281 10 332.488281 C 7.371094 332.488281 4.789062 333.558594 2.929688 335.421875 C 1.070312 337.277344 0 339.859375 0 342.488281 C 0 345.121094 1.070312 347.699219 2.929688 349.558594 C 4.789062 351.421875 7.371094 352.488281 10 352.488281 Z M 10 352.488281 "></path>
                                                <path d="M 190 458 C 206.542969 458 220 444.542969 220 428 L 220 374.898438 C 235.023438 364.953125 244.128906 348.234375 244.128906 329.914062 C 244.128906 300.140625 219.902344 275.914062 190.128906 275.914062 C 160.351562 275.914062 136.128906 300.140625 136.128906 329.914062 C 136.128906 348.101562 145.132812 364.757812 160 374.726562 L 160 428 C 160 444.542969 173.457031 458 190 458 Z M 156.128906 329.914062 C 156.128906 311.164062 171.378906 295.914062 190.128906 295.914062 C 208.875 295.914062 224.128906 311.164062 224.128906 329.914062 C 224.128906 342.789062 216.980469 354.410156 205.476562 360.25 C 202.117188 361.953125 200 365.398438 200 369.167969 L 200 428 C 200 433.515625 195.515625 438 190 438 C 184.484375 438 180 433.515625 180 428 L 180 369.035156 C 180 365.292969 177.910156 361.863281 174.582031 360.148438 C 163.199219 354.28125 156.128906 342.695312 156.128906 329.914062 Z M 156.128906 329.914062 "></path>
                                                <path d="M 330 399 C 332.640625 399 335.210938 397.929688 337.070312 396.070312 C 338.929688 394.210938 340 391.640625 340 389 C 340 386.359375 338.929688 383.789062 337.070312 381.929688 C 335.210938 380.070312 332.640625 379 330 379 C 327.371094 379 324.789062 380.070312 322.929688 381.929688 C 321.070312 383.789062 320 386.371094 320 389 C 320 391.628906 321.070312 394.210938 322.929688 396.070312 C 324.789062 397.929688 327.371094 399 330 399 Z M 330 399 "></path>
                                            </svg>                                              
                                        </span>
                                        <span class="menu_item_label">Account Settings</span>
                                   <!-- </a> -->
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Main page content here -->
                    <router-view name="mainsection" v-bind="info"  v-on:set-active-class="setActiveClass" ref="updatedetail"></router-view>
               </div>
           </div>
        </div>
    </main> 
</div>  
</template>

<script>
import updateDialog from './components/updateProfile_dialog.vue'
import deleteAccountDialog from './components/deleteAccount_dialog.vue'
var localstore  = require('../../utility/cookieStorage.js'); 

import newcategory from './components/newCategorydialog.vue'
import newsubject from './components/newSubjectdialog.vue'


export default {
    data(){
        return{
       info:{},
       preference:{},
       id:'',
       activeStatus:{
           info_tab: false,
           contributor_setting: false,
           account_setting:false,
       }
        }
    },
    components:{
        'update-dialog':updateDialog,
        'delete-account-dialog':deleteAccountDialog,
        'new-category-dialog' : newcategory,
        'new-subject-dialog' : newsubject
    },

    methods:{
        setActiveClass: function(d){
            if(d.tab=='user-information'){
                this.activeStatus.info_tab= true
                this.activeStatus.contributor_setting= false
                this.activeStatus.account_setting= false
            }

            if(d.tab=='contributor-setting'){
                this.activeStatus.info_tab= false
                this.activeStatus.contributor_setting= true
                this.activeStatus.account_setting= false
            }

             if(d.tab=='account-setting'){
                this.activeStatus.info_tab= false
                this.activeStatus.contributor_setting= false
                this.activeStatus.account_setting= true
            }
        },

        updateInfo : function(d){
          
                let ContributorInfo = d;
                this.info.fullname = ContributorInfo.fullname;
                this.info.role = ContributorInfo.role;
                this.info.questionCount = ContributorInfo.questionsCreated;
                this.info.username = ContributorInfo.username;
                this.info.imageUrl = ContributorInfo.picture;
                this.info.defaultImg = ContributorInfo.firstname != null && ContributorInfo.lastname != null ? ContributorInfo.firstname[0]+ContributorInfo.lastname[0]: 'AB';
                this.info.averageRating = ContributorInfo.rating;
                this.info.location = ContributorInfo.state + ',  '+ ContributorInfo.country;
                this.info.about = ContributorInfo.bio;
                this.$refs.updatedetail.updateInfo(this.info);
                this.$emit('update-header')
        },

        addCategory: function(d){
            this.$refs.updatedetail.addCategory(d)
        },

        addSubject : function(d){
            this.$refs.updatedetail.addSubject(d);
        }
    },

     created: function(){

        let ContributorInfo = localstore.getdata('user-detail');
        this.id = ContributorInfo.id;
        this.info.fullname = ContributorInfo.fullname;
        this.info.role = ContributorInfo.role;
        this.info.questionCount = ContributorInfo.questionsCreated;
        this.info.username = ContributorInfo.username;
        this.info.imageUrl = ContributorInfo.picture;
        this.info.defaultImg = ContributorInfo.firstname != null && ContributorInfo.lastname != null ? ContributorInfo.firstname[0]+ContributorInfo.lastname[0]: 'AB';
        this.info.averageRating = ContributorInfo.rating;
        this.info.country =  ContributorInfo.country;
        this.info.state = ContributorInfo.state;
        this.info.about = ContributorInfo.bio;
        this.info.countries = ContributorInfo.countries;
        this.info.categories = ContributorInfo.categories;
        this.info.subjects = ContributorInfo.subjects;
    }
}
</script>


