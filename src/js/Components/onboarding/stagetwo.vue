<template>
   <section class="section_block">
            <div class="container content_narrow">
                <header class="section_header">
                    <h3 class="section_title">Professional Qualification</h3>
                    <p class="font-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non fugit sunt provident rem exercitationem obcaecati sit ex ullam nemo ducimus pariatur ipsum, vero dolor aliquid modi consequuntur velit! Quo, quibusdam!</p>
                </header>
                
                <div class="form_body">
                    <form action="" class="numbered_row_list">
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="question_text">Which of the following best describe you? <span>{{ errors.first('user_role') }}</span></span>
                                </header>
                                <div class="form-group">
                                    <div class="radio">
                                        <label for="chk_teacher" class="control-label">
                                            <input type="radio" id="chk_teacher" value="Subject Teacher" name="user_role" v-model="role">
                                            <span>Subject Teacher</span>
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label for="chk_school" class="control-label">
                                            <input type="radio" id="chk_school" value="School Representative" name="user_role" v-model="role">
                                            <span>School Representative</span>
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label for="chk_tutor" class="control-label">
                                            <input type="radio" id="chk_tutor" value="Tutor" name="user_role" v-model="role">
                                            <span>Tutor</span>
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label for="chk_student" class="control-label">
                                            <input type="radio" id="chk_student" value="Student" name="user_role" v-model="role">
                                            <span>Student</span>
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label for="chk_others" class="control-label">
                                            <input type="radio" id="chk_others" value="Others" name="user_role" v-model="role">
                                            <span>Others</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="question_text">How many years experience do you have in the selected role?</span>
                                </header>
                                <div class="form-group">
                                    <label class="control-label sr-only">Years of Experience <span>{{ errors.first('role_experience') }}</span></label>
                                    <input type="number" class="form-control width_auto" placeholder="Years of Experience" min="1" maxlength="2" name="role_experience" v-model="roleExpereience" v-validate="'required|integer'">
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="question_text">What is your highest level of education?</span>
                                </header>
                                <div class="form-group">
                                    <label class="control-label sr-only" >Education <span>{{ errors.first('yrs_experience') }}</span></label>
                                    <select class="form-control width_auto" placeholder="Years of Experience" v-model="educationLevel" v-validate="'required'" name="yrs_experience">
                                        <option>Bachelors Degree</option>
                                        <option>Masters Degree</option>
                                        <option>College Degree</option>
                                        <option>Vocational Certification</option>
                                        <option>Post Graduate Diploma</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="question_text">What is your employment status?</span>
                                </header>
                                <div class="form-group">
                                    <label class="control-label sr-only">Employment <span>{{ errors.first('employment_status') }}</span> </label>
                                    <select class="form-control width_auto"  v-model="employmentStatus" v-validate="'required'" name="employment_status">
                                        <option>Freelancer</option>
                                        <option>Employed</option>
                                        <option>Unemployed</option>
                                        <option>Entrepreneur</option>
                                        <option>Retired</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="question_text">Please provide a link to your linked in account or Website <span class="font-sm color-grey">(Optional)</span> </span>
                                </header>
                                <div class="form-group">
                                    <label class="control-label sr-only">Paste your Url here</label>
                                    <input type="url" class="form-control" placeholder="Paste your link here" v-model="linkedInUrl">
                                </div>
                            </div>
                        </div>
                        <div class="numbered_row_item">
                           <span class="row_count"></span>
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="question_text">In not more than 500 words, tell us why you are interested in becoming a quizac contributor, and what makes you qualified.</span>
                                </header>
                                <div class="form-group">
                                    <label class="control-label sr-only">Statement of interest <span>{{ errors.first('about') }}</span></label>
                                    <textarea rows="10" class="form-control" placeholder="Tell us why you want to join us" v-model="bio" name="about" v-validate="'required'"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="submit_widget widget_fixed_bottom">
                        <div class="container content_narrow">
                            <div class="nav_flex_row">
                                <div class="nav_btn btn-prev">
                                    <a href="onboard_form_1.html" class="btn btn-default">Previous</a>
                                </div>
                                <div class="nav_btn btn-next">
                                    <button class="btn btn-primary" v-on:click="submit" v-bind:class="{loading:status.isProcessing}">
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
var axion = require('../../Utility/serverRequestUtil.js')

export default {
    data(){
        return {
            status:{isProcessing:false, text:'Submit'},
            role : null,
            roleExpereience: null,
            educationLevel: null,
            employmentStatus: null,
            linkedInUrl: null,
            bio : null
        }
    },

    methods : {

        submit : function(){
            var vueInstance = this;
            var id = localstore.getdata('auth').id;
            console.log(localstore.getdata('auth'))
            this.status.text ='Proccessing';
            this.status.isProcessing = true;
            axion.post('api/contributor/'+ id +'/update_profile',{
                role: vueInstance.role,
                roleExpereience: vueInstance.roleExpereience,
                educationLevel: vueInstance.educationLevel,
                employmentStatus : vueInstance.employmentStatus,
                linkedInUrl : vueInstance.linkedInUrl,
                bio : vueInstance.bio
            }).then(function(resp){
                if(resp.statusText=="OK" && resp.data.status=="success"){
                    localstore.storeOnboardingdata('stage2_onboarding', {status: true})
                    vueInstance.$router.push('/dashboard/verification');
                }
                 vueInstance.status.isProcessing = false;
            })
        }
    },

    mounted: function(){
       
    }

   
}
</script>

