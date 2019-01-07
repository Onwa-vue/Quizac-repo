<template>
<div>

    <div class="modal fade" id="new_cat_dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps">Add your class</h4>
                    <button type="button" class="close_dialog" data-dismiss="modal" ></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label">Category Name</label>
                            <input type="text" class="form-control" placeholder="Name of your class">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Wikipedia Link</label>
                            <input type="url" class="form-control" placeholder="Link to the class's wikipedia page">
                        </div>
                        <div class="numbered_row_item">
                            <div class="row_content">
                                <header class="row_header">
                                    <span class="control-label">How would you categorize your class?</span>
                                </header>
                                <div class="form-group">
                                    <div class="radio">
                                        <label for="class_cat_basic" class="control_flex">
                                            <input type="radio" id="class_cat_basic" class="form_ind" name="class_cat">
                                            <div class="form_info_block">
                                                <span class="label_title color-black caps_upper">Basic</span>
                                                <span class="label_info">Applicable to students within the ages (3 &amp; 12). Includes nursery, primary, and junior secondary classes.</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label for="class_cat_intermediate" class="control_flex">
                                            <input type="radio" id="class_cat_intermediate" class="form_ind" name="class_cat">
                                            <div class="form_info_block">
                                                <span class="label_title color-black caps_upper">Intermediate</span>
                                                <span class="label_info">Applicable to students within the age of (13 &amp; 18). Includes senior secondary and college classes.</span>
                                            </div>
                                        </label>
                                    </div>
                                    <div class="radio">
                                        <label for="class_cat_adv" class="control_flex">
                                            <input type="radio" id="class_cat_adv" class="form_ind" name="class_cat">
                                            <div class="form_info_block">
                                                <span class="label_title color-black caps_upper">Advanced</span>
                                                <span class="label_info">Applicable to students within the age of (19 above). Includes University and Post graduate degree classes.</span>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-primary">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>

     <div class="modal fade" id="new_subject_dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps">Add Subject</h4>
                    <button type="button" class="close_dialog" data-dismiss="modal" ></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label">Subject Name</label>
                            <input type="text" class="form-control" placeholder="E.g Biology">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Resource URL</label>
                            <input type="url" class="form-control" placeholder="Link for more information">
                            <p class="help-block">URL for any website that gives more information about the subject.</p>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Short description</label>
                            <textarea rows="10" class="form-control" placeholder="A short description of the subject"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Subject Thumbnail</label>
                            <div class="media_block">
                                <div class="media_block_item">
                                    <figure class="tile_image">
                                        <div class="image_wrapper">
                                            <label for="upload_imgs" class="upload_btn" title="Change subject thumbnail">
                                                <input type="file" accept=".png, .jpg, .jpeg" name="file" id="upload_imgs" hidden class="inputfile"/>
                                                <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <polygon points="20 9 11 9 11 0 9 0 9 9 0 9 0 11 9 11 9 20 11 20 11 11 20 11 20 9"/>
                                                </svg>
                                            </label>
                                            <img src="../../../img/banners/subject_default.png" alt="Add subject thumbnail">
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-primary">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>

    <main class="main_content_wrapper">
        <nav class="wizard_nav">
            <div class="container">
                <ul class="step_nav text-center">
                    <li class="step_nav_item" v-bind:class="{active:stage_one_status()}">
                        <router-link to="/onboarding/">
                       <!-- <a href="onboard_form_1.html"> 
                            <span class="step_icon">
                                <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18.39">
                                    <path class="cls-1" d="M17.3,17.11,17.06,17h0a2.74,2.74,0,0,1-.58.16.32.32,0,0,1-.06.09l.08,0a.34.34,0,0,1-.26.11H15.7l-.06.25h0l0,.19-.2,0-.29-.07h0l-.19,0,0-.19h0l0-.09H1.17a.35.35,0,0,1-.24-.16.36.36,0,0,1,0-.27l.82-2.86A4,4,0,0,1,4.5,11.39h.24a.25.25,0,0,1,.22.08,4.39,4.39,0,0,0,3.73,1.37,4.39,4.39,0,0,0,3.68-1.45.25.25,0,0,1,.21,0h.24a4,4,0,0,1,.51.18l0,0a4,4,0,0,1,.77.43l-.12-.2-.11-.17.16-.1h0l.39-.24A4.56,4.56,0,0,0,14,11a4.76,4.76,0,0,0-1.07-.4h-.24a1,1,0,0,0-1,.31A3.7,3.7,0,0,1,8.6,12,3.7,3.7,0,0,1,5.49,11a1,1,0,0,0-1-.31H4.25a4.85,4.85,0,0,0-2.85,2.1,3.75,3.75,0,0,1-.24.6c-.12.27-.25.54-.27.6L0,16.84a1.14,1.14,0,0,0,1.14,1.39H16l.09-.41h0l0-.15h.16l.17,0,.13,0h0l.09,0h0l.08,0,.11,0,.15,0,.08.13,0,0a1.13,1.13,0,0,0,.17-.57h0Z"/>
                                    <path class="cls-1" d="M8.79,0A4.4,4.4,0,0,0,5.1,2a5.85,5.85,0,0,0-.38.71,4.56,4.56,0,0,0-.35,1.72c0,3.35,2,6.18,4.42,6.18s4.42-2.88,4.42-6.18A4.42,4.42,0,0,0,8.81,0h0ZM5.57,2.79V2.63A3.57,3.57,0,0,1,8.79.79a3.65,3.65,0,0,1,3.42,2.55,1.83,1.83,0,0,1-1.83-.73.39.39,0,0,0-.54-.08h0a.33.33,0,0,0-.11.18h0C9.17,3.79,7.32,4.3,5.24,3.85a4.09,4.09,0,0,1,.3-1.14Zm3.22,7c-1.86,0-3.42-2.28-3.61-5.07a7.9,7.9,0,0,0,1.48.14,4.2,4.2,0,0,0,3.52-1.42,2.61,2.61,0,0,0,1.72.66,2.07,2.07,0,0,0,.48,0,1.91,1.91,0,0,1,0,.33C12.43,7.3,10.73,9.83,8.79,9.83Z"/>
                                    <path class="cls-2" d="M14.76,11.72a.2.2,0,0,0,.24.08Zm0,0a.2.2,0,0,0,.24.08Zm0,0a.2.2,0,0,0,.24.08Zm5.08,2.76-.4-.09a.2.2,0,0,1-.16-.19,3.24,3.24,0,0,0-.11-.62.21.21,0,0,1,.09-.23l.35-.22a.2.2,0,0,0,.06-.28l-.63-1a.2.2,0,0,0-.28-.07l-.35.22a.2.2,0,0,1-.25,0,3.26,3.26,0,0,0-.51-.37.21.21,0,0,1-.1-.23l.09-.41a.2.2,0,0,0-.15-.25l-1.16-.27a.21.21,0,0,0-.25.15L16,11a.21.21,0,0,1-.19.16,3.24,3.24,0,0,0-.62.1.21.21,0,0,1-.23-.09l-.22-.35a.2.2,0,0,0-.28-.06L14,11l-.57.36a.2.2,0,0,0-.09.19.19.19,0,0,0,0,.09l.22.36a.21.21,0,0,1,0,.25,3.27,3.27,0,0,0-.37.51.21.21,0,0,1-.23.1l-.41-.09a.2.2,0,0,0-.25.15l-.27,1.16a.2.2,0,0,0,.15.25l.41.09a.2.2,0,0,1,.16.19,3.33,3.33,0,0,0,.11.62.21.21,0,0,1-.09.23l-.35.22a.2.2,0,0,0-.06.28L13,17a.21.21,0,0,0,.28.07l.35-.22a.21.21,0,0,1,.25,0,3.25,3.25,0,0,0,.65.44l0,.13-.1.43a.2.2,0,0,0,.15.24l.5.12.66.15a.21.21,0,0,0,.25-.15l.09-.41h0l0-.15h.16l.17,0,.13,0h0l.09,0h0l.08,0,.11,0,.15,0,.08.13,0,0,.2.31a.2.2,0,0,0,.28.07l1-.63a.2.2,0,0,0,.06-.28l-.22-.35a.21.21,0,0,1,0-.25,3.27,3.27,0,0,0,.37-.51.21.21,0,0,1,.23-.1l.4.09a.21.21,0,0,0,.25-.15L20,14.73A.2.2,0,0,0,19.84,14.48Zm-.38.58-.07.29a.2.2,0,0,1-.25.15l-.31-.07a.2.2,0,0,0-.23.12h0a2.78,2.78,0,0,1-.65.91h0a.21.21,0,0,0,0,.26l.17.27a.2.2,0,0,1-.06.28l-.25.16a.2.2,0,0,1-.28-.06l-.17-.27h0a.2.2,0,0,0-.24-.08h0a2.74,2.74,0,0,1-.58.16,2.68,2.68,0,0,1-.52,0h0a.21.21,0,0,0-.21.16v.06l-.06.25h0l0,.19-.2,0-.29-.07h0l-.19,0,0-.19h0l0-.09,0-.22a.2.2,0,0,0-.12-.23h0a2.77,2.77,0,0,1-.92-.65h0a.2.2,0,0,0-.26,0l-.27.17a.2.2,0,0,1-.28-.07L13,16.14a.2.2,0,0,1,.07-.28l.27-.17a.2.2,0,0,0,.08-.25h0a2.83,2.83,0,0,1-.19-1.11h0a.2.2,0,0,0-.16-.21L12.75,14a.2.2,0,0,1-.15-.25l.07-.29a.2.2,0,0,1,.25-.15l.31.07a.2.2,0,0,0,.23-.12h0a2.8,2.8,0,0,1,.66-.92h0a.2.2,0,0,0,0-.26l0-.07-.12-.2-.11-.17.16-.1h0l.39-.24,0,0,0,.08.23.37a.2.2,0,0,0,.24.08h0l0,0a2.76,2.76,0,0,1,1.06-.17h0a.2.2,0,0,0,.21-.16l.07-.31a.2.2,0,0,1,.25-.15l.29.07a.2.2,0,0,1,.15.25l-.07.31a.2.2,0,0,0,.12.23h0a2.83,2.83,0,0,1,.92.66h0a.21.21,0,0,0,.26,0l.27-.17a.2.2,0,0,1,.28.06l.16.25A.2.2,0,0,1,19,13l-.27.17a.21.21,0,0,0-.08.25h0a2.83,2.83,0,0,1,.19,1.11h0a.21.21,0,0,0,.16.21l.31.07A.2.2,0,0,1,19.46,15.06Zm-4.7-3.34a.2.2,0,0,0,.24.08Zm0,0a.2.2,0,0,0,.24.08Z"/>
                                    <path class="cls-2" d="M16,12.32a2.16,2.16,0,0,0-.43,0,2.07,2.07,0,0,0-.76.33A2.1,2.1,0,0,0,16,16.52l.3,0a2.1,2.1,0,0,0-.3-4.17ZM17,15.77a1.64,1.64,0,0,1-.77.29h0a1.65,1.65,0,1,1-.31-3.29,1.56,1.56,0,0,1,.43,0,1.65,1.65,0,0,1,.66,3Z"/>
                                </svg>
                            </span> -->
                            <span class="step_label" title="Configureation">Account Configuration</span>
                      <!--  </a> -->
                        </router-link>
                    </li>
                    <li class="step_nav_item"  v-bind:class="{active:stage_two_status()}">
                        <router-link to="/onboarding/stagetwo">
                      <!--  <a href="onboard_form_2.html"> 
                            <span class="step_icon">
                                <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18">
                                    <path d="M18.67,0H3.33A1.33,1.33,0,0,0,2,1.33V12H.33a.33.33,0,0,0-.33.33,1.33,1.33,0,0,0,1.33,1.33H11v4a.33.33,0,0,0,.57.24l1.76-1.76L15.1,17.9a.33.33,0,0,0,.24.1l.13,0a.33.33,0,0,0,.21-.31v-4h1A1.33,1.33,0,0,0,18,12.33V1.67h1.67A.33.33,0,0,0,20,1.33,1.33,1.33,0,0,0,18.67,0ZM17.33,1.33V12H16v.67h1.24a.67.67,0,0,1-.58.33h-1v-.33H15v4.2l-1.43-1.43a.33.33,0,0,0-.47,0l-1.43,1.43v-4.2H11V13H1.33a.67.67,0,0,1-.58-.33h9.91V12h-8V1.33A.67.67,0,0,1,3.33.67H17.52A1.32,1.32,0,0,0,17.33,1.33ZM18.09,1a.67.67,0,0,1,1.15,0Z"/>
                                    <path d="M16.48,10.43,16,9.67l.43-.76a.33.33,0,0,0-.13-.45h0l-.8-.36-.1-.87a.33.33,0,0,0-.37-.29h0l-.86.17-.59-.64a.34.34,0,0,0-.49,0h0l-.59.64-.86-.17a.33.33,0,0,0-.39.26v0l-.1.87-.8.36a.33.33,0,0,0-.16.44v0l.43.76-.43.76a.33.33,0,0,0,.13.45h0l.8.37.1.87a.33.33,0,0,0,.37.29h0l.86-.17.59.64a.33.33,0,0,0,.47,0l0,0,.59-.64.86.17a.33.33,0,0,0,.26-.06.33.33,0,0,0,.13-.23l.1-.87.8-.37a.33.33,0,0,0,.16-.44Zm-1.1-.6.34.61-.64.29a.33.33,0,0,0-.19.26l-.08.7-.69-.14a.33.33,0,0,0-.31.1l-.48.52-.48-.52a.33.33,0,0,0-.24-.11h-.06l-.69.14-.08-.7a.33.33,0,0,0-.19-.26l-.64-.29.34-.61a.33.33,0,0,0,0-.33h0l-.34-.61.64-.29a.33.33,0,0,0,.19-.26l.08-.7.69.14a.33.33,0,0,0,.31-.1l.48-.52.48.52a.33.33,0,0,0,.31.1l.69-.14.08.7a.33.33,0,0,0,.19.26l.64.29-.34.61A.33.33,0,0,0,15.38,9.83Z"/>
                                    <path d="M13.33,8A1.67,1.67,0,1,0,15,9.67,1.67,1.67,0,0,0,13.33,8Zm0,2.67a1,1,0,1,1,1-1A1,1,0,0,1,13.33,10.67Z"/>
                                    <rect x="7.33" y="2" width="5.33" height="0.67"/>
                                    <rect x="4" y="4" width="12" height="0.67"/>
                                    <rect x="4" y="5.33" width="12" height="0.67"/>
                                    <rect x="4.33" y="9.67" width="4.33" height="0.67"/>
                                </svg>
                            </span> -->
                            <span class="step_label" title="Professional Qualification">Professional Qualification</span>
                      <!--  </a> -->
                       </router-link>
                    </li>
                </ul>
            </div>
        </nav>


    

         <router-view></router-view>


 </main>
 
</div>
</template>

<script>
export default {

    methods:{
        stage_one_status: function(){
           var pth = this.$route.path;
            return  !pth.includes('stagetwo');
        },

        stage_two_status : function(){
            var pth = this.$route.path;
             return pth.includes('stagetwo');
        }
    }
}
</script>


