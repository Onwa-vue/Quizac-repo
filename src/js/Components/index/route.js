import index from '../index/index.vue'
import header from '../common/header.vue'
import auth_header from '../common/authenticated_header.vue'
import partial_auth_header from '../common/partial_authenticated_header.vue'
import footer from '../common/footer.vue'
var localstore  = require('../../utility/cookieStorage.js'); 



var routes = [
    {
        path :'/',
        name:'index',
        components :{
            header: localstore.getdata('auth')== null || localstore.getdata('auth') == undefined? header:auth_header,
            main: index, 
            footer :footer
        }
    }
]

export default routes;