import Vue from 'vue'
import container from './container.vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';

require('../css/reset.css')
require('../css/base.min.css')
require('../css/selectize.bootstrap3.css')
require('../css/styles.css')
import 'vue2-dropzone/dist/vue2Dropzone.css'


// require("./Utility/modernizr")
require("jquery")
require("./utility/base.min.js")
//require('./Utility/dropzone.min.js')
require("./script.js")

const dictionary = {
    en: {
      messages:{
        required: () => 'Require*',
        email: ()=> 'invalid email',
        alpha:() => 'invalid name',
        image :()=> 'invalid format',
        numeric : ()=> 'invalid entry',
        before : ()=> 'minimum of 18 years of age is require',
        confirmed:()=> 'password does not match',
        min : ()=> 'Password must not be less than 5 characters'
      }
    }
}

Validator.localize(dictionary);
Vue.use(VeeValidate, {event: 'onchange'});
Vue.use(VueRouter)

//Vue.component('page-container',container);

new Vue({
    el :'#app',
    render: h => h(container)   
   })

  
  
   
   