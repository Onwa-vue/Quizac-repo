import VueRouter from 'vue-router';
import accountRoutes from '../js/Components/account/route';
import dashboardRoutes from '../js/Components/dashboard/route';
import indexroute from '../js/Components/index/route';
import onboardingroutes from '../js/Components/onboarding/route';

var localstore  = require('./Utility/cookieStorage.js') 


import index from './Components/index/index.vue'
import header from './Components/common/header.vue'
import auth_header from './Components/common/authenticated_header.vue'
import footer from './Components/common/footer.vue'


var routes = [];
routes.push.apply(routes,indexroute);
routes.push.apply(routes,accountRoutes);
routes.push.apply(routes,dashboardRoutes);
routes.push.apply(routes,onboardingroutes)

var router = new VueRouter({
    routes : routes
})

router.beforeEach((to, from, next)=>{

    if(to.matched.some(r=>r.meta.requiresAuth)){
        // check cookie storage 
        if(localstore.getdata('auth')==null){
            next({name:'login'})
        }
        else
        {
           
            if(localstore.getdata('stage1_onboarding').status && localstore.getdata('stage2_onboarding').status){
                next();
            }

            if(localstore.getdata('stage1_onboarding').status == false){
               
                if(to.path =="/onboarding"){
                    next();
                }
                else
                    next('/onboarding');
            }else{

            if(localstore.getdata('stage2_onboarding').status == false){
              if(to.path =="/onboarding/stagetwo")
                next();
              else
                next('/onboarding/stagetwo');
              
            }
        }
        }
    }else{
       next();
    }
    
})

export default router;