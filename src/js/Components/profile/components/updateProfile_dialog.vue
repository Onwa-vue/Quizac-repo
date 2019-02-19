<template>
   <div class="modal fade" id="update_profile">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <header class="modal-header">
                            <h4 class="modal-title text-caps">Update Profile</h4>
                            <button type="button" class="close_dialog" data-dismiss="modal" ></button>
                        </header>
                        <div class="modal-body">
                            <form action="">
                               <div class="form-group">
                                   <div class="userProfileThumb">
                                        <div class="user_info_avi">
                                            <!-- Bind the user image here if available -->
                                            <img  alt="" v-if="u_imageUrl !=null||u_imageUrl !=''" v-bind:src="u_imageUrl">
                                            <span class="default_avi" v-if="u_imageUrl ==null||u_imageUrl ==''">{{u_defaultImgText}}</span>
                                        </div>
                                        <label for="upload_imgs" class="avi_upload_button button_docked">
                                           <input type="file" accept=".png, .jpg, .jpeg" name="file" id="upload_imgs" hidden class="inputfile" v-on:change="imgPreview"/>
                                            <svg viewBox="64 64 896 896" class="cust_icon">
                                                <path d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"></path>
                                                <path d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 0 0-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"></path>
                                            </svg>
                                        </label>
                                    </div>
                               </div>
                                <div class="form-group ">
                                    <label class="control-label caps_upper">Full name</label>
                                    <input type="text" class="form-control" placeholder="E.g Lewis C. Clark" v-model="u_fullname">
                                </div>
                                <div class="form-group ">
                                    <label class="control-label caps_upper">Designation</label>
                                    <input type="text" class="form-control" placeholder="E.g English literature Author" v-model="u_role">
                                </div>
                                <div class="form-group">
                                    <label class="control-label caps_upper">About You</label>
                                    <textarea rows="5" class="form-control" placeholder="A little about yourself" v-model="u_bio"></textarea>
                                </div>
                                <div class="form-group ">
                                    <label class="control-label caps_upper">Country</label>
                                    <select class="form-control" placeholder="Select countries" v-model="u_country">
                                        <option>Nigeria</option>
                                        <option>Ghana</option>
                                        <option>France</option>
                                        <option>South Africa</option>
                                        <option>South Korea</option>
                                        <option>China</option>
                                        <option>India</option>
                                        <option>United Kingdom</option>
                                        <option>United States of America</option>
                                        <option>Seria Leone</option>
                                        <option>Togo</option>
                                        <option>Benin Republic</option>
                                        <option>Congo</option>
                                        <option>Cameron</option>
                                    </select>
                                </div>
                                 <div class="form-group ">
                                    <label class="control-label caps_upper">State/Province</label>
                                    <input type="text" class="form-control" placeholder="E.g Alaska" v-model="u_state">
                                </div>
                                <div class="form-group">
                                    <label class="control-label caps_upper">Date of Birth</label>
                                    <div class="date_selector_widget form_mng">
                                        <div class="date_item date_day">
                                            <select class="form-control" v-model="u_day">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option>19</option>
                                                <option>20</option>
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                                <option>31</option>
                                            </select>
                                        </div>
                                        <div class="date_item date_month">
                                            <select class="form-control" v-model="u_month">
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                                <option>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option selected>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                            </select>
                                        </div>
                                        <div class="date_item date_year">
                                            <select class="form-control" v-model="u_year">
                                                <option>1985</option>
                                                <option>1986</option>
                                                <option>1987</option>
                                                <option>1988</option>
                                                <option>1989</option>
                                                <option>1990</option>
                                                <option>1991</option>
                                                <option selected>1992</option>
                                                <option>1993</option>
                                                <option>1994</option>
                                                <option>1995</option>
                                                <option>1996</option>
                                                <option>1997</option>
                                                <option>1998</option>
                                                <option>1999</option>
                                                <option>2000</option>
                                                <option>2001</option>
                                                <option>2002</option>
                                                <option>2003</option>
                                                <option>2004</option>
                                                <option>2005</option>
                                                <option>2006</option>
                                                <option>2007</option>
                                                <option>2008</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" v-bind:class="{loading:status.isProcessing}" v-on:click="update">
                                 <span class="btn-label"> Save Changes</span>
                                <div class="loadmore">
                                        <span>Updating</span>
                                        <span class="spinner"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

</template>

<script>

var localstore  = require('../../../utility/cookieStorage.js'); 
var client = require('../../../Utility/serverClient.js')
var axios;

export default {
    data(){
        return{
            u_imageUrl:'',
            u_defaultImgText:'',
            u_fullname:'',
            u_role:'',
            u_bio:'',
            u_country:'',
            u_state:'',
            u_year:2000,
            u_month:1,
            u_day:1,
            status:{isProcessing:false}
        }
    },

    props:{
        imageUrl:String,
        defaultImg:String,
        fullname:String,
        role:String,
        about:String,
        country:String,
        state:String,
    },

    methods: {

        update: function(){
            
            var vueInstance = this;
            var id = localstore.getdata('auth').id;
            
            let url = `/api/contributor/${id}/update_profile`;
            var data = {
                    fullName: this.u_fullname,
                    bio: this.u_bio,
                    role:this.u_role,
                    country: this.u_country,
                    state: this.u_state,
                    picture: this.u_imageUrl
                }

                console.log(data);
               this.status.isProcessing= true;
          
            axios.post(url,data).then(resp=>{
               
                if(resp.statusText == 'OK'){
                    let ContributorInfo = localstore.getdata('user-detail');
                    ContributorInfo.fullname = vueInstance.u_fullname;
                    ContributorInfo.bio = vueInstance.u_bio;
                    ContributorInfo.roleExpereience = vueInstance.u_role;
                    ContributorInfo.country = vueInstance.u_country;
                    ContributorInfo.state = vueInstance.u_state;
                    localstore.storeUserData('user-detail',ContributorInfo);   
                    vueInstance.$emit('update-info',ContributorInfo);
                   // vueInstance.updateUserData();   
                }

                 vueInstance.status.isProcessing = false;
                 $("#update_profile").modal('toggle');
                 
                 

            }).catch(err=>{
                 vueInstance.status.isProcessing = false;
            }) 

        },

        imgPreview : function(event){

             var vueInstance = this;
              var input = event.target;
              if (input.files && input.files[0]) {
                      var reader = new FileReader();
                      reader.onload = (e) => {
                    this.u_imageUrl = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
              }
         },

       
      updateUserData : function(){

            var vueInstance = this;
            var id = localstore.getdata('auth').id;
            var url ='/api/contributor/'+ id +'/profile'
                            axion.get(url).then(function(res){
                                
                                if(res.statusText=='OK' && res.data.status=="success" ){
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
                                        state:'',
                                        country:'',
                                        rating:r.averageRating,
                                        username:r.username
                                    };

                                    localstore.storeUserData('user-detail',user_data);   
                                     vueInstance.$emit('update-info',user_data)
                                }
                                

                            }).catch(function(err){

                            })   

        } 

        

     
    },


    mounted: function(){

        this.u_imageUrl = this.imageUrl;
        this.u_defaultImgText = this.defaultImg
        this.u_fullname= this.fullname;
        this.u_role = this.role;
        this.u_bio = this.about;
        this.u_country = this.country;
        this.u_state = this.state;
        axios = client();
    }
}
</script>




