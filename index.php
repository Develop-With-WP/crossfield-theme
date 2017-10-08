<?php

get_header(); ?>

<?php if ( have_posts() ) : ?>
	<section class="main-content">
		<?php while ( have_posts() ): the_post(); ?>
			<h1><?php the_title(); ?></h1>
			<?php the_content(); ?>
		<?php endwhile; ?>
	</section>
<?php endif; ?>

<?php get_footer();