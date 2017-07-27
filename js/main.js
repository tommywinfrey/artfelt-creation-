$(function() {
	
	var array_of_data = [
		{id: 0, medium: 'oil', artist: 'tommy winfrey', img: 'artwork/il_570xN.765785147_na1z.jpg', name: 'gizmo', price: '600.00', size: '24" x 36"', exactMedium: 'oil on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 1, medium: 'oil', artist: 'tommy winfrey', img: 'artwork/il_570xN.766056428_i7ei.jpg', name: 'branded', price: '600.00', size: '24" x 36"', exactMedium: 'oil on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 2, medium: 'oil', artist: 'tommy winfrey', img: 'artwork/il_570xN.868787360_l8hl.jpg', name: 'emperor penguin', price: '600.00', size: '24" x 36"', exactMedium: 'oil on canvas', prison: 'san quentin', profilepict: 'artwork/profile.jpg'},
		{id: 3, medium: 'acrylic', artist: 'tommy winfrey', img: 'artwork/ship.jpg', name: 'trouble', price: '450.00', size: '30" x 24"', exactMedium: 'acrylic on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 4, medium: 'acrylic', artist: 'tommy winfrey', img: 'artwork/self_portrait.jpg', name: 'the matidor', price: '700.00', size: '36" x 36"', exactMedium: 'acrylic on canva', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 5, medium: 'acrylic', artist: 'tommy winfrey', img: 'artwork/midsummer.jpg', name: 'midsummer', price: '500.00', size: '30" x 24"', exactMedium: 'acrylic on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 6, medium: 'pencil/charcoal', artist: 'tommy winfrey', img: 'artwork/jack_red_cloud.jpg', name: 'chief jack red cloud', price: '100.00', size: '9" x 11"', exactMedium: 'pencil/charcoal on paper', prison: 'san quentin'},
		{id: 7, medium: 'pencil/charcoal', artist: 'tommy winfrey', img: 'artwork/two_moons.jpg', name: 'chief two moons', price: '100.00', size: '9" x 11"', exactMedium: 'pencil/charcoal on paper', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 8, medium: 'acrylic', artist: 'tommy winfrey', img: 'artwork/indians.png', name: 'fredom', price: '450.00', size: '30" x 24"', exactMedium: 'acrylic on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 9, medium: 'handmade', artist: 'jack', img: 'artwork/purse.jpg', name: 'purse', price: '50.00', size: '30" x 24"', exactMedium: 'folded laminated paper', prison: 'folsom', profilepict: 'artwork/profile.png'},
		{id: 10, medium: 'oil', artist: 'bio', img: 'artwork/ren_man.png', name: 'renisance', price: '500.00', size: '24" x 30"', exactMedium: 'oil on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 11, medium: 'handmade', artist: 'jack', img: 'artwork/_86865074_img_3518.png', name: 'day of the dead purse', price: '150.00', size: '24" x 30"', exactMedium: 'leather', prison: 'folsom', profilepict: 'artwork/profile.png'},
		{id: 12, medium: 'acrylic', artist: 'chad tobias', img: 'artwork/man_in_cell.png', name: 'man in a cell', price: '1500.00', size: '48" x 36"', exactMedium: 'acrylic on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 13, medium: 'pencil/charcoal', artist: 'alberto fernandez', img: 'artwork/indian_dancing.png', name: 'indian nation', price: '500.00', size: '24" x 30"', exactMedium: 'pen on paper', prison: 'folsom', profilepict: 'artwork/profile.png'},
		{id: 14, medium: 'acrylic', artist: 'chad tobias', img: 'artwork/waterfall.png', name: 'waterfall', price: '250.00', size: '12" x 18"', exactMedium: 'acrylic on board', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 15, medium: 'pencil/charcoal', artist: 'chad tobias', img: 'artwork/woman.png', name: 'woman behind glass', price: '250.00', size: '18" x 18"', exactMedium: 'pencil on paper', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 16, medium: 'acrylic', artist: 'chad tobias', img: 'artwork/waterfall_II.png', name: 'waterfall ii', price: '250.00', size: '12" x 18"', exactMedium: 'acrylic on board', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 17, medium: 'acrylic', artist: 'ronnie goodman', img: 'artwork/upper_yard.png', name: 'san quentin upper yard', price: '200.00', size: '16" x 24"', exactMedium: 'acrylic on board', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 18, medium: 'handmade', artist: 'nicola bucci', img: 'artwork/TheCell.jpg', name: 'the cell', price: '300.00', size: '12" x 18"', exactMedium: 'paper', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 19, medium: 'handmade', artist: 'nicola bucci', img: 'artwork/TheCityofNewHope-USA.jpg', name: 'new hope city', price: '200.00', size: '48" x 48"', exactMedium: 'paper', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 20, medium: 'acrylic', artist: 'issah daniels', img: 'artwork/TightropeOfHope.jpg', name: 'tight rope of hope', price: '400.00', size: '32" x 24"', exactMedium: 'acrylic on board', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 21, medium: 'acrylic', artist: 'scotty mckinstrey', img: 'artwork/girl_with_scarf.png', name: 'girl with scarf', price: '700.00', size: '36" x 48"', exactMedium: 'acrylic on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 22, medium: 'oil', artist: 'tommy winfrey', img: 'artwork/koala.jpg', name: 'koala', price: '150.00', size: '8" x 12"', exactMedium: 'oil on canvas board', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 23, medium: 'oil', artist: 'tommy winfrey', img: 'artwork/lion.jpg', name: 'lion', price: '500.00', size: '24" x 30"', exactMedium: 'oil on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png' },
		{id: 24, medium: 'acrylic', artist: 'tommy winfrey', img: 'artwork/shark.jpg', name: 'preditor', price: '500.00', size: '48" x 54"', exactMedium: 'acrylic on canvas', prison: 'san quentin', profilepict: 'artwork/profile.png'},
		{id: 25, medium: 'pencil/charcoal', artist: 'alberto fernandez', img: 'artwork/drawing1.png', name: 'drawing', price: '50.00', size: '9" x 11"', exactMedium: 'pencil on paper', prison: 'folsom', profilepict: 'artwork/profile.png'},
		{id: 26, medium: 'pencil/charcoal', artist: 'alberto fernandez', img: 'artwork/drawing2.png', name: 'drawing', price: '50.00', size: '9" x 11"', exactMedium: 'pencil on paper', prison: 'folsom', profilepict: 'artwork/profile.png'},
		{id: 27, medium: 'pencil/charcoal', artist: 'alberto fernandez', img: 'artwork/drawing3.png', name: 'drawing', price: '50.00', size: '9" x 11"', exactMedium: 'pencil on paper', prison: 'folsom', profilepict: 'artwork/profile.png'},
		{id: 28, medium: 'pencil/charcoal', artist: 'alberto fernandez', img: 'artwork/drawing4.png', name: 'drawing', price: '50.00', size: '9" x 11"', exactMedium: 'pencil on paper', prison: 'folsom', profilepict: 'artwork/profile.png'},
		{id: 29, medium: 'pencil/charcoal', artist: 'alberto fernandez', img: 'artwork/drawing5.png', name: 'drawing', price: '75.00', size: '9" x 11"', exactMedium: 'pencil on paper', prison: 'folsom', profilepict: 'artwork/profile.png'},
		{id: 30, medium: 'pencil/charcoal', artist: 'alberto fernandez', img: 'artwork/drawing6.png', name: 'drawing', price: '75.00', size: '9" x 11"', exactMedium: 'pencil on paper', prison: 'folsom', profilepict: 'artwork/profile.png'},
		{id: 31, medium: 'pencil/charcoal', artist: 'alberto fernandez', img: 'artwork/drawing7.png', name: 'drawing', price: '75.00', size: '9" x 11"', exactMedium: 'pencil on paper', prison: 'folsom', profilepict: 'artwork/profile.png'}


	];

	

	var array_of_artist = []
	
	for (var i = 0; i < array_of_data.length; i++) {
		array_of_artist.push(array_of_data[i]['artist']);

	}
	
	array_of_artist.sort();

	function filteredArray() {
		for (var i = 0; i < array_of_artist.length; i++) {
			if (array_of_artist[i] === array_of_artist[(i + 1)]) {
				array_of_artist.splice(i, 1)
			}
		}
		return array_of_artist;
	}
	
	array_of_artist.filter(filteredArray);

	function createArtistList(){
		for (var i = 0; i < array_of_artist.length; i++) {
			$('.artistsList').append('<li role="presentation" class="artist_name dropDownLink" role="menuitem" tabindex="-1" href="#">' + array_of_artist[i].toUpperCase() + '</li>');
		}
	}

	function renderArtistList(artists){
		$('.artistsList').html('');
		for (var i = 0; i < artists.length; i++) {
			$('.artistsList').append('<li role="presentation" class="artist_name dropDownLink" role="menuitem" tabindex="-1" href="#">' + artists[i].toUpperCase() + '</li>');
		}
	}

	$('.artistsNames').on('click', function() {
		if ($('.artists_drop_menu').children('li').length === 0) {
			createArtistList();

		} 
		$('.hiddenDrop').addClass('hidden');

	});

	$('.artist-search').keypress(function(e){
		var searchStr = e.target.value.toLowerCase();
		var artists = array_of_artist.filter(function(item){
			return item.indexOf(searchStr) >= 0;
		});
		renderArtistList(artists);
		$('.hiddenDrop').removeClass('hidden');
	});

	$('#galleries').on('click', function(){
		$('.hiddenDrop').addClass('hidden');

	})
	

	

	var $row = $('#galRow');
	var $div = $('#gallery');
	var $galleries = $('#galleries');
	var $home = $('.nav_home');
	var $artist_by_name = $('#artist_by_name');
	var $oil = $('.oil');
	var $pencil = $('.pencil');
	var $acrylic = $('.acrylic');
	var $handmade = $('.handmade');
	var $artist_name = $('.artist_name');
	var $artists = $('.artistsList');
	var chosen_name;
	var $shoppingBtn = $('.shopping-btn');
	var $modalBody = $('.modal-body');
	var $cartTable = $('#cartTable');

	$artist_by_name.hover(function(){
		$(this).children('.hidden_ul').toggleClass('reveal_ul');
	});


	function test_for_artist () {
		var $div = $('#gallery');
		$('div').detach('.detach');
		var array_of_thumbnails = 0;
		var counter = 0;
		for (var i = 0; i < array_of_data.length; i++) {
			if ($('.profilePict').length === 0){
				$div.append('<div class="row"><div class="clo-md-1 col-xs-1"></div><div class="col-md-10 col-xs-10"><img class="profilePict center-block" src="' + array_of_data[i].profilepict + '"></div></div>');
			}

			if (array_of_data[i]['artist'] === chosen_name) {
				array_of_thumbnails++;
				if(array_of_thumbnails < 4){
					$div.prepend('<div class="thumbnailDiv col-xs-6 col-md-3"><a href="#" class="thumbnail artist-profile-thumb" data-artid="' + array_of_data[i].id + '"><img class="" src="' + array_of_data[i].img + '" /></a></div>');
				}
				
			}


		}

		if (array_of_thumbnails >= 4){
			counter++;
			if (counter < 2) {
				$('.thumbnailDiv').last().after('<div class="thumbnailDiv col-xs-6 col-md-3"><a id="more_thumbnail" href="#" class="thumbnail artist-profile-thumb-more"><div>' + (array_of_thumbnails - 3) + ' more</div></a></div>');
			}
		}

		$div.prepend('<h1 class="artists artist-header">ARTIST PROFILE</h1><br><br><br>');
		$('.thumbnailDiv').last().after('<div class="col-md-12"</div>');
		
		$('.artist-search').val('');
			
	}

	$div.on('click', '.artist-profile-thumb-more', function() {
		$div.empty();
		for (var i = 0; i < array_of_data.length; i++) {
			if ($('.profilePict').length === 0){
				$div.append('<div class="row"><div class="clo-md-1 col-xs-1"></div><div class="col-md-10 col-xs-10"><img class="profilePict center-block" src="' + array_of_data[i].profilepict + '"></div></div>');
			}
			if (array_of_data[i]['artist'] === chosen_name){	
				$div.prepend('<div class="thumbnailDiv col-xs-6 col-md-3"><a href="#" class="thumbnail artist-profile-thumb" data-artid="' + array_of_data[i].id + '"><img class="" src="' + array_of_data[i].img + '" /></a></div>');
			}
		}	
			$div.prepend('<h1 class="artists artist-header">ARTIST PROFILE</h1><br><br><br>');
			$('.thumbnailDiv').last().after('<div class="col-md-12"</div>');
		
			$('.artist-search').val('');
	});

	$div.on('click', '.artist-profile-thumb', function() {
		$('.thumbnailDiv').last().after('<div class="col-md-12"</div>');
		var itemnum = parseInt(this.dataset.artid);
		if ($('.wrapperOfGallery').length >= 1) {
			$('.wrapperOfGallery').remove();
		}
		for (var i = 0; i < array_of_data.length; i++) {
			if (array_of_data[i]['id'] === itemnum) {
					$div.prepend('<div class="row wrapperOfGallery container-fluid"><div class="col-md-6 image_container"> <img class="imgGallery image" src="' + array_of_data[i].img + '" /></div><div class="col-md-1"></div> <div class="customInfo col-md-4"><p class="artistName"> ARTIST: ' + array_of_data[i].artist.toUpperCase() + '</p> <p class="pieceName">  "' + array_of_data[i].name.toUpperCase() + '"    ' +  array_of_data[i].size.toUpperCase() + '</p><p class="discriptP priceName"> $ ' + array_of_data[i].price.toUpperCase() + '</p> <p class="discriptP"> Description <ul class="descriptions"><li>Made in: ' + array_of_data[i].prison.toUpperCase() + '</li><li>Materials: ' + array_of_data[i].exactMedium.toUpperCase() + '</li><li>Ships worldwide from United States</li></ul></p><br><button data-id="' + array_of_data[i].id + '"type="button" class="shopping-btn btn btnGr btn-success ' + array_of_data[i].id + '">Add to cart</button></div></div>');
		
			}
		}
		$('.artist-header').detach();

		// $('.profilePict').detach();
	});
	
	$artists.on('click','li',function () {
		$row.removeClass('hidden');
		chosen_name = $(this).html().toLowerCase();
		$div.html('');
		$('#artists-profiles').addClass('current');
		$('#about').removeClass('current');
		$('#contact').removeClass('current');
		$home.removeClass('current');
		$galleries.removeClass('current');
		$('.hiddenDrop').addClass('hidden');
		$('.slides').addClass('hidden');
		$('#hiddenContactDiv').addClass('hidden');
		$('#hiddenAboutDiv').addClass('hidden');

		test_for_artist();
	});

	$('.search-btn').on('click', function(){
		$row.removeClass('hidden');
		chosen_name  = $('.artist-search').val().toLowerCase();
		console.log(chosen_name);
		$div.html('');
		$('#artists-profiles').addClass('current');
		$home.removeClass('current');
		$galleries.removeClass('current');
		$('.hiddenDrop').addClass('hidden');
		$('.slides').addClass('hidden');
		$('#hiddenContactDiv').addClass('hidden');
		$('#hiddenAboutDiv').addClass('hidden');
		test_for_artist();

	})






	function test_for_oil () {
		var $div = $('#gallery');
		$('div').detach('.detach');
		$div.append('<h1 class="artists">OIL GALLERY</h1><br><br>');
		for (var i = 0; i < array_of_data.length; i++) {
				if (array_of_data[i]['medium'] === 'oil') {
				$div.append('<div class="row wrapperOfGallery container-fluid"><div class="col-md-6 image_container"> <img class="imgGallery image" src="' + array_of_data[i].img + '" /></div><div class="col-md-1"></div> <div class="customInfo col-md-4"><p class="artistName"> ARTIST: ' + array_of_data[i].artist.toUpperCase() + '</p> <p class="pieceName">  "' + array_of_data[i].name.toUpperCase() + '"    ' +  array_of_data[i].size.toUpperCase() + '</p><p class="discriptP priceName"> $ ' + array_of_data[i].price.toUpperCase() + '</p> <p class="discriptP"> Description <ul class="descriptions"><li>Made in: ' + array_of_data[i].prison.toUpperCase() + '</li><li>Materials: ' + array_of_data[i].exactMedium.toUpperCase() + '</li><li>Ships worldwide from United States</li></ul></p><br><button data-id="' + array_of_data[i].id + '" type="button" class="shopping-btn btn btnGr btn-success ' + array_of_data[i].id + '">Add to cart</button></div></div><div class="clearLeft"></div>');



			}
		}
	}

	
	$oil.on('click', function(){
		$row.removeClass('hidden');
		$div.html('');
		$galleries.addClass('current');
		$('#about').removeClass('current');
		$('#contact').removeClass('current');
		$home.removeClass('current');
		$('#artists-profiles').removeClass('current');
		test_for_oil();
		$('.hiddenDrop').addClass('hidden');
		$('.slides').addClass('hidden');
		$('#hiddenContactDiv').addClass('hidden');
		$('#hiddenAboutDiv').addClass('hidden');

	});

	function test_for_acrylic () {
		var $div = $('div #gallery');
		$div.append('<h1 class="artists">ACRYLIC GALLERY</h1><br><br>');
		$('div').detach('.detach');
		for (var i = 0; i < array_of_data.length; i++) {
				if (array_of_data[i]['medium'] === 'acrylic') {
				$div.append('<div class="row wrapperOfGallery container-fluid"><div class="col-md-6 image_container"> <img class="imgGallery image" src="' + array_of_data[i].img + '" /></div><div class="col-md-1"></div> <div class="customInfo col-md-4"><p class="artistName"> ARTIST: ' + array_of_data[i].artist.toUpperCase() + '</p> <p class="pieceName">  "' + array_of_data[i].name.toUpperCase() + '"    ' +  array_of_data[i].size.toUpperCase() + '</p><p class="discriptP priceName"> $ ' + array_of_data[i].price.toUpperCase() + '</p> <p class="discriptP"> Description <ul class="descriptions"><li>Made in: ' + array_of_data[i].prison.toUpperCase() + '</li><li>Materials: ' + array_of_data[i].exactMedium.toUpperCase() + '</li><li>Ships worldwide from United States</li></ul></p><br><button data-id="' + array_of_data[i].id + '"type="button" class="shopping-btn btn btnGr btn-success ' + array_of_data[i].id + '">Add to cart</button></div></div><div class="clearLeft"></div>');


			}
		}
	}

		
	$acrylic.on('click', function(){
		$row.removeClass('hidden');
		$div.html('');
		$galleries.addClass('current');
		$('#about').removeClass('current');
		$('#contact').removeClass('current');
		$home.removeClass('current');
		$('#artists-profiles').removeClass('current');
		test_for_acrylic();
		$('.hiddenDrop').addClass('hidden');
		$('.slides').addClass('hidden');
		$('#hiddenContactDiv').addClass('hidden');
		$('#hiddenAboutDiv').addClass('hidden');

	});


	function test_for_pencil () {
		var $div = $('div #gallery');
		$div.append('<h1 class="artists">DRAWING GALLERY</h1><br><br>');
		$('div').detach('.detach');
		for (var i = 0; i < array_of_data.length; i++) {
				if (array_of_data[i]['medium'] === 'pencil/charcoal') {
				$div.append('<div class="row wrapperOfGallery container-fluid"><div class="col-md-6 image_container"> <img class="imgGallery image" src="' + array_of_data[i].img + '" /></div><div class="col-md-1"></div> <div class="customInfo col-md-4"><p class="artistName"> ARTIST: ' + array_of_data[i].artist.toUpperCase() + '</p> <p class="pieceName">  "' + array_of_data[i].name.toUpperCase() + '"    ' +  array_of_data[i].size.toUpperCase() + '</p><p class="discriptP priceName"> $ ' + array_of_data[i].price.toUpperCase() + '</p> <p class="discriptP"> Description <ul class="descriptions"><li>Made in: ' + array_of_data[i].prison.toUpperCase() + '</li><li>Materials: ' + array_of_data[i].exactMedium.toUpperCase() + '</li><li>Ships worldwide from United States</li></ul></p><br><button data-id="' + array_of_data[i].id + '"type="button" class="shopping-btn btn btnGr btn-success ' + array_of_data[i].id + '">Add to cart</button></div></div><div class="clearLeft"></div>');

				
			}
		}
	}

		
	$pencil.on('click', function(){
		$row.removeClass('hidden');
		$div.html('');
		$galleries.addClass('current');
		$('#about').removeClass('current');
		$('#contact').removeClass('current');
		$home.removeClass('current');
		$('#artists-profiles').removeClass('current');
		test_for_pencil();
		$('.hiddenDrop').addClass('hidden');
		$('.slides').addClass('hidden');
		$('#hiddenContactDiv').addClass('hidden');
		$('#hiddenAboutDiv').addClass('hidden');

	});


	function test_for_handmade () {
		var $div = $('#gallery');
		$('div').detach('.detach');
		$div.append('<h1 class="artists">HANDMADE CRAFTS GALLERY</h1><br><br>');
		for (var i = 0; i < array_of_data.length; i++) {
				if (array_of_data[i]['medium'] === 'handmade') {
				$div.append('<div class="row wrapperOfGallery container-fluid"><div class="col-md-6 image_container"> <img class="imgGallery image" src="' + array_of_data[i].img + '" /></div><div class="col-md-1"></div> <div class="customInfo col-md-4"><p class="artistName"> ARTIST: ' + array_of_data[i].artist.toUpperCase() + '</p> <p class="pieceName">  "' + array_of_data[i].name.toUpperCase() + '"    ' +  array_of_data[i].size.toUpperCase() + '</p><p class="discriptP priceName"> $ ' + array_of_data[i].price.toUpperCase() + '</p> <p class="discriptP"> Description <ul class="descriptions"><li>Made in: ' + array_of_data[i].prison.toUpperCase() + '</li><li>Materials: ' + array_of_data[i].exactMedium.toUpperCase() + '</li><li>Ships worldwide from United States</li></ul></p><br><button data-id="' + array_of_data[i].id + '"type="button" class="shopping-btn btn btnGr btn-success ' + array_of_data[i].id + '">Add to cart</button></div></div><div class="clearLeft"></div>');


			}
		}
	}

	
	$handmade.on('click', function(){
		$row.removeClass('hidden');
		$div.html('');
		$galleries.addClass('current');
		$('#about').removeClass('current');
		$('#contact').removeClass('current');
		$home.removeClass('current');
		$('#artists-profiles').removeClass('current');
		test_for_handmade();
		$('.hiddenDrop').addClass('hidden');
		$('.slides').addClass('hidden');
		$('#hiddenContactDiv').addClass('hidden');
		$('#hiddenAboutDiv').addClass('hidden');


	});

	var $navbarToggle = $('.navbar-toggle');
		var $dropDown = $('.myColapseNavBar');

		$navbarToggle.on('click', function() {

			$dropDown.toggleClass('drop-shadow');

		});
	

	var array_of_cart = [];

	$('#gallery').on('click', 'button', function(e){
		// console.log(e);
		// console.log('hello');
		var item = {};
		var $this = $(this);
		var itemnum = parseInt(this.dataset.id);
		
		array_of_cart.push(array_of_data[itemnum]);	
		$this.attr('disabled','disabled');
		$('.hiddenDrop').addClass('hidden');
		$('.badge').text(array_of_cart.length);

	});



	$('.shopping').on('click', 'button', function() {
		
		var n = $('tr').length;
		
		if (n > 1) {
			$('.cartRow').remove();
		}

		
		array_of_cart.forEach(function(item) {
			
			$('table').append('<tr class="cartRow"><td><img src="' + item.img + '" class="cartPicture"></td><td>"' + item.name + '" ' + item.size +'</td><td>' + item.artist + '</td><td class="tdPrice"> $' + item.price + '</td><td><button data-id="' + item.id + '" type="button" class="remove-from-cart btn btn-danger btn-xs">Remove Item</button></td></tr>');

			});


		var cartTotal = [];
		var cartSubTotal = 0;
		var cartTax = 0;
		var cartShipping = 0;
		var cartGrandTotal = 0;
		
		function calculateArray(){
			cartSubTotal = 0;
			cartTax = 0;
		 	cartShipping = 0;
		 	cartGrandTotal = 0;
		
			array_of_cart.forEach(function(item){
			cartSubTotal += Number(item.price);
			});
			cartTax = (.07 * cartSubTotal);
			if(cartSubTotal > 0){
				cartShipping = 5.99;
			}

			cartGrandTotal = cartSubTotal + cartTax + cartShipping;
		}
		
		calculateArray();


		
		

		$('.empty-btn').on('click', function(){
			array_of_cart = [];
			$(this).parents('div').siblings('div .modal-body').children('table').children('.cartRow').remove();
			$('.shopping-btn').removeAttr('disabled');
			$('.badge').text('');
		})
		

		$('table').append('<tr class="cartRow"><td></td><td></td><th>Tax</th><th class="tax">$ ' + cartTax.toFixed(2) + '<th></tr><tr class="cartRow"><td></td><td></td><th>Shipping</th><th class="cartShipping">$ ' + cartShipping.toFixed(2) + '<th></tr><tr class="cartRow"><td></td><td></td><th>Total</th><th class="total">$ ' + cartGrandTotal.toFixed(2) + '<th></tr>');
		
		$('table').on('click', '.remove-from-cart', function(){
			var $this = $(this);

			var itemnum = parseInt(this.dataset.id);

			array_of_cart = array_of_cart.filter(function(item){
				if(item.id !== itemnum ){
					return item;
				}
			});

			calculateArray();
				
			
			$('.' + itemnum).removeAttr('disabled');

			$('.total').text('$' + cartGrandTotal.toFixed(2));
			$('.tax').text('$' + cartTax.toFixed(2));
			$('.cartShipping').text('$' + cartShipping.toFixed(2));
			
			$this.parents('tr').remove();
			$('.badge').text(array_of_cart.length);
			if (array_of_cart.length === 0) {$('.badge').text('');}
		});

	});


	$('#about').on('click', function(){
		$(this).addClass('current');
		$home.removeClass('current');
		$('#artists-profiles').removeClass('current');
		$galleries.removeClass('current');
		$('#contact').removeClass('current');
		$('.hiddenDrop').addClass('hidden');
		$('div').detach('.detach');
		$('#hiddenContactDiv').addClass('hidden');
		$('.slides').addClass('hidden');
		$('#hiddenAboutDiv').removeClass('hidden');
		$div.empty();

	})

	$('#contact').on('click', function(){
		$(this).addClass('current');
		$home.removeClass('current');
		$('#artists-profiles').removeClass('current');
		$('#about').removeClass('current');
		$galleries.removeClass('current');
		$('.hiddenDrop').addClass('hidden');
		$('.slides').addClass('hidden');
		$('#hiddenAboutDiv').addClass('hidden');
		// $('.slides').removeClass('detach');
		$('div').detach('.detach');
		$div.empty();
		$('#hiddenContactDiv').removeClass('hidden');
	})	

	$('#home').on('click', function(){
		$(this).addClass('current');
		$('#artists-profiles').removeClass('current');
		$('#about').removeClass('current');
		$galleries.removeClass('current');
		$('.hiddenDrop').addClass('hidden');
		$('.slides').removeClass('hidden');
		// $('.slides').removeClass('detach');
		$('div').detach('.detach');
		$('#contact').removeClass('current');
		$div.empty();
		$('#hiddenContactDiv').addClass('hidden');
		$('#hiddenAboutDiv').addClass('hidden');
	})	

	// Initializes the carousel
    $(".start-slide").click(function(){
    	$("#mySlides").carousel('cycle');
    });
	// Stops the carousel
    $(".pause-slide").click(function(){
    	$("#mySlides").carousel('pause');
    });
	// Cycles to the previous item
    $(".prev-slide").click(function(){
    	$("#mySlides").carousel('prev');
    });
	// Cycles to the next item
    $(".next-slide").click(function(){
    	$("#mySlides").carousel('next');
    });
	// Cycles the carousel to a particular frame 
    $(".slide-one").click(function(){
    	$("#mySlides").carousel(0);
    });
    $(".slide-two").click(function(){
    	$("#mySlides").carousel(1);
    });
    $(".slide-three").click(function(){
    	$("#mySlides").carousel(2);
    });
    $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
    })
    $(function () {
    $('[data-toggle="popover"]').popover()
    })






});
	