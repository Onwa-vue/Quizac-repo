import header from '../common/header.vue'
import auth_header from '../common/authenticated_header.vue'
import footer from '../common/footer.vue'

import profile from './profile.vue'
import userInfo from './userInfomation.vue'
import preference from './preference.vue'
import accountSetting from './accountSetting.vue'

var routes = [
    {
        path:'/profile',
        components:{
            header:auth_header,
            main: profile,
            footer: footer
        },
        children: [
            { 
                path:'',
                components:{
                mainsection :  userInfo
                },
                meta :{
                    requiresAuth:true
                }
            },

            { 
                path:'preference',
                components:{
                mainsection :  preference
                },
                meta :{
                    requiresAuth:true
                }
            },

            { 
                path:'account/setting',
                components:{
                mainsection :  accountSetting
                },
                meta :{
                    requiresAuth:true
                }
            },


        ]            
    }
];
