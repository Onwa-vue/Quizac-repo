<template>
    <section class="section_block">
            <div class="container content_narrow">
                <header class="section_header">
                    <h3 class="section_title">Account Configuration</h3>
                    <p class="font-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugit sunt provident rem exercitationem obcaecati sit ex ullam nemo ducimus pariatur ipsum, vero dolor aliquid modi consequuntur velit! Quo, quibusdam!</p>
                </header>
                
                <div class="form_body">
                    <form action="" class="numbered_row_list">
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="question_text">Which country(s) will you like to create questions for? </span>
                                    <span class="explainer_tooltip" title="Your choice of countries here will determine which corriculum your content will fall under. Only students from these countries will be able to see and buy your content." data-toggle="tooltip">
                                        <img src="../../../img/icons/info.svg" class="cust_icon" alt="More Info">
                                    </span>
                                </header>
                                <div class="form-group">
                                    <Selectize class="form-control sel_multiple" multiple="multiple" name="countries" v-model="selectedCountries" :settings="Countrysettings" v-validate="'required'" >
                                        <option v-for="option in countries" v-bind:key="option.id" v-bind:value="option.name">{{option.name}}</option>
                                    </Selectize>
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                               <header class="row_header">
                                    <span class="question_text">Which class(es) will you be creating the questions for?</span>
                                    <span class="explainer_tooltip" title="Choose the class(es) the content you are goint to create will be most relevant to. You are advised to choose the closest, as the relevance of your questions will be the bases on which you will be rated." data-toggle="tooltip">
                                        <img src="../../../img/icons/info.svg" class="cust_icon" alt="More Info">
                                    </span>
                                </header>
                                <div class="form-group" v-bind:class="{data_loading:status.loadingCategory}">
                                    <selectize class="form-control sel_multiple" placeholder="Select your class(es) of interest" name="classes" multiple="multiple" v-model="selectedLevels" :settings="{}" v-validate="'required'" >
                                        <option v-for="level in levels" v-bind:key="level.id" v-bind:value="level.id">{{ level.name}}</option>
                                    </selectize>
                                    <div class="form_input_loader">
                                       <div class="loader_text">Loading</div>
                                        <div class="loader_grid">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                    </div>

                                    <div class="more_control">
                                        <a href="#new_cat_dialog" data-toggle="modal" data-backdrop="static">
                                            <span>+</span>
                                            <span>Can't find your class? Add it here.</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                               <header class="row_header">
                                    <span class="question_text">Which subject(s) will you like to create content for?</span>
                                </header>
                                <div class="form-group" v-bind:class="{data_loading:status.loadingSubject}">
                                    <selectize class="form-control sel_multiple" placeholder="Select your subjects of interest" multiple="multiple" name=subject v-model="selectedSubjects" v-validate="'required'">
                                        <option v-for="subject in subjects" v-bind:key="subject.id" v-bind:value="subject.id">{{subject.name}}</option>  
                                    </selectize>

                                     <div class="form_input_loader">
                                       <div class="loader_text">Loading</div>
                                        <div class="loader_grid">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                     </div>

                                    <div class="more_control">
                                        <a href="#new_subject_dialog" data-toggle="modal" data-backdrop="static">
                                            <span>+</span>
                                            <span>Can't find your subject? Add it here.</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                               <header class="row_header">
                                    <span class="question_text">What is your native language?</span>
                                </header>
                                <div class="form-group">
                                    <select class="form-control" placeholder="Select your subjects of interest" v-model="language" name="language" v-validate="'required'">
                                        <option>English</option>
                                        <option>French</option>
                                        <option>Portugese</option>
                                        <option>Spanish</option>
                                        <option>Cantonese</option>
                                        <option>Mandarine</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                               <header class="row_header">
                                    <span class="question_text">Please provide your contact email address and Phone number. We may need to contact you for further details about your application.</span>
                                </header>
                                <div class="row">
                                    <div class="form-group col-sm-6">
                                        <label class="control-label caps_upper">Email Address</label>
                                        <input type="email" class="form-control" placeholder="Contact Email" v-model="email" v-validate="'required|email'" >
                                    </div>
                                    <div class="form-group col-sm-6">
                                        <label class="control-label caps_upper">Phone Number</label>
                                        <input type="tel" class="form-control" placeholder="Contact Phone number" v-model="phonenumber" v-validate="'required'">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="submit_widget widget_fixed_bottom">
                        <div class="container content_narrow">
                            <div class="nav_flex_row">
                                <div class="nav_btn btn-prev"></div>
                               <div class="nav_btn btn-next">
                                   <!--Add the class "loading" to the button element to show the loader-->
                                    <button class="btn btn-primary "  v-bind:class="{loading:status.isProcessing}" v-on:click="submit">
                                        <span class="btn-label">Continue</span>
                                        <div class="loadmore">
                                           <span>Saving</span>
                                            <span class="spinner"></span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>

