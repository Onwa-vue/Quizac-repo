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
                                        <p>Profile updated successfully</p>
                                    </div>
                                </div>
                            </div>
                       
                            <header class="cm_page_header sr-only">
                                <div class="cm_header_title">
                                    <h2 class="info_title font-bold">Personal Information</h2>
                                </div>
                                <div class="cm_action_primary">
                                </div>
                            </header>
                            <div class="content_inner">
                                <div class="heroHeader secBlock">
                                    <div class="profileBlock">
                                        <div class="userProfileThumb">
                                            <div class="user_info_avi">
                                                <!-- Bind the user image here if available -->
                                                <img  v-if="u_imageUrl !=''||u_imageUrl !=null" alt="" v-bind:src="u_imageUrl">
                                                <span class="default_avi" v-if="u_imageUrl==''|| u_imageUrl==null">{{u_defaultImg}}</span>
                                            </div>
                                            <label for="upload_imgs" class="avi_upload_button button_docked">
                                               <input type="file" accept=".png, .jpg, .jpeg" name="file" id="upload_imgs" hidden="" class="inputfile">
                                                <svg viewBox="64 64 896 896" class="cust_icon">
                                                    <path d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"></path>
                                                    <path d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 0 0-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"></path>
                                                </svg> 
                                            </label>
                                        </div>
                                        <div class="userProfileDetails">
                                           <div class="userNameInfo">
                                                <span class="fullname font-bold">{{u_fullname}}</span>
                                                <span class="username">
                                                    <time>@{{u_username}}</time>
                                                </span>
                                            </div>
                                            <p class="info_text color__grey_dark">{{u_role}}</p>
                                        </div>
                                        <div class="blockCTA">
                                            <button type="button" data-target="#update_profile" data-toggle="modal" data-backdrop="static" class="btn btn-primary">Edit Profile</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="secBlock blockPaddedVertical_sm">
                                    <div class="infoSnipRow row">
                                        <div class="col-sm-4 infoSnippet">
                                            <div class="snippetValue">
                                                <div class="ratingSummary">
                                                    <div class="rt_stars_holder">
                                                        <div class="average_rating"><div class="jq-star" style="width:24px;  height:24px;">
                                                            <!--<svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2; stroke-width:0px;" xml:space="preserve"><style type="text/css">.svg-empty-55{fill:url(#55_SVGID_1_);}.svg-hovered-55{fill:url(#55_SVGID_2_);}.svg-active-55{fill:url(#55_SVGID_3_);}.svg-rated-55{fill:crimson;}</style><linearGradient id="55_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#959595"></stop><stop offset="1" style="stop-color:#959595"></stop> </linearGradient><linearGradient id="55_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#92b0ee"></stop><stop offset="1" style="stop-color:#92b0ee"></stop> </linearGradient><linearGradient id="55_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#e36329"></stop><stop offset="1" style="stop-color:#e36329"></stop> </linearGradient><path data-side="center" class="svg-empty-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke: black; fill: transparent; "></path><path data-side="right" class="svg-active-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke-opacity: 0;"></path><path data-side="left" class="svg-active-55" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: black; stroke-opacity: 0;"></path></svg></div><div class="jq-star" style="width:24px;  height:24px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2; stroke-width:0px;" xml:space="preserve"><style type="text/css">.svg-empty-55{fill:url(#55_SVGID_1_);}.svg-hovered-55{fill:url(#55_SVGID_2_);}.svg-active-55{fill:url(#55_SVGID_3_);}.svg-rated-55{fill:crimson;}</style><linearGradient id="55_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#959595"></stop><stop offset="1" style="stop-color:#959595"></stop> </linearGradient><linearGradient id="55_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#92b0ee"></stop><stop offset="1" style="stop-color:#92b0ee"></stop> </linearGradient><linearGradient id="55_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#e36329"></stop><stop offset="1" style="stop-color:#e36329"></stop> </linearGradient><path data-side="center" class="svg-empty-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke: black; fill: transparent; "></path><path data-side="right" class="svg-active-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke-opacity: 0;"></path><path data-side="left" class="svg-active-55" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: black; stroke-opacity: 0;"></path></svg></div><div class="jq-star" style="width:24px;  height:24px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2; stroke-width:0px;" xml:space="preserve"><style type="text/css">.svg-empty-55{fill:url(#55_SVGID_1_);}.svg-hovered-55{fill:url(#55_SVGID_2_);}.svg-active-55{fill:url(#55_SVGID_3_);}.svg-rated-55{fill:crimson;}</style><linearGradient id="55_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#959595"></stop><stop offset="1" style="stop-color:#959595"></stop> </linearGradient><linearGradient id="55_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#92b0ee"></stop><stop offset="1" style="stop-color:#92b0ee"></stop> </linearGradient><linearGradient id="55_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#e36329"></stop><stop offset="1" style="stop-color:#e36329"></stop> </linearGradient><path data-side="center" class="svg-empty-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke: black; fill: transparent; "></path><path data-side="right" class="svg-active-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke-opacity: 0;"></path><path data-side="left" class="svg-active-55" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: black; stroke-opacity: 0;"></path></svg></div><div class="jq-star" style="width:24px;  height:24px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2; stroke-width:0px;" xml:space="preserve"><style type="text/css">.svg-empty-55{fill:url(#55_SVGID_1_);}.svg-hovered-55{fill:url(#55_SVGID_2_);}.svg-active-55{fill:url(#55_SVGID_3_);}.svg-rated-55{fill:crimson;}</style><linearGradient id="55_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#959595"></stop><stop offset="1" style="stop-color:#959595"></stop> </linearGradient><linearGradient id="55_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#92b0ee"></stop><stop offset="1" style="stop-color:#92b0ee"></stop> </linearGradient><linearGradient id="55_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#e36329"></stop><stop offset="1" style="stop-color:#e36329"></stop> </linearGradient><path data-side="center" class="svg-empty-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke: black; fill: transparent; "></path><path data-side="right" class="svg-empty-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke-opacity: 0;"></path><path data-side="left" class="svg-active-55" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: black; stroke-opacity: 0;"></path></svg></div><div class="jq-star" style="width:24px;  height:24px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2; stroke-width:0px;" xml:space="preserve"><style type="text/css">.svg-empty-55{fill:url(#55_SVGID_1_);}.svg-hovered-55{fill:url(#55_SVGID_2_);}.svg-active-55{fill:url(#55_SVGID_3_);}.svg-rated-55{fill:crimson;}</style><linearGradient id="55_SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#959595"></stop><stop offset="1" style="stop-color:#959595"></stop> </linearGradient><linearGradient id="55_SVGID_2_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#92b0ee"></stop><stop offset="1" style="stop-color:#92b0ee"></stop> </linearGradient><linearGradient id="55_SVGID_3_" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="500"><stop offset="0" style="stop-color:#e36329"></stop><stop offset="1" style="stop-color:#e36329"></stop> </linearGradient><path data-side="center" class="svg-empty-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke: black; fill: transparent; "></path><path data-side="right" class="svg-empty-55" d="M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z" style="stroke-opacity: 0;"></path><path data-side="left" class="svg-empty-55" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: black; stroke-opacity: 0;"></path></svg> -->
                                                        </div></div>
                                                    </div>
                                                    <span class="textValue font-bold">3.5</span>
                                                </div>
                                            </div>
                                            <div class="snippetlabel">Averatge Rating</div>
                                        </div>
                                        <div class="col-sm-4 infoSnippet">
                                            <div class="snippetValue"><span class="textValue font-bold">{{u_questionCount}}</span></div>
                                            <div class="snippetlabel">Questions Created</div>
                                        </div>
                                        <div class="col-sm-4 infoSnippet">
                                            <div class="snippetValue">
                                                <span class="textValue font-bold">{{u_location}}</span>
                                            </div>
                                            <div class="snippetlabel">Location</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="secBlock contentBlock">
                                    <h5 class="font-regular margin_bottom_md caps_upper">About Me</h5>
                                    <p>{{u_about}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
</template>

<script>
var localstore  = require('../../utility/cookieStorage.js'); 

export default {

    data(){

        return {
            u_fullname: String,
            u_role: String,
            u_username: String,
            u_imageUrl: String,
            u_defaultImg: String,
            u_averageRating: String,
            u_questionCount: String,
            u_location: String,
            u_about : String
        }
    },
   
    props:{
        fullname:String,
        role:String,
        username:String,
        imageUrl:String,
        defaultImg:String,
        averageRating:Number,
        questionCount:Number,
        country:String,
        state:String,
        about:String  
    },

    methods:{

       updateInfo: function(d){

           this.u_fullname = d.fullname;
           this.u_role = d.role;
           this.u_username = d.username;
           this.u_imageUrl = d.imageUrl;
           this.u_defaultImg = d.defaultImg;
           this.u_averageRating = d.averageRating;
           this.u_location =d.location;
           this.u_about = d.about;
           
       }
    },

    mounted: function(){
        this.$emit('set-active-class',{tab:'user-information'})
    },

    created: function(){

        this.u_fullname = this.fullname;
        this.u_role = this.role;
        this.u_username = this.username;
        this.u_imageUrl = this.imageUrl;
        this.u_defaultImg = this.defaultImg;
        this.u_averageRating = this.averageRating;
        this.u_questionCount = this.questionCount;
        this.u_location = this.state + ', ' + this.country ;
        this.u_about = this.about;
    }
}
</script>

