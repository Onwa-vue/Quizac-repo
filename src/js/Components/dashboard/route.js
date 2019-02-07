import header from '../common/header.vue'
import auth_header from '../common/authenticated_header.vue'
import footer from '../common/footer.vue'

import dashboard from './dashboard.vue'
import userdata_hero from './subcomponents/userdata_hero.vue'
import verification_confirmation from './verification_confirmation.vue'
import home from './home.vue'
import newQuestionSet from './newQuestionSet.vue';
import questionSets from './questionSets.vue'
import questionSetDetail from './questionSetDetail.vue'
import questionEntryOption from './subcomponents/questionUploadOptions.vue'
import questionSetVersions from './subcomponents/questionSetVersions.vue'

import question from './newQuestionform.vue'
import questionDetail from './questionDetail.vue'

var routes = [
    {
        path:'/dashboard',
        components:{
            header:auth_header,
            main: dashboard,
           // footer: footer
        },
        children: [

            {
                path:'',
                components:{
                    userdata: userdata_hero,
                    main :  home
                },
                meta :{
                    requiresAuth:true
                 }
            },
            
            {
            path:'verification',
            components:{
                userdata: userdata_hero,
                main :  verification_confirmation
            },
            meta :{
                requiresAuth:true
             }
           },

           {
            path:'questionset',
            components:{
                main :  questionSets
            },
            meta :{
                requiresAuth:true
             }
            
           },
          
           {
            path:'questionset/new',
            components:{
                main :  newQuestionSet
            },
            meta :{
                requiresAuth:true
             }
            
           }
        ],
        meta:{
            requiresAuth:true
        }
    },
    
    {
        path:'/dashboard/questionset/:questionsetId',
        components:{
            header:auth_header,
            main: questionSetDetail,
        },
        children:[
            {
                path:'',
                name: 'questionSetVersions' ,
                components:{
                    section : questionSetVersions
                },
                meta :{
                    requiresAuth:true
                 }
            }
        ],
        meta:{
            requiresAuth:true
        }
    },

    {
        path:'/dashboard/questionset/:questionsetId/version/:versionId/question/new',
        name:'newQuestionForm',
        components:{
            header:auth_header,
            main: question,
        },
        meta:{
            requiresAuth:true
        }
    } ,

    {
        path:'/dashboard/questionset/:questionsetId/question/:questionId',
        name:'questionDetail',
        components:{
            header:auth_header,
            main: questionDetail,
        },
        meta:{
            requiresAuth:true
        }
    } 


]

export default routes;