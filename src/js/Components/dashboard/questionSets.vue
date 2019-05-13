<template>
    <section class="section_block">
            <div class="container">
                <header class="">
                   <h3 class="section_title d-inline-block">My Question Sets</h3>
                   <span class="d-inline-block font-md color__grey_dark">0</span>
               </header>
                <div class="empty_state hidden centered">
                    <div class="def_wrapper text-center">
                        <div class="def_img">
                            <img src="../../../img/icons/create_sets.svg" alt="Create a Set">
                        </div>
                        <p>You do not have any question set yet. Start contributing by creating your first question set.</p>
                        <div class="section_cto">
                             <router-link class="btn btn-primary" to="/dashboard/questionset/new">Question Sets</router-link>
                           <!-- <a href="new_set.html" class="btn btn-primary">
                                New Question Set
                            </a> -->
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
                                       <input type="search" class="filter_search_input" placeholder="Find question set by name" title="Search for...">
                                   </label>
                               </div>
                           </form>
                       </div>
                   </nav>
                    <div class="card_list_grid row">
                        <article class="card_item new_card col-sm-6 col-md-4">
                            <router-link class="card_wrapper" to="/dashboard/questionset/new">
                           <!-- <a href="new_set.html" class="card_wrapper"> -->
                                <span class="icon_holder">
                                  <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <polygon points="20 9 11 9 11 0 9 0 9 9 0 9 0 11 9 11 9 20 11 20 11 11 20 11 20 9"></polygon>
                                    </svg>
                              </span>
                                <span class="font-md margin_top_md">Create a new Question set</span>
                           <!-- </a> -->
                            </router-link>
                        </article>

                        <article class="card_item col-sm-6 col-md-4" v-for="questionset in questionSets" v-bind:key="questionset.id" >
                            <div class="card_wrapper">
                                <div class="card_item_row header_row">
                                    <div class="productInfo">
                                        <figure class="productThumb">
                                            <div class="productImage" v-bind:style="{backgroundColor:questionset.colorCode}">
                                                <span class="productInitials">A</span>
                                            </div>
                                        </figure>
                                        <div class="productDetails">
                                            <h4 class="productName">{{questionset.title}}</h4>
                                            <div class="productMeta">
                                                <div class="metaItem">
                                                    <span class="metaValue">SSS3</span>
                                                </div>
                                                <div class="metaItem">
                                                    <span class="metaValue">{{questionset.subject}}</span>
                                                </div>
                                                <div class="metaItem">
                                                    <span class="metaValue">
                                                        <span class="currency naira">
                                                            {{questionset.price}}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card_item_row snip_row">
                                    <div class="snipItem">
                                        <div class="snipIcon">
                                            <img src="../../../img/icons/question_mark.svg" alt="Questions in set">
                                        </div>
                                        <div class="snipInfo">
                                            <span class="snipTitle">Questions</span>
                                            <span class="snipValue">{{questionset.questionsCount}}</span>
                                        </div>
                                    </div>
                                    <div class="snipItem">
                                        <div class="snipIcon">
                                            <img src="../../../img/icons/feedback_icon.svg" alt="Feedbacks Received">
                                        </div>
                                        <div class="snipInfo">
                                            <span class="snipTitle">Feedbacks</span>
                                            <span class="snipValue">12</span>
                                        </div>
                                    </div>
                                    <div class="snipItem">
                                        <div class="snipIcon">
                                            <img src="../../../img/icons/sold_icon.svg" alt="Units Sold">
                                        </div>
                                        <div class="snipInfo">
                                            <span class="snipTitle">Sold</span>
                                            <span class="snipValue">1.2K</span>
                                        </div>
                                    </div>
                                </div>
                                <a class="card_link" v-on:click="questionDetail(questionset)"></a>
                            </div>
                        </article>
                    </div>

                    <div class="section_cto text-center pager">
                        <button type="button" class="btn btn-primary" v-on:click="loadMore" v-if="showLoadMore" v-bind:class="{loading:isProcessing}" >
                            <span class="btn-label">Load More</span>
                            <div class="loadmore"><span>Processing</span> <span class="spinner"></span></div>
                        </button>
                    </div>

                </div>
            </div>
        </section>
</template>

<script>

var client = require('../../Utility/serverClient.js')
var localstore  = require('../../utility/cookieStorage.js'); 
var axios = require('../../Utility/serverRequestUtil.js')
var page = 0;
var pageCount = 17;

export default {
    data(){
        return {
             questionSets:[],
             showLoadMore:false,
             isProcessing:false
        }
    },

     methods: {
        loadPage : function(){

            var vueInstance = this;
            var contributor_id = localstore.getdata('auth').id;
            this.isProcessing = true;
            axios.get('api/contributor/'+ contributor_id + '/question_sets/'+ page+'/'+ pageCount).then(function(resp){
                if(resp.status==200){
                    resp.data.forEach(function(q){
                        vueInstance.questionSets.push({
                            id: q.id,
                            title: q.title,
                            questionsCount:q.questionsCount,
                            authorName:q.authorName,
                            performanceScore: q.performanceScore,
                            description:q.description,
                            authorBio: q.authorBio,
                            authorId : q.authorId,
                            image : q.image,
                            price : q.price,
                            subject : q.subject!=null? q.subject.name:'',
                            colorCode:q.colorCode
                        });
                    })     
                    
                    if(resp.data.length == pageCount){
                         vueInstance.showLoadMore = true;
                    }
                    else{
                         vueInstance.showLoadMore = false;
                    }
                }
               vueInstance.isProcessing = false;
            }).catch(err =>{
                
            })
        },

        loadMore: function(){
                ++ page;
                this.loadPage();
        },
        questionDetail: function(q){
            this.$router.push({name:'questionSetVersions', params:{questionsetId:q.id}})
        }
    },
    created: function(){
        this.loadPage(); 
    }
}
</script>

