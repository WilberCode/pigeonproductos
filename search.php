<?php get_header();?>
<div class="msearch">
    <div class="bg-gray-200 py-10">
        <div class="container">
            <div  class="max-w-5xl m-auto" ><?php get_search_form(true);?></div>
        </div>
    </div>
	<div class="container"> 
		<div class="max-w-5xl m-auto ">
        <h1 class="mt-8 mb-4 text-4xl  ">Los resultados para la busqueda
			<b>
				<?php echo  get_search_query();?>
			</b> son:
		</h1>
		<div class="msearch-posts  ">
			<?php if(have_posts()):
					while(have_posts()):  the_post(); ?>  
						<a  href="<?php the_permalink();?>" class="grid grid-cols-3 mb-5 shadow-lg hover:underline bg-white rounded-2xl overflow-hidden ">
							<?php if(thumbnail_image_url('full')){  ?> 
                     <figure  class=" col-span-1 m-0 " >
                          <img  class="block  w-full "  src="<?php echo thumbnail_image_url('full'); ?>" alt="">
                    </figure>
                      <div class=" col-span-2  flex justify-start items-center py-5 px-8 "> 
                        <h3   class=" text-[17px] sm:text-[18px]   ">  
                            <?php the_title(); ?> 
                        </h3>
                      </div> 
							<?php }else{	?>
								<h3   class=" flex justify-center items-center py-5 px-8 text-[17px] sm:text-[18px] col-span-3 text-black  ">  
								 <?php the_title(); ?> 
								</h3>
							<?php }?>
						</a>  
			<?php endwhile;  ?>
			<div class="search-navigation mb-4">
				<?php echo paginate_links();?>
			</div>
			<?php else:?>
			<div class="msearch-not mb-6">
				<h2 class="m-0">No se han encontrado resultados.</h2>
				<p class="text-sm m-0 text-secondary-400 ">Prueba con otras palabras clave.</p>
			</div>
			<?php endif;
                        rewind_posts();  
                        ?> 
		</div>
        </div>
	</div>
</div>
<?php get_footer();
