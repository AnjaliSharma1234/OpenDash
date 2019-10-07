<?php

// Featured image functionality.
function mytheme_post_thumbnails()
{
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'mytheme_post_thumbnails');

//Infinite Scroll
function wp_infinitepaginate()
{
    $type = $_POST['type'];
    if ($type == "video") {
        $v_id = $_POST['id'];
        $v_post = get_post($v_id);
        $url = get_field('video_file', $v_post);
        ?>
        <div class="vc-main-c" style="min-height:300px;min-width:400px">
            <div class="video-box" style="position:relative;">
                <amp-video autoplay src="<?php echo $url; ?>" layout="responsive" width="717" height="405" controls>
                </amp-video>
            </div>
            <div class="video-about">
                <p class="video-titile"><?php echo $v_post->post_title; ?></p>
                <p class="video-date"><?php echo $v_post->post_date; ?></p>
                <p>
                    <?php echo $v_post->post_content; ?>
                </p>
            </div>
        </div>
    <?php   } else if ($type == "podcast") {
            $pd_id = $_POST['id'];
            $pd_post = get_post($pd_id);
            $url = get_field('audio_file', $pd_post);
            ?>
        <div class="vc-main-c">
            <div class="video-box" style="position:relative;width:100%">
                <amp-audio width="auto" height="50" src="<?php echo $url; ?>">
                    <div fallback>Your browser doesn’t support HTML5 audio</div>
                </amp-audio>
            </div>
            <div class="video-about">
                <p class="video-titile"><?php echo $pd_post->post_title; ?></p>
                <p class="video-date"><?php echo $pd_post->post_date; ?></p>
                <p>
                    <?php echo $pd_post->post_content; ?>
                </p>
            </div>
        </div>

    <?php
        } else if ($type == "gallery") {
            $g_id = $_POST['id'];
            $gallery = get_post($g_id);
            $gallery_array = get_field('photos', $gallery);
            ?>
        <div class="vc-main-c">
            <div class="g-container">
                <div class="g-content">
                    <amp-carousel width="400" height="300" layout="responsive" type="slides">
                        <?php
                                foreach ($gallery_array as $val) {
                                    $url = $val['sizes']['medium'];
                                    ?>
                            <amp-img src="<?php echo $url; ?>" width="400" height="300" layout="responsive" alt=""></amp-img>
                        <?php } ?>
                    </amp-carousel>
                </div>
            </div>

            <div class="video-about">
                <p class="video-titile"><?php echo $gallery->post_title; ?></p>
                <p class="video-date"><?php echo $gallery->post_date; ?></p>
                <p>
                    <?php echo $gallery->post_content; ?>
                </p>
            </div>
        </div>
    <?php
        } else if ($type == "insight") {
            $in_id = $_POST['id'];
            $in_post = get_post($in_id);
            $description = $in_post->post_content;
            $visualiser = get_field('visualizer', $in_post);
            ?>
        <div class="chart-ajax">
            <div class="chart-div">
                <?php
                        wp_head();
                        echo $visualiser;
                        ?>
            </div>
            <div class="video-about">
                <p class="video-titile"><?php echo $in_post->post_title; ?></p>
                <p class="video-date"><?php echo $in_post->post_date; ?></p>
            </div>
        </div>
        <?php wp_footer(); ?>

    <?php
        } else if ($type == "archive") {
            $a_id = $_POST['id'];
            $a_post = get_post($a_id);
            $description = $a_post->post_content;
            $url = get_field('archive_file_url', $a_post);
            ?>
        <div class="archive-ajax">
            <div class="archive-download" style="display:none">
                <a href="#">Download
                    <i class="fa fa-download" aria-hidden="true">
                    </i>
                </a>
            </div>
            <div class="chart-div">
                <iframe src="<?php echo $url; ?>" frameborder="0" style="min-height:350px;height:100%;width:100%"></iframe>
            </div>
            <div class="video-about">
                <p class="video-titile"><?php echo $a_post->post_title; ?></p>
                <p class="video-date"><?php echo $a_post->post_date; ?></p>
            </div>
        </div>
    <?php
        } else if ($type == "live") {
            $live_id = $_POST['id'];
            $live_post = get_post($live_id);
            $description = $live_post->post_content;
            $url = get_field('webinar_url', $live_post);
            ?>
        <div class="archive-ajax">
            <div class="chart-div">
                <iframe src="<?php echo $url; ?>" frameborder="0" style="min-height:350px;height:100%;width:100%"></iframe>
            </div>
            <div class="video-about">
                <p class="video-titile"><?php echo $live_post->post_title; ?></p>
                <p class="video-date"><?php echo $live_post->post_date; ?></p>
            </div>
        </div>
<?php
    }
    die();
}
add_action('wp_ajax_infinite_scroll', 'wp_infinitepaginate'); // for logged in user
add_action('wp_ajax_nopriv_infinite_scroll', 'wp_infinitepaginate'); // if user not logged in



function updateRestoreId()
{
    $id = $_POST['id'];
    $restore_id = $_POST['restore_id'];
    echo $restore_id;
    // update user - setting new email and surname
    global $pc_users;
    $data = array(
        'surname'     => $restore_id
    );
    $result = $pc_users->update_user($id, $data);
    if (!$result) {
        // an error occurred - check related properties  
        return http_response_code(401);
    } else {
        // success
        return http_response_code(201);
    }
    die();
}
add_action('wp_ajax_update_restore_id', 'updateRestoreId'); // for logged in user
add_action('wp_ajax_nopriv_update_restore_id', 'updateRestoreId'); // if user not logged in
