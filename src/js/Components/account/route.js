import header from '../common/header.vue'
import auth_header from '../common/authenticated_header.vue'
import footer from '../common/footer.vue'

import login from '../account/login.vue'
import signup from '../account/signup.vue'
import signuplanding from '../account/signup_landing.vue'
import forgotpassword from '../account/forgotpassword.vue'
import studentsignup from './student_signup.vue'
import resetpassword from './reset_password.vue'



var routes = [
    {
        path:'/login',
        name:'login',
        components :{
            header: header,
            main: login, 
            footer :footer
        } 
    },
    {
        path:'/signup',
        name:'signup',
        components :{
            header: header,
            main: signup, 
            footer :footer
        }  
    },
    {
        path:'/signup_landing',
        name:'signup_landing',
        components:{
            header:header,
            main: signuplanding,
            footer: footer
        }
    },
    {
        path:'/forgot_password',
        name:'forgotpassword',
        components:{
            header:header,
            main: forgotpassword,
            footer: footer
        }
    },
    {
        path:'/student_signup',
        name:'studentsignup',
        components:{
            header:header,
            main: studentsignup,
            footer: footer
        }
    },{
        path:'/reset/password/:username',
        name:'resetpassword',
        components:{
            header:header,
            main: resetpassword,
            footer: footer
        }
    }

]

export default  routes;