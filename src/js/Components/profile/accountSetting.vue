<template>
    <div class="cm_page_body_main">
                        <div class="cm_page_body_wrapper">
                            <!--SHow the alert after inviting a user and returning to this page.-->
                            <div class="alert alert_scondary hidden">
                                <div class="extra_info">
                                    <div class="alert_icon">
                                        <span class="cust_icon icon_info"></span>
                                    </div>
                                    <div class="alert_info">
                                        <p>Your password has been successfully changed</p>
                                    </div>
                                </div>
                            </div>
                       
                            <header class="cm_page_header sr-only">
                                <div class="cm_header_title">
                                    <h2 class="info_title font-bold">Account Settings</h2>
                                </div>
                                <div class="cm_action_primary">
                                </div>
                            </header>
                            
                            <div class="content_inner">
                                <div class="form_body">
                                    <header class="section_header">
                                        <h3 class="info_title caps_upper">Change Password</h3>
                                    </header>
                                    <form action="">
                                        <div class="form_row_group row">
                                            <div class="form_group_item col-md-4">
                                                <label class="control-label caps_upper font-regular">Current Password
                                            </label></div>
                                            <div class="form_group_item col-md-8">
                                                <input type="password" class="form-control" placeholder="Enter your current password">
                                            <p class="help-block hidden text-error">Please provide your current password</p>
                                            </div>
                                        </div>
                                        <div class="form_row_group row">
                                            <div class="form_group_item col-md-4">
                                                <label class="control-label caps_upper font-regular">New Password</label>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <input type="password" class="form-control" placeholder="Enter the new password">
                                                <p class="help-block hidden text-error">New Password is required</p>
                                            </div>
                                        </div>
                                        <div class="form_row_group row">
                                            <div class="form_group_item col-md-4">
                                                <label class="control-label caps_upper font-regular">Confirm New Password</label>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <input type="password" class="form-control" placeholder="Enter the new password again">
                                                <p class="help-block hidden text-error">Please confirm your password</p>    
                                            </div>
                                        </div>
                                        <div class="form_row_group row">
                                            <div class="form_group_item col-md-4">
                                                <h4 class="sr-only">Submit</h4>
                                            </div>
                                            <div class="form_group_item col-md-8">
                                                <button type="submit" class="btn btn-primary">Change Password</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <hr>
                                <div class="form_body">
                                    <h3 class="info_title caps_upper">Delete Account</h3>
                                    <p class="font-md">Click the button below to delete your Quizac contributor. This means you will no longer be able to create, and push question contents to students through the Quizac platform.</p>
                                    <p class="font-md margin_top_sm">This action cannot be undone</p>
                                    <div class="section_cto">
                                        <button data-target="#confirm_delete" data-toggle="modal" data-backdrop="static" class="btn btn-default">Delete my Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
</template>

<script>
export default {
    
}
</script>

