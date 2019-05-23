<template>
    <div class="cm_page_body_main">
                        <div class="cm_page_body_wrapper">
                            <div class="alert alert_scondary" v-bind:class="{hidden:!status.showMsg}">
                                <div class="extra_info">
                                    <div class="alert_icon">
                                        <span class="cust_icon icon_info"></span>
                                    </div>
                                    <div class="alert_info">
                                        <p>Your Preferences has been updated</p>
                                    </div>
                                </div>
                            </div>
                            <div class="info_block">
                                <header class="cm_page_header">
                                    <div class="cm_header_title">
                                        <h2 class="info_title caps_upper font-bold">Contributor Preferences</h2>
                                    </div>
                                    <div class="cm_action_primary">
                                    </div>
                                </header>
                               <form action="">
                                    <div class="form-group ">
                                       <h4 class="form_row_title">Countries you create content for</h4>

                                         <Selectize class="form-control sel_multiple" multiple="multiple" name="countries" :settings="Countrysettings" v-model="selectedCountries" v-validate="'required'" >
                                            <option  v-for="country in u_countries" v-bind:key="country.id" v-bind:selected="country.status?'selected':''" v-bind:value="country.name" >{{country.name}}</option>
                                         </Selectize>

                                        <div class="form_input_loader">
                                           <div class="loader_text">Loading</div>
                                            <div class="loader_grid">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="form-group" v-bind:class="{data_loading:status.loadingCategory}">
                                       <h4 class="form_row_title">Your class categories</h4>
                                       
                                        <Selectize class="form-control sel_multiple" multiple="multiple" name="level" v-model="selectedLevels" v-validate="'required'" :settings="Categorysettings" >
                                            <option v-for="level in levels" v-bind:value="level.id" v-bind:key="level.id">{{level.name}}</option>  
                                        </Selectize>
                                        
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
                                    <div class="form-group" v-bind:class="{data_loading:status.loadingSubject}">
                                        <h4 class="form_row_title">Your Subjects</h4>
                                        <Selectize class="form-control sel_multiple" multiple="multiple" name="subject" v-model="selectedSubjects" v-validate="'required'" :settings="Subjectsettings">
                                            <option v-for="subject in u_subjects" v-bind:key="subject.id" v-bind:value="subject.id" >{{subject.name}}</option>
                                        </Selectize>
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
                                </form>
                                <div class="form_cto">
                                    <button type="submit" class="btn btn-primary" v-bind:class="{loading:status.isProcessing}" v-on:click="updatePreference">
                                        <span class="btn-label">Save Changes</span>
                                        <div class="loadmore">
                                                <span>Processing</span>
                                                <span class="spinner"></span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
</template>
<script>
import Selectize from 'vue2-selectize'
var localstore  = require('../../utility/cookieStorage.js'); 
var axios = require('../../Utility/serverRequestUtil.js')


var initialCategories =[];
var initialSubjects = [];

