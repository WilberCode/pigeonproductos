<?php 
get_header(); ?>
  
 <div class="404 bg-body bg-opacity-40 flex-1  "> 
   <div class="container">
    <div class="text-center py-10 ">
            <h1 class=" text-[18px] sm:text-[20px] ">¡Oops!... Página no encontrada</h1>
            <p class="  max-w-2xl m-auto mt-5 sm:text-4xl">
                La página que buscas no existe, probablemente el enlace que usaste es erróneo, intenta ubicarlo en la página principal o usa el buscador:
            </p> 
            <div class="max-w-4xl m-auto mt-4">
                <?php get_search_form(true); ?>
            </div> 
            <a class=" text-4xl text-secondary-800 block mt-8 hover:underline font-semibold" href="<?php echo esc_url(home_url("/"));?>">Volver a la página principal</a>
        </div> 
   </div>
 </div>      
 <?php 
get_footer();
?>
