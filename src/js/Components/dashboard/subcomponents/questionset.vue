<template>
    <article class="card_item">
                                    <div class="card_wrapper">
                                        <div class="card_item_row header_row">
                                            <div class="productInfo">
                                                <figure class="productThumb">
                                                    <div class="productImage bg__inverse">
                                                        <i class="productInitials color__white">L</i>
                                                    </div>
                                                </figure>
                                                <div class="productDetails">
                                                    <h4 class="productName">{{title}}</h4>
                                                    <div class="productMeta">
                                                        <div class="metaItem">
                                                            <span class="metaValue">SSS3</span>
                                                        </div>
                                                        <div class="metaItem">
                                                            <span class="metaValue">{{subject}}</span>
                                                        </div>
                                                        <div class="metaItem">
                                                            <span class="metaValue">
                                                                <span class="currency naira">
                                                                    {{price}}
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
                                                    <img src="../../../../img/icons/question_mark.svg" alt="Questions in set">
                                                </div>
                                                <div class="snipInfo">
                                                    <span class="snipTitle">Questions</span>
                                                    <span class="snipValue">{{questionsCount}}</span>
                                                </div>
                                            </div>
                                            <div class="snipItem">
                                                <div class="snipIcon">
                                                    <img src="../../../../img/icons/feedback_icon.svg" alt="Feedbacks Received">
                                                </div>
                                                <div class="snipInfo">
                                                    <span class="snipTitle">Feedbacks</span>
                                                    <span class="snipValue">10</span>
                                                </div>
                                            </div>
                                            <div class="snipItem">
                                                <div class="snipIcon">
                                                    <img src="../../../../img/icons/sold_icon.svg" alt="Units Sold">
                                                </div>
                                                <div class="snipInfo">
                                                    <span class="snipTitle">Sold</span>
                                                    <span class="snipValue">1.8K</span>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="question_set_details.html" class="card_link"></a>
                                    </div>
                                </article>
</template>
<script>
export default {
    props:['id','title','questionsCount', 'authorName', 'performanceScore','description','authorBio','authorId','image','price','subject']
}
</script>

