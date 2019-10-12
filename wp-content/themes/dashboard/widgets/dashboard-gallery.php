<amp-carousel id="custom-button" layout="fill" type="carousel">
    <?php
    $args = array(
        'post_type' => 'gallery',
        'cat' => get_queried_object()->term_id
    );
    $gallery = get_posts($args);
    $cat = get_queried_object()->term_id;
    ?>
    <?php
    foreach ($gallery as $val) {
        $title = $val->post_title;
        $description = $val->post_content;
        $url = get_field('photos', $val);
        $thumbnail = get_the_post_thumbnail_url($val, "thumbnail");
        ?>
        <div class="vsl-container">
            <div class="vsl-new" style="visibility:<?php newPost($val->ID) ?>"></div>
            <div class="vsl-content">
                <a href="#" onclick="openModal('gallery',<?php echo $val->ID; ?>,'<?php echo $title; ?>')">
                    <amp-img src="<?php echo $thumbnail; ?>" alt="" layout='fill'>
                        <div class="infinite">
                            <div class="pace pace-active">
                                <div class="pace-activity" style="display: block;"></div>
                            </div>
                        </div>
                    </amp-img>
                </a>
                <div class="video-title">
                    <span>this is title</span>
                </div>
            </div>
        </div>
    <?php } ?>
</amp-carousel>