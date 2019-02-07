<template>
    <div class="cm_page_body_main">
                        <div class="cm_page_body_wrapper">
                            <div class="alert alert_scondary hidden">
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
                                        <select class="form-control sel_multiple selectized" placeholder="Select countries" multiple="multiple" tabindex="-1" style="display: none;"><option value="Nigeria" selected="selected">Nigeria</option><option value="United Kingdom" selected="selected">United Kingdom</option><option value="United States of America" selected="selected">United States of America</option><option value="Congo" selected="selected">Congo</option></select><div class="selectize-control form-control sel_multiple multi"><div class="selectize-input items not-full has-options has-items"><div class="item" data-value="Nigeria">Nigeria</div><div class="item" data-value="United Kingdom">United Kingdom</div><div class="item" data-value="United States of America">United States of America</div><div class="item" data-value="Congo">Congo</div><input type="select-multiple" autocomplete="off" tabindex="" style="width: 4px;"></div><div class="selectize-dropdown multi form-control sel_multiple" style="display: none; width: 730px; top: 45px; left: 0px;"><div class="selectize-dropdown-content"></div></div></div>
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
                                    <div class="form-group">
                                       <h4 class="form_row_title">Your class categories</h4>
                                        <select class="form-control sel_multiple selectized" placeholder="Select your class(es) of interest" multiple="multiple" tabindex="-1" style="display: none;"><option value="Primary 1" selected="selected">Primary 1</option><option value="Primary 2" selected="selected">Primary 2</option><option value="Primary 3" selected="selected">Primary 3</option></select><div class="selectize-control form-control sel_multiple multi"><div class="selectize-input items not-full has-options has-items"><div class="item" data-value="Primary 1">Primary 1</div><div class="item" data-value="Primary 2">Primary 2</div><div class="item" data-value="Primary 3">Primary 3</div><input type="select-multiple" autocomplete="off" tabindex="" style="width: 4px;"></div><div class="selectize-dropdown multi form-control sel_multiple" style="display: none; width: 730px; top: 45px; left: 0px;"><div class="selectize-dropdown-content"></div></div></div>
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
                                    <div class="form-group">
                                        <h4 class="form_row_title">Your Subjects</h4>
                                        <select class="form-control sel_multiple selectized" placeholder="Select your subjects of interest" multiple="multiple" tabindex="-1" style="display: none;"><option value="Integrated Science" selected="selected">Integrated Science</option><option value="Introductory Technology" selected="selected">Introductory Technology</option></select><div class="selectize-control form-control sel_multiple multi"><div class="selectize-input items not-full has-options has-items"><div class="item" data-value="Integrated Science">Integrated Science</div><div class="item" data-value="Introductory Technology">Introductory Technology</div><input type="select-multiple" autocomplete="off" tabindex="" style="width: 4px;"></div><div class="selectize-dropdown multi form-control sel_multiple" style="display: none; width: 730px; top: 45px; left: 0px;"><div class="selectize-dropdown-content"></div></div></div>
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
                                    <button type="submit" class="btn btn-primary">Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
</template>
<script>
export default {
    
}
</script>

