<template>
    <div class="modal fade" id="new_topic_dialog" style="display: none;" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps">New Topic</h4>
                    <button type="button" class="close_dialog" data-dismiss="modal"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label caps_upper">Topic Name</label>
                            <input type="text" class="form-control" placeholder="E.g Arithmetics">
                        </div>
                        <div class="form-group">
                            <label class="control-label caps_upper">Reference URL</label>
                            <input type="url" class="form-control" placeholder="Link for more information">
                            <p class="help-block">Please provide a link to any material we can use to verify this topics.</p>
                        </div>
                        <div class="form-group">
                            <label class="control-label caps_upper">Description</label>
                            <textarea rows="10" class="form-control" placeholder="Tell us a little about this topic"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label caps_upper">Assign an image as the topic thumbnail</label>
                           <div class="custom_selector">
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_0" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_0" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/Business_org.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_1" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_1" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/Demand_n_supply.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_2" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_2" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/determinals.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_3" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_3" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/Fiscal_policy.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_4" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_4" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/Hydro_carbon.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_5" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_5" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/Labor_market.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_6" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_6" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/Literature.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_7" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_7" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/Metals.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_8" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_8" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/Mole_concept.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
                                <article class="thumb_item selector_item">
                                    <label for="prd_thumb_9" class="thumb_wrapper">
                                       <input type="radio" id="prd_thumb_9" class="cst_selector" name="topic_thumbnail">
                                        <div class="thumbImage_holder">
                                            <img src="../../../../img/banners/Radioactivity.png" alt="Topic Thumb">
                                        </div>
                                    </label>
                                </article>
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
</template>
