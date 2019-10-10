<?php $template_dir = get_template_directory_uri(); ?>
<amp-carousel id="custom-button" height="85" layout="fixed-height" type="carousel" controls>
    <?php
    $args = array(
        'post_type' => 'amp_story',
        'cat' => get_queried_object()->term_id
    );
    $story = get_posts($args);
    $cat = get_queried_object()->term_id;
    ?>
    <?php
    foreach ($story as $val) {
        $url = get_the_permalink($val);
        $thumbnail = get_the_post_thumbnail_url($val, "thumbnail");
        ?>
        <div class="vsl-container">
            <div class="vsl-new" style="visibility:<?php if (newPost($val->ID)) {
                                                            echo 'show';
                                                        } else {
                                                            echo 'hidden';
                                                        } ?>"></div>
            <div class="vsl-content">
                <a href="<?php echo $url; ?>">
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