export default {

    data(){
        return{
            u_countries : [
                 {name: 'Nigeria', id:1, status:true}, 
                 {name:'Ghana', id:2, status:false},
                 {name:'France', id:3, status:true},
                 {name:'South Africa', id:4, status:false},
                 {name:'South Korea', id:5, status:false},
                 {name:'China', id:6, status:false},
                 {name:'India', id:7, status:false},
                 {name:'United Kingdom', id:8, status:false}, 
                 {name:'United States of America', id:9, status:false},
                 {name:'Seria Leone', id:10, status:false},
                 {name:'Togo', id:11, status:false},
                 {name:'Benin Republic', id:12, status:false},
                 {name:'Congo', id:13, status:false},
                 {name:'Cameron', id:14, status:false}
            ],

             countries:[],
             categories:[],
             subjects:[],

             Countrysettings:{
                onDropdownClose:this.getlevels,
               // onItemAdd: this.addCountry,
               // onItemRemove : this.removeCountry
            },

             Categorysettings:{
               // onItemAdd: this.removeCategory,
               // onItemRemove: this.addCategory
            },

             Subjectsettings:{
              //  onItemAdd: this.removeSubject,
              //  onItemRemove: this.addSubject
            },

            selectedCountries:[],
            status:{loadingCategory:false, loadingSubject:false, isProcessing:false, showMsg:false},
            levels:[],
            selectedLevels:[],
            u_subjects :[],
            selectedSubjects:[]
        }
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
                   if(resp.status==200){
                         resp.data.forEach(function(level){
                             
                             var d = {
                            id: level.id,
                            name:level.name,
                            parentId: level.parentId,
                            isActive: level.isActive,
                            description: level.description
                           }
                           v.levels.push(d)
                           v.categories.forEach(cat=>{
                               if(cat.id == d.id){
                                   v.selectedLevels.push(d.id);
                               }
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
               
                if(resp.status==200){
                     v.u_subjects = [];
                    resp.data.forEach(function(subj){
                        var d =  {
                        name: subj.name,
                        link:'',
                        description : subj.description,
                        imageUrl : subj.imageUrl,
                        id: subj.id
                    }
                        v.u_subjects.push(d)

                        v.subjects.forEach(subj=>{
                               if(subj.id == d.id){
                                   v.selectedSubjects.push(d.id);
                               }
                           })

                 })
                }
                v.status.loadingSubject= false;
            })
        },

        updatePreference: function(){


            var vueInstance = this;

            var addedCategories = [];
            var removedCategories= [];

            this.selectedLevels.map(sl=>{
                if(!initialCategories.includes(sl)){
                    vueInstance.levels.forEach(l=>{
                        if(l.id==sl){
                            addedCategories.push({
                                id:l.id,
                                name : l.name,
                                description: l.description,
                                isActive: l.isActive,
                                parentId: l.parentId
                            });
                        }
                    })
                }
            })

            initialCategories.map(l=>{
                if(!vueInstance.selectedLevels.includes(l)){
                    removedCategories.push(l);
                }
            })


            var addedSubjects = [];
            var removedSubjects= [];

             this.selectedSubjects.map(ss=>{
                if(!initialSubjects.includes(ss)){
                    vueInstance.u_subjects.forEach(s=>{
                        if(s.id==ss){
                            addedSubjects.push(s);
                        }
                    })
                }
            })

             initialSubjects.map(s=>{
                if(!vueInstance.selectedSubjects.includes(s)){
                    removedSubjects.push(s);
                }
            })


             
             var id = localstore.getdata('auth').id;
             var updatesCall = [];
             console.log(id);

             removedCategories.forEach(cat=>{
                 updatesCall.push(axios.delete(`/api/contributor/${id}/categories/${cat}`));
             })

            if(addedCategories.length>0){
                updatesCall.push(axios.post(`/api/contributor/${id}/categories`,addedCategories));
            }
             
            if(addedSubjects.length>0){
                 updatesCall.push(axios.post(`/api/contributor/${id}/subjects`, addedSubjects));
             }
             

             removedSubjects.forEach(sub =>{
                 updatesCall.push(axios.delete(`/api/contributor/${id}/subjects/${sub}`));
             });

             var data = {
                 countries: this.selectedCountries
             }

             updatesCall.push(axios.post(`/api/contributor/${id}/update_profile`, data))

             this.status.isProcessing= true;
             Promise.all(updatesCall).then(resps=>{
                 console.log(resps);
                 vueInstance.status.isProcessing = false;
                 vueInstance.updateUserData(); 

             }).catch(err=>{
                  console.log('Server error ')
                  console.log( JSON.stringify(err));
             }); 

        },



         updateUserData : function(){

            var vueInstance = this;
            var id = localstore.getdata('auth').id;
            var url ='/api/contributor/'+ id +'/profile';

                            axios.get(url).then(function(res){
                                console.log(res)
                                if(res.status==200 && res.data.status=="success" ){
                                var r = res.data.data; 
                                var user_data = {
                                        firstname:r.firstName,
                                        lastname: r.lastName,
                                        fullname:r.fullName,
                                        address: r.address,
                                        bio:r.bio,
                                        categories:r.categories,
                                        countries: r.countries,
                                        educationLevel:r.educationLevel,
                                        email: r.email,
                                        employmentStatus: r.employmentStatus,
                                        id: r.id,
                                        languages:r.languages,
                                        linkedInUrl:r.linkedInUrl,
                                        mobileNumber:r.mobileNumber,
                                        picture:r.picture,
                                        role:r.role,
                                        roleExpereience:r.roleExpereience,
                                        schools:r.schools,
                                        subjects : r.subjects,
                                        questionsCreated:r.questionsCreated,
                                        state:r.state,
                                        country:r.country,
                                        rating:r.averageRating,
                                        username:r.username
                                    };

                                    localstore.storeUserData('user_detail',user_data);   
                                }
                            }).catch(function(err){

                            })  
         }

    },
    
     mounted: function(){
        this.$emit('set-active-class',{tab:'contributor-setting'})
    },

    created: function(){


        let ContributorInfo = localstore.getdata('user_detail');
        
        this.countries = ContributorInfo.countries;

        this.categories = ContributorInfo.categories;
        ContributorInfo.categories.forEach(c=>{
             initialCategories.push(c.id);
        })
       

        this.subjects = ContributorInfo.subjects;
         ContributorInfo.subjects.forEach(s=>{
             initialSubjects.push(s.id);
        })
      
       
        var vueInstance = this;
        this.u_countries.forEach(country=>{
            vueInstance.countries.forEach(c=>{
                if(country.name.trim().toLowerCase()==c.trim().toLowerCase()){
                    country.status=true;
                    vueInstance.selectedCountries.push(country.name);
                    // initialCountry.push(country.name);
                }
            })
        })
        this.getlevels();
    },

    components :{ 
       Selectize
    },
}
</script>

