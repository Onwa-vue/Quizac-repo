<template>
    <article class="feedback_tile">
                                    <a href="feedbacks.html" class="tile_wrapper">
                                        <div class="card_item_row feed_meta">
                                            <div class="metaType">
                                                <span class="badge badge-default">{{name}}</span>
                                            </div>
                                            <div class="metaTime">
                                                 <time datetime="09/11/2018">
                                                    Nov. 9, 2018
                                                </time>
                                            </div>
                                        </div>
                                        <div class="card_item_row">
                                            <p class="qs_text"> {{ description}} </p>
                                        </div>
                                    </a>
                                </article>
</template>

<script>
export default {
    props:['id','name','description']
}
</script>

