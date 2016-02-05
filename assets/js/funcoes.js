$(function(){
	
	jQuery( window ).scroll(function() {
		
		var st 	  = jQuery(this).scrollTop(); // captura a posição do scroll
		var delay = 1500;

		console.log(st);

		// Verifica posição do topo da janela
		// e exibe ou esconde o menu suspenso.
		if (st >= 588) {
			jQuery('.menu').show();
		}else{
			jQuery('.menu').fadeOut();
		}

		// ESTUDOS.HTML
		// Verifica posição do topo da janela
		// e exibe ou esconde o menu suspenso.
		if (st >= 256) {
			jQuery('.menu_interno').show();
		}else{
			jQuery('.menu_interno').fadeOut();
		}

		// Verifica posição do topo da janela
		// e exibe mais notícias e esconde o gif loading.
		if (st >= 2570) {
			setTimeout(function(){
				jQuery('.loading').hide();
				jQuery('.noticias').fadeIn();
			}, delay);
		};

	});

	// Efeito HOVER de link em notícia
	jQuery('.hover_').mouseover(function() {
		jQuery('.hover').show();
	});

	// Remove o efeito HOVER da notícia
	jQuery('.hover_').mouseleave(function() {
		jQuery('.hover').hide();
	});

	// Efeito HOVER para exibir mais opções no menu
	jQuery('.hover_menu').mouseover(function() {
		jQuery('.menu_').show();
	});

	// Esconde mais opções do menu.
	jQuery('.hover_menu').mouseleave(function() {
		jQuery('.menu_').fadeOut('fast');
	});

	// Efeito HOVER para exibir mais opções no menu suspenso.
	jQuery('.hover_menuOver').mouseover(function() {
		jQuery('.menu_Over').show();
	});

	// Esconde mais opções do menu suspenso.
	jQuery('.hover_menuOver').mouseleave(function() {
		jQuery('.menu_Over').fadeOut('fast');
	});

	// Efeito HOVER dropdown menu
	jQuery('.hover_drop').mouseover(function() {
		jQuery('.drop').show();
	});

	// Esconde dropdown menu
	jQuery('.hover_drop').mouseleave(function() {
		jQuery('.drop').fadeOut('fast');
	});

});