import header from '../common/header.vue'
import auth_header from '../common/partial_authenticated_header.vue'
import footer from '../common/footer.vue'

import onboarding from '../onboarding/onboarding.vue'
import stageone from '../onboarding/stageone.vue'
import stagetwo from '../onboarding/stagetwo.vue'


var routes = [

      {
        path:'/onboarding',
        components:{
            header:auth_header,
            main: onboarding
        },

        children: [{
            path:'',
            name:'onboarding',
            component:stageone,
            meta: {
                complete_stg1:false
            }
        },
        {
            path:'stagetwo',
            component:stagetwo,
            meta: {
                complete_stg2:false
            }
        }
       ],
       meta:{
           requiresAuth:true,
           isOnboarding:true
       }
    }
]

export default  routes;