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
                onItemAdd: this.removeCountry,
                onItemRemove : this.addCountry
            },

             Categorysettings:{
                onItemAdd: this.removeCategory,
                onItemRemove: this.addCategory
            },

             Subjectsettings:{
                onItemAdd: this.removeSubject,
                onItemRemove: this.addSubject
            },

            selectedCountries:[],
            status:{loadingCategory:false, loadingSubject:false, isProcessing:false, showMsg:false},
            levels:[],
            selectedLevels:[],
            u_subjects :[],
            selectedSubjects:[],
           
           
           removedCountries:[],
           addedCountries:[],

           removedCategories:[],
           addedCategories:[],

           removedSubjects:[],
           addedSubjects:[]
        }
    },

  /*  props:{
        countries:Array,
        categories:Array,
        subjects:Array
    }, */

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
             var id = localstore.getdata('auth').id;
             var updatesCall =[];

             this.removedCategories.forEach(cat=>{
                 updatesCall.push(axios.delete(`/api/contributor/${id}/categories/${cat.id}`));
             })

             this.addedCategories.forEach(cat=>{
                 updatesCall.push(axios.post(`/api/contributor/${id}/categories`),cat);
             })

             this.addedSubjects.forEach(sub =>{
                 updatesCall.push(axios.post(`/api/contributor/${id}/subjects`, sub));
             })

             this.removedSubjects.forEach(sub =>{
                 updatesCall.push(axios.delete(`/api/contributor/${id}/subjects/${sub.id}`));
             });

             var data = {
                 countries: this.selectedCountries
             }
             updatesCall.push(axios.post(`/api/contributor/${id}/update_profile`, data))

             this.status.isProcessing= true;
             Promise.all(updatesCall).then(resps=>{
                 vueInstance.status.isProcessing = false;
                 let ContributorInfo = localstore.getdata('user-detail');
                 ContributorInfo.countries = vueInstance.selectedCountries;
                
                 var selectedCategoriesObj = [];
                 var selectedSubjectsObj = [];

                

                 vueInstance.levels.forEach(l=>{
                     vueInstance.selectedLevels.forEach(sl=>{
                         if(sl==l.id){
                             selectedCategoriesObj.push(l);
                         }
                     })
                 })

                  console.log('level is cool');
                  console.log(selectedCategoriesObj);

                 ContributorInfo.categories = selectedCategoriesObj;

                 vueInstance.subjects.forEach(sub=>{
                     vueInstance.selectedSubjects(s=>{
                         if(s==sub.id){
                             selectedSubjectsObj.push(sub);
                         }
                     })
                 })

                  console.log('Subject is cool');
                  console.log(selectedSubjectsObj);

                 ContributorInfo.subjects = selectedSubjectsObj;
                 localstore.storeUserData('user-detail',ContributorInfo); 


             }).catch(err=>{});

           /*  let vueInstance = this;
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
                    
                    var d = {
                        countries: this.selectedCountries,
                    }

                    this.status.isProcessing= true;
                    Promise.all([axios.post('/api/contributor/'+ id +'/categories',levels),axios.post('api/contributor/'+ id +'/subjects',subjects),axios.post('api/contributor/'+ id +'/update_profile',d.countries) ]).
                    then(resps=>{
                        if(resps[0].statusText=='OK' && resps[1].statusText=='OK' && resps[2].statusText=='OK'){        
                            vueInstance.status.showMsg=true;
                            setInterval(function(){
                                 vueInstance.status.showMsg=false;
                            }, 10000)                                                           
                        }
                        vueInstance.status.isProcessing = false;
                    }).catch(err=>{

                    }) */
        },

        addCategory : function(data){
            console.log('am inside to add category');
            console.log(data);
            this.levels.push(data);
            this.selectedLevels.push(data.id);
        },

        addSubject: function(data){
            console.log('am inside to add subject');
            console.log(data);
            this.u_subjects.push(data);
            this.selectedSubjects.push(data.id)
        },

        removeCountry: function(d,e){
           if(this.countries.includes(d)){
               this.removedCountries.push(d);
               var index = this.addedCountries.indexOf(d);
               if(index>=0){
                   this.addedCountries.splice(index,1);
               }
           }
        },

        addCountry: function(d){
            if(!this.countries.includes(d)){
                this.addedCountries.push(d);

                 var index = this.removedCountries.indexOf(d);
                  if(index>=0){
                   this.removedCountries.splice(index,1);
               }
            }
        },

        removeCategory: function(d,e){
            var cat;
            this.categories.forEach(c=>{
                if(c.id==d){
                    cat = c;
                }
            })

            if(this.categories.includes(cat)){
                this.removedCategories.push(cat)
                var index = this.addedCategories.indexOf(cat);
                if(index >=0){
                    this.addedCategories.splice(index,1);
                }
            }
        },

        addCategory: function(d){
             var cat;
            this.categories.forEach(c=>{
                if(c.id==d){
                    cat = c;
                }
            })

             if(!this.categories.includes(cat)){
                 this.addedCategories.push(cat);
                  var index = this.removedCategories.indexOf(cat);
                if(index >=0){
                    this.removedCategories.splice(index,1);
                }
             }

        },

         removeSubject: function(d,e){

             var sub;
             this.subjects.forEach(s=>{
                 if(s.id == d){
                     sub = s;
                 }
             }) 
             
              if(this.subjects.includes(sub)){
                this.removedSubjects.push(sub)
                var index = this.addedSubjects.indexOf(sub);
                if(index >=0){
                    this.addedSubjects.splice(index,1);
                }
            }


        },

        addSubject: function(d){

             var sub;
             this.subjects.forEach(s=>{
                 if(s.id == d){
                     sub = s;
                 }
             })
              if(!this.subjects.includes(sub)){
                this.addedSubjects.push(sub)
                var index = this.removedSubjects.indexOf(sub);
                if(index >=0){
                    this.removedSubjects.splice(index,1);
                }
            }
        }
    },
    
     mounted: function(){
        this.$emit('set-active-class',{tab:'contributor-setting'})
    },

    created: function(){


         let ContributorInfo = localstore.getdata('user-detail');
        
        this.countries = ContributorInfo.countries;
        this.categories = ContributorInfo.categories;
        this.subjects = ContributorInfo.subjects;

       
        var vueInstance = this;
        this.u_countries.forEach(country=>{
            vueInstance.countries.forEach(c=>{
                if(country.name.trim().toLowerCase()==c.trim().toLowerCase()){
                    country.status=true;
                    vueInstance.selectedCountries.push(country.name);
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

