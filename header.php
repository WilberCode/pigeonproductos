<?php get_template_part( 'templates/partials/document-open' ); ?>
<!-- Site header markup goes here -->
 
<header id="l-header" class="l-reset is-fadeout">
    <div class="header-sp">
        <div class="sp-inner">
            <div class="inner-logo">
            <?php 
              $custom_logo_id = get_theme_mod( 'custom_logo' );
              $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );?>
              <?php if ( has_custom_logo() ) { ?> 
                <a href="https://pigeonlatam.com/" rel="home"><img src="<?php echo esc_url( $logo[0]);?>" alt="<?php bloginfo('name'); ?>"></a> 
              <?php }else{?>
              <a href="https://pigeonlatam.com/" rel="home">
                  <?php echo  '<h1 class="text-primary-500">'.get_bloginfo( "name" ).'</h1>'; ?>
              </a>
              <?php }?>
                
            </div>
            <div class="inner-btn">
                <button class="btn-menu" data-header-btn-sp>MENU</button>
            </div>
        </div>
    </div>
    <div class="headercover-sp" data-header-area-sp></div>
    <div class="headernav-sp" data-header-area-sp>
        <div class="sp-head">
            <div class="head-logo">
              <?php if ( has_custom_logo() ) { ?>
                <a href="https://pigeonlatam.com/" rel="home"><img src="<?php echo esc_url( $logo[0]);?>" alt="<?php bloginfo('name'); ?>"   ></a> 
              <?php }else{?>
                <a href="https://pigeonlatam.com/" rel="home">
                    <?php echo  '<h1 class="text-white">'.get_bloginfo( "name" ).'</h1>'; ?>
                </a>
              <?php }?>
            </div>
            <div class="head-close">
                <button class="btn-close" data-header-close-sp>CERRAR</button>
            </div>
        </div>
        <div class="sp-navs">
            <ul class="navs-tabs">
                <li><a href="https://pigeonlatam.com/sobre/lared/" class="tabs-btn btn-region" rel="noopener">Global</a></li>
                <li><button class="tabs-btn btn-search" data-header-searchbtn-sp>Buscar</button></li>
            </ul>
            <div class="navs-search" data-header-searcharea-sp>
                <form class="search-form" action="" data-search-sp>
                    <input class="search-input form-input" type="search" name="q" value="" id="MF_form_phrase"
                        autocomplete="off">
                    <button class="search-btn" type="submit">Buscar</button>
                    <input type="hidden" name="ie" value="utf8">
                </form>
            </div>
            <ul class="navs-list">
                <li>
                    <button class="list-sub" data-header-hassub-sp><span class="sub-inner">Sobre Pigeon</span></button>
                    <ul>
                        <li><a href="https://pigeonlatam.com/sobre/"><span class="link-inner">Sobre Pigeon</span></a></li>
                        <li><a href="https://pigeonlatam.com/sobre/mensaje/"><span class="link-inner">Mensaje del Presidente</span></a></li>
                        <li><a href="https://pigeonlatam.com/sobre/esenciapigeon/"><span class="link-inner">Esencia Pigeon</span></a></li>
                        <li><a href="https://pigeonlatam.com/sobre/calidad/"><span class="link-inner">Calidad Pigeon</span></a></li>
                        <li><a href="https://pigeonlatam.com/sobre/corporativa/"><span class="link-inner">Compañía</span></a></li>
                        <li><a href="https://pigeonlatam.com/sobre/historia/"><span class="link-inner">Nuestra Historia </span></a></li>
                        <li><a href="https://pigeonlatam.com/sobre/lared/"><span class="link-inner">Global Links</span></a></li>
                        <li><a href="https://www.youtube.com/embed/mHOdICE8DBk?rel=0" data-modal="youtube"
                                target="_blank" rel="noopener"><span class="link-inner">Vídeo Corporativo</span></a>
                        </li>
                        <li><a href="https://www.youtube.com/embed/mHOdICE8DBk?rel=0sss" data-modal="youtube"
                                target="_blank" rel="noopener"><span class="link-inner">Marca Pigeon </span></a></li>
                    </ul>
                </li>
                <li><a href="https://pigeonlatam.com/estira-y-compara/" rel="noopener"><span class="link-inner">Estira y Compara</span></a></li>
                <li><a href="https://pigeonlatam.com/productos/" rel="noopener"><span class="link-inner">Productos</span></a></li>
                <li><a href="https://pigeonlatam.com/linea-hospitalaria/" rel="noopener"><span class="link-inner">Línea Hospitalaria</span> </a>
                </li>
                <li> 
                  <button class="list-sub" data-header-hassub-sp><span class="sub-inner">Sostenibilidad </span></button>
							<ul>
								<li><a href="https://pigeonlatam.com/sostenibilidad/"><span class="link-inner">Sostenibilidad</span></a></li>
								<li><a href="https://pigeonlatam.com/celebrar/plantacion-de-arboles/"><span class="link-inner">Conmemoración del nacimiento de bebés</span></a></li>
								<li><a href="https://pigeonlatam.com/celebrar/enfermeria/"><span class="link-inner">Establecimientos y Apoyos de Salones de Lactancia</span></a></li>
								<li><a href="https://pigeonlatam.com/celebrar/calentamiento/"><span class="link-inner">Cambio Climático y Biodiversidad</span></a></li> 
								<li><a href="https://pigeonlatam.com/celebrar/calentamiento/"><span class="link-inner">Cambio Climático y Biodiversidad</span></a></li> 
								<li><a href="https://pigeonlatam.com/celebrar/"><span class="link-inner">Disfruta a los bebés en plena acción</span></a></li> 
							</ul>  
                </li> 
                <li><a href="https://pigeonlatam.com/tiendaslatam/" rel="noopener"><span class="link-inner">Tiendas LATAM</span></a></li>  
                <li><a href="https://pigeonlatam.com/preguntasfrecuentes/"><span class="link-inner">Preguntas Frecuentes</span></a></li>
            </ul>
        </div>
    </div>
    <div class="header-pc">
        <div class="pc-inner">
            <div class="inner-logo"> 
                <?php if ( has_custom_logo() ) { ?>
                  <a href="https://pigeonlatam.com/" rel="home"><img src="<?php echo esc_url( $logo[0]);?>" alt="<?php bloginfo('name'); ?>"></a> 
                <?php }else{?>
                  <a href="https://pigeonlatam.com/" rel="home">
                      <?php echo  '<h1 class="text-primary-500">'.get_bloginfo( "name" ).'</h1>'; ?>
                  </a>
                <?php }?>
            </div>
            <div class="inner-nav">
                <ul>
                    <li><button class="nav-btn" data-header-subbtn-pc="about"><span class="btn-dib">Sobre Pigeon</span></button></li>
                    <li><a href="https://pigeonlatam.com/estira-y-compara/" rel="noopener" class="nav-btn"><span class="btn-dib">Estira y Compara</span> </a> 
                    <li><a href="https://pigeonlatam.com/productos/" rel="noopener" class="nav-btn"><span class="btn-dib">Productos</span> </a>  </li>
                    <li><a href="https://pigeonlatam.com/linea-hospitalaria/" style="position:relative;" rel="noopener" class="nav-btn"><span
                                class="btn-dib">Línea Hospitalaria</span> 
                               <!--  <span style="position: absolute;
                                font-size: 13px;
                                border-radius: 40px;
                                background: #eee;
                                color: #8b8b8b;
                                padding: 1px 4px;
                                display: block;
                                top: -17px;
                                left:50%;
                                transform:translateX(-50%); 
                                text-align: center;
                                width: 90px;
                                line-height: 18px;">Muy Pronto</span>  -->
    
                    </a></li>
                    <li><button class="nav-btn" data-header-subbtn-pc="sustainability"><span class="btn-dib">Sostenibilidad</span></button></li>
                    <!-- <li><a href="https://pigeonlatam.com/novedades/" class="nav-btn">Novedades</a></li> --> 
                    <li><a href="https://pigeonlatam.com/tiendaslatam/" class="nav-btn">Tiendas LATAM</a></li> 
                    <li><a href="https://pigeonlatam.com/preguntasfrecuentes/" class="nav-btn">Preguntas Frecuentes</a></li>
                    <li>
                        <a href="https://pigeonlatam.com" class="nav-btn" id="open-modal" style="position:relative; cursor:pointer; "  data-header-hassub-sp> 
                        <span  class="btn-dib">Club Pigeon
                            </span><span style="position: absolute;
                            font-size: 13px;
                            border-radius: 40px;
                            background: #e65550;
                            color: white;
                            padding: 1px 4px;
                            display: block;
                            top: -17px;
                            left:50%;
                            transform:translateX(-50%); 
                            text-align: center;
                            width: 90px;
                            line-height: 18px;">Suscríbete</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="inner-icons">
                <ul> 
                    <li><a href="https://pigeonlatam.com/sobre/lared/" class="icons-btn icon-region" rel="noopener"><span
                                class="btn-txt">Global</span></a></li>
                    <li><button class="icons-btn icon-search" data-header-searchbtn-pc><span
                                class="btn-txt">Buscar</span></button></li>
                </ul>
                <div class="inner-form" data-header-searcharea-pc>
                    <form class="form-area" data-search-pc>
                        <button type="submit" class="form-btn">Buscar</button>
                        <input type="hidden" name="ie" value="utf8">
                        <input class="search-input form-input" type="search" name="q" value="" id="MF_form_phrase" autocomplete="off">
                    </form>
                </div>

            </div>
        </div>
        <div class="pc-megamenu" data-header-subarea-pc="about">
            <div class="megamenu-area">
                <div class="area-close">
                    <button class="close-btn" data-header-subclose-pc="about">close</button>
                </div>
                <div class="area-menu is-pickup">
                    <dl>
                        <dt><a href="https://pigeonlatam.com/sobre/"> Sobre Pigeon</a></dt>
                        <div class="menu-wrap">
                            <dd class="menu-inner">
                                <ul>
                                    <li><a href="https://pigeonlatam.com/sobre/mensaje/">Mensaje del Presidente</a></li>
                                    <li><a href="https://pigeonlatam.com/sobre/calidad/">Calidad Pigeon</a></li>
                                    <li><a href="https://pigeonlatam.com/sobre/esenciapigeon/">Esencia Pigeon</a></li>
                                    <li><a href="https://pigeonlatam.com/sobre/corporativa/">Compañía</a></li>
                                    <li><a href="https://pigeonlatam.com/sobre/corporativa/empresa/">Nuestra Empresa</a></li>
                                    <li><a href="https://pigeonlatam.com/sobre/historia/">Nuestra Historia</a></li>
                                </ul>
                            </dd>
                            <dd class="menu-pickup">
                                <ul class="pickup-list">
                                    <li class="list-item">
                                        <a href="https://www.youtube.com/embed/o_H03ycRyM4?rel=0" class="item-inner"
                                            data-modal="youtube" target="_blank" rel="noopener">
                                            <p class="item-img"><img src="<?php echo get_bloginfo('template_directory').'/pigeonlatam/img/b_bnr_gnav_01.jpg';?>" alt="Vídeo Corporativo">
                                            </p>
                                            <p class="item-ttl">Vídeo Corporativo</p>
                                        </a>
                                    </li>
                                    <li class="list-item">
                                        <a href="https://www.youtube.com/embed/NuFxa_m55KY?rel=0" class="item-inner"
                                            data-modal="youtube" target="_blank" rel="noopener">
                                            <p class="item-img"><img src="<?php echo get_bloginfo('template_directory').'/pigeonlatam/img/b_bnr_gnav_02.jpg';?>" alt="Marca Pigeon">
                                            </p>
                                            <p class="item-ttl">Marca Pigeon</p>
                                        </a>
                                    </li>
                                </ul>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div> <!-- /.megamenu-area -->
        </div> 
        <div class="pc-megamenu" data-header-subarea-pc="sustainability">
            <div class="megamenu-area">
                <div class="area-close">
                    <button class="close-btn" data-header-subclose-pc="sustainability">close</button>
                </div>
                <div class="area-menu is-pickup">
                    <dl>
                        <dt><a href="https://pigeonlatam.com/sostenibilidad/">Sostenibilidad</a></dt>
                        <div class="menu-wrap">
                           <dd class="menu-inner">
										<ul>
											<li><a href="https://pigeonlatam.com/celebrar/calentamiento/">Cambio Climático y Biodiversidad</a></li>
											<li><a href="https://pigeonlatam.com/celebrar/plantacion-de-arboles/">Conmemoración del nacimiento de bebés</a></li>
											 
										</ul>
									</dd>
									<dd class="menu-pickup">
										<ul class="pickup-list">
											<li class="list-item">
												<a href="https://pigeonlatam.com/celebrar/" class="item-inner">
													<p class="item-img"><img src="<?php echo get_bloginfo('template_directory').'/pigeonlatam/img/b_bnr_cbia_gnav_01.jpg';?>" alt="Disfruta a los bebés en plena acción"></p>
													<p class="item-ttl">Disfruta a los bebés en plena acción</p>
												</a>
											</li> 
										</ul>
									</dd> 
                        </div>
                    </dl>
                </div>
            </div> <!-- /.megamenu-area -->
        </div>
    
    </div>
</header> 
<?php
	/**
	 * Functions hooked in to storefront_before_content
	 *
	 * @hooked bbtogo_header_widget_region - 10
	 * @hooked woocommerce_breadcrumb - 10
	 */
	do_action( 'storefront_before_content' );
	?>
<div class="flex-1 mb-40">
    <div id="content" class="site-content" tabindex="-1">
        <div class="col-full products-catalog">
