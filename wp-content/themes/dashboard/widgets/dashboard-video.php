<?php $template_dir = get_template_directory_uri(); ?>
<amp-carousel id="custom-button" height="85" layout="fixed-height" type="carousel">
    <?php
    $args = array(
        'post_type' => 'video',
        'cat' => get_queried_object()->term_id
    );
    $video = get_posts($args);
    $cat = get_queried_object()->term_id;
    ?>
    <?php
    foreach ($video as $val) {
        $title = $val->post_title;
        $description = $val->post_content;
        $url = get_field('video_file', $val);
        $thumbnail = get_the_post_thumbnail_url($val, "thumbnail");
        ?>
        <div class="vsl-container">
            <div class="vsl-new" style="visibility:<?php newPost($val->ID) ?>"></div>
            <div class="vsl-content">
                <a href="#" class='v-player' onclick="openModal('video',<?php echo $val->ID; ?>,'<?php echo $title; ?>')">
                    <div class="infinite">
                        <div class="pace pace-active">
                            <div class="pace-activity" style="display: block;"></div>
                        </div>
                    </div>
                    <amp-img src="<?php echo $thumbnail; ?>" alt=""></amp-img>
                </a>
            </div>
        </div>
    <?php } ?>
</amp-carousel>