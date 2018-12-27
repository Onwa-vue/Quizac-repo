import index from '../index/index.vue'
import header from '../common/header.vue'
import auth_header from '../common/authenticated_header.vue'
import footer from '../common/footer.vue'


var routes = [
    {
        path :'/',
        name:'index',
        components :{
            header: header,
            main: index, 
            footer :footer
        }
    }
]

export default routes;