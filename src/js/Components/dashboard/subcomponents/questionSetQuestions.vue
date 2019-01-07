<template>
    <section class="section_block">
                        <div class="container">
                           <header class="row margin_bottom_sm">
                               <div class="col-6">
                                   <h3 class="section_title d-inline-block">Questions</h3>
                                    <span class="d-inline-block font-md color__grey_dark">36</span>
                               </div>
                               <div class="col-6 text-right dropdown">
                                   <a href="#" class="btn btn-primary" data-toggle="dropdown">Add Question(s) <span class="caret"></span></a>
                                   <ul class="dropdown-menu">
                                       <li><a href="#question_upload" data-toggle="modal" data-backdrop="static">Document Upload</a></li>
                                       <li><a href="new_question_form.html">Question Form</a></li>
                                   </ul>
                               </div>
                           </header>
                           
                            <div class="alert alert_scondary">
                                <div class="extra_info">
                                    <div class="alert_icon">
                                        <span class="cust_icon icon_info"></span>
                                    </div>
                                    <div class="alert_info">
                                        <h4 class="margin_bottom_sm font-md">You have unpublished Questions</h4>
                                        <p>You need to add 4 more questions to reach the minimum of 20 questions per update required.</p>
                                    </div>
                                </div>
                            </div>
                          
                           <div class="empty_state hidden">
                                <div class="def_wrapper">
                                    <p>Your set must contain a minimum of 30 questions before it can be published. Choose any of listed options to add your questions.</p>
                                    <div class="section_cto">
                                        <a href="#question_upload" data-toggle="modal" data-backdrop="static" class="control_flex">
                                            <div class="form_info_block">
                                                <span class="label_title color__black caps_upper font-bold">Document Upload</span>
                                                <span class="label_info">Uplaod a word document containing your questions, prepared according to our question creation specifications.</span>
                                            </div>
                                        </a>
                                        <a href="new_question_form.html" class="control_flex">
                                            <div class="form_info_block">
                                                <span class="label_title color__black caps_upper font-bold">Question Form</span>
                                                <span class="label_info">Create your questions one at a time; using the questions creator form.</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="content_inner ">
                                <nav class="filter_navigation">
                                    <div class="filter_search">
                                       <form action="">
                                           <div class="search_bar_holder">
                                               <button class="search_btn">
                                                   <svg class="cust_icon" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                                                       <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
                                                           <path d="M15.364 2.636A9 9 0 1 1 2.636 15.363 9 9 0 0 1 15.364 2.636zM20 20l-5-5"></path>
                                                       </g>
                                                   </svg>
                                               </button>
                                               <label class="search_input">
                                                   <input type="search" class="filter_search_input" placeholder="Search..." title="Search for...">
                                               </label>
                                           </div>
                                       </form>
                                   </div>
                                </nav>
                                <div class="question_render">
                                    <div class="question_version_block">
                                        <header class="version_header">
                                            <a class="accordion-toggle" data-toggle="collapse" href="#version_1">
                                                <div class="collapse_stat_indicator">
                                                    <svg class="cust_icon state_icon" viewBox="0 0 24 24">
                                                        <path d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z" fill="currentColor" fill-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <h2 class="version_label">
                                                    <span>Version 1</span> - <span>10/11/2018</span> - <span>20 Questions</span>
                                                </h2>
                                                <div class="version_status">
                                                    <span class="stat_tag"></span>
                                                </div>
                                            </a>
                                        </header>
                                        <div id="version_1" class="version_items panel-collapse collapse show" style="">
                                            <div class="table table-responsive table-brand">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th><div class="text-left">Question Text</div></th>
                                                            <th><div class="text-center">Comments</div></th>
                                                            <th><div>Options</div></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        Which of the following is not an example of waves?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        What is the wavelength of a 5Hz wave traveling at the speed of 10m/s?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    15
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A rope of length 5 m is stretched to a tension of 80 N. If its mass is 1 kg, at what speed would a 10 Hz transverse wave travel down the string?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A medium is able is able to transport a wave from one location to another because the particles of the medium are
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    21
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        Which of the following is not an example of waves?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        What is the wavelength of a 5Hz wave traveling at the speed of 10m/s?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    15
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A rope of length 5 m is stretched to a tension of 80 N. If its mass is 1 kg, at what speed would a 10 Hz transverse wave travel down the string?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A medium is able is able to transport a wave from one location to another because the particles of the medium are
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    21
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        Which of the following is not an example of waves?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        What is the wavelength of a 5Hz wave traveling at the speed of 10m/s?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    15
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A rope of length 5 m is stretched to a tension of 80 N. If its mass is 1 kg, at what speed would a 10 Hz transverse wave travel down the string?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A medium is able is able to transport a wave from one location to another because the particles of the medium are
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    21
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        Which of the following is not an example of waves?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        What is the wavelength of a 5Hz wave traveling at the speed of 10m/s?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    15
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A rope of length 5 m is stretched to a tension of 80 N. If its mass is 1 kg, at what speed would a 10 Hz transverse wave travel down the string?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A medium is able is able to transport a wave from one location to another because the particles of the medium are
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    21
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="question_view.html">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="question_version_block">
                                        <header class="version_header">
                                            <a class="accordion-toggle" data-toggle="collapse" href="#version_2">
                                                <div class="collapse_stat_indicator">
                                                    <svg class="cust_icon state_icon" viewBox="0 0 24 24">
                                                        <path d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z" fill="currentColor" fill-rule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <h2 class="version_label">
                                                    <span>Version 2</span> - <span>21/11/2018</span> - <span>16 Questions</span>
                                                </h2>
                                                <div class="version_status">
                                                    <span class="stat_tag">unpublished</span>
                                                </div>
                                            </a>
                                        </header>
                                        <div id="version_2" class="version_items panel-collapse collapse show" style="">
                                            <div class="table table-responsive table-brand">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th><div class="text-left">Question Text</div></th>
                                                            <th><div class="text-center">Comments</div></th>
                                                            <th><div>Options</div></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        Which of the following is not an example of waves?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        What is the wavelength of a 5Hz wave traveling at the speed of 10m/s?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A rope of length 5 m is stretched to a tension of 80 N. If its mass is 1 kg, at what speed would a 10 Hz transverse wave travel down the string?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A medium is able is able to transport a wave from one location to another because the particles of the medium are
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        Which of the following is not an example of waves?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        What is the wavelength of a 5Hz wave traveling at the speed of 10m/s?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A rope of length 5 m is stretched to a tension of 80 N. If its mass is 1 kg, at what speed would a 10 Hz transverse wave travel down the string?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A medium is able is able to transport a wave from one location to another because the particles of the medium are
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        Which of the following is not an example of waves?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        What is the wavelength of a 5Hz wave traveling at the speed of 10m/s?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                        A rope of length 5 m is stretched to a tension of 80 N. If its mass is 1 kg, at what speed would a 10 Hz transverse wave travel down the string?
                                                                    </a>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="text-center">
                                                                    0
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div class="post_control dropdown">
                                                                    <a href="#" class="control_trigger dropdown-toggle" data-toggle="dropdown">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                            <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
                                                                        </svg>
                                                                    </a>
                                                                    <ul class="dropdown-menu">
                                                                        <li><a href="#">Edit</a></li>
                                                                        <li><a href="#">View</a></li>
                                                                        <li><a href="#">Archive</a></li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
</template>

<script>
export default {
    
}
</script>

