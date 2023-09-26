
<?php <?php 
$args = array(
'post_type' => 'post', // You can change this to a custom post type if needed
'posts_per_page' => -1, // Display all posts, you can limit this number
);
$custom_query = new WP_Query($args);
if (custom_query->have_posts()) :
while ($custom_query->have_posts()) : $custom_query->the_post();
$post_terms = get_the_terms(get_the_ID(), 'category'); ?>
//ici conntenu de la boucle
<?php 
endwhile;
wp_reset_postdata();
else :
echo 'No projects found';
endif
?>