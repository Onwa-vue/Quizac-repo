import header from '../common/header.vue'
import auth_header from '../common/authenticated_header.vue'
import footer from '../common/footer.vue'

import dashboard from '../dashboard/dashboard.vue'
import userdata_hero from '../dashboard/userdata_hero.vue'
import verification_confirmation from '../dashboard/verification_confirmation.vue'

var routes = [

    {
        path:'/dashboard',
        name:'dashboard',
        components:{
            header:auth_header,
            main: dashboard,
            footer: footer
        },
        children: [
            {
            path:'verification',
            components:{
                userdata: userdata_hero,
                main :  verification_confirmation
            },
            meta :{
                requiresAuth:true
            }
           }
        ],
        meta:{
            requiresAuth:true
        }
    }
]

export default routes;