var localstore  = require('../../utility/cookieStorage.js'); 
import Selectize from 'vue2-selectize'
var axios = require('../../Utility/serverRequestUtil.js')
    
export default {
   
    data(){
        return {

            status:{isProcessing:false, text:'Continue', loadingCategory:false, loadingSubject:false},

            countries : [
                 {name: 'Nigeria', id:1}, 
                 {name:'Ghana', id:2},
                 {name:'France', id:3},
                 {name:'South Africa', id:4},
                 {name:'South Korea', id:5},
                 {name:'China', id:6},
                 {name:'India', id:7},
                 {name:'United Kingdom', id:8},
                 {name:'United States of America', id:9},
                 {name:'Seria Leone', id:10},
                 {name:'Togo', id:11},
                 {name:'Benin Republic', id:12},
                 {name:'Congo', id:13},
                 {name:'Cameron', id:14}
            ],

            Countrysettings:{
               // options: this.countries,
               // valueField: 'id',
               // labelField: 'name',
                onDropdownClose:this.getlevels
            },
           
            selectedCountries: [],
            levels:[],
            selectedLevels:[],
            subjects :[],
            selectedSubjects:[],
            language : null,
            email: null,
            phonenumber: null
        }
    },
    components :{ 
        Selectize
        },

   methods:{
        getlevels: function(){ 

           this.getSubjects();

           var req = [];
           
           this.selectedCountries.forEach(function(c){
               req.push(axios.get('api/category/country/'+c))
           });
           var v = this;
           this.status.loadingCategory= true;
           Promise.all(req).then(function(resps){
                v.levels = [];
                resps.forEach(function(resp){
                   if(resp.statusText== "OK"){
                         resp.data.forEach(function(level){
                         v.levels.push({
                            id: level.id,
                            name:level.name,
                            parentId: level.parentId,
                            isActive: level.isActive,
                            description: level.description
                        })
                    })
                   } 
                });
                 v.status.loadingCategory= false;
           });
        },

        getSubjects : function(){
            var url = 'api/Subject';
            var v = this;
             v.status.loadingSubject= true;
            axios.get(url).then(function(resp){
               console.log(resp);
                if(resp.statusText=="OK"){
                     v.subjects = [];
                    resp.data.forEach(function(subj){
                        v.subjects.push({
                        name: subj.name,
                        link:'',
                        description : subj.description,
                        imageUrl : subj.imageUrl,
                        id: subj.id
                    })
                 })
                }
                v.status.loadingSubject= false;
            })
        },

        addCategory: function(cat){
            console.log('am here');
            this.levels.push(cat);
            this.selectedLevels.push(cat);
            console.log(this.selectedLevels);
        },

        addSubject : function(subject){
            this.subjects.push(subject);
            this.selectedSubjects.push(subject);
        },

        submit : function(){ 

             var vueInstance = this;
             this.$validator.validate().then(result => {
                if(result && !this.status.isProcessing){
                   var id = localstore.getdata('auth').id;
                    var levels = [];
                    this.levels.map(l=>{
                        vueInstance.selectedLevels.forEach(sl=>{
                            if(sl==l.id){
                                levels.push(l);
                            }
                        })
                    })

                    var subjects = [];
                    this.subjects.map(s=>{
                        var subjs = [];
                        vueInstance.selectedSubjects.forEach(sb=>{
                            if(sb==s.id){
                                subjects.push(s);
                            }
                        })
                    })

                    this.status.isProcessing = true;
                    this.status.text='Processing';

                    Promise.all([axios.post('/api/contributor/'+ id +'/categories',levels),axios.post('api/contributor/'+ id +'/subjects',subjects)]).
                    then(function (resps){
                       
                       console.log(resps);

                        if(resps[0].statusText=="OK" && resps[1].statusText=="OK"){
                            var url = 'api/contributor/'+ id +'/update_profile';
                            var d = {
                                countries: vueInstance.selectedCountries,
                                mobileNumber: vueInstance.phonenumber,
                                email: vueInstance.email,
                                languages: vueInstance.language
                            }
                            console.log(d);
                            axios.post( url,d ).then(function(resp){
                                console.log(resp);
                                if(resp.statusText=="OK"){
                                    // save onboarding status 
                                    localstore.storeOnboardingdata('stage1_onboarding', {status: true})
                                    // navigate to stage two
                                    vueInstance.$router.push('/onboarding/stagetwo');  
                                }
                            }).catch(err=>{
                                this.status.isProcessing = false;
                                this.status.text='Continue';
                            });  
                        }   
                    }).catch(err=>{
                        this.status.isProcessing = false;
                        this.status.text='Continue';;  
                     });  
                }
        })
        }
    },
    
    mounted: function(){
      
    }
   
}



</script>

