<template>
    <div  class="version_items panel-collapse collapse show" style="" v-bind:href="versionName">
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

                                                        <tr v-for="question in questions" v-bind:key="question.id">
                                                            <td>
                                                                <div class="table_description">
                                                                    <a href="question_view.html">
                                                                       {{question.text}}
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
                                                       
                                                    </tbody>
                                                </table>
                                                <!--Hide or remove for published versions-->
                                                <article class="post_item_thumb new_post_thumb margin_top_sm hidden">
                                                    <a href="new_question.html" class="post_thumb_wrapper justify-content-center align-items-center">
                                                        <span class="t_icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                <polygon points="20 9 11 9 11 0 9 0 9 9 0 9 0 11 9 11 9 20 11 20 11 11 20 11 20 9"></polygon>
                                                            </svg>
                                                        </span>
                                                        <span>Manage Questions</span>
                                                    </a>
                                                </article>
                                            </div>
                                        </div>
</template>

<script>
export default {
    props:{
        questions:Array,
        versionName:String
    }
}
</script>

