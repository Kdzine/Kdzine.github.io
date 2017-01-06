<?php get_header(); ?>

		<nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<a class="navbar-brand page-scroll" href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<i class="fa fa-chevron-left"></i> Back
					</a>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>
   
    <section class="row">
      <div class="small-12 columns text-center">
        <div class="leader">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <h1><?php the_title(); ?></h1>
          <p><?php the_content(); ?></p>
    <?php endwhile; else : ?>
          <p><?php _e( 'Sorry, no pages found.' ) ?></p>
    <?php endif; ?>
        </div>
      </div>
    </section>

<?php get_footer(); ?>