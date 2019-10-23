<?php
/* Getting link post type array */
$links = getPostArray('link', get_queried_object()->term_id);
$link = get_field('link_details', $links[0]);

?>
<div class="social">
    <?php
    if(!empty($links)){
    foreach ($link as $val) { ?>
        <a class="social-icon" data-tooltip="LinkedIn" href="<?php echo $val['link']; ?>">
            <i class="fa <?php echo $val['link_icon']; ?>" aria-hidden="true"></i>
        </a>
    <?php } }?>
</div>