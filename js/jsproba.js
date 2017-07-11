var images = {
	"h1": ['images/h1/DSC-1.jpg','images/h1/DSC-2.jpg','images/h1/DSC-4.jpg','images/h1/DSC-16.jpg','images/h1/DSC-17.jpg','images/h1/DSC-21.jpg','images/h1/DSC-24.jpg'],
	"h2": ['images/h2/DSC-5.jpg','images/h2/DSC-6.jpg','images/h2/DSC-7.jpg','images/h2/DSC-10.jpg','images/h2/DSC-11.jpg','images/h2/DSC-22.jpg','images/h2/DSC-27.jpg'],
	"h3": ['images/h3/DSC-28.jpg','images/h3/DSC-32.jpg','images/h3/DSC-35.jpg','images/h3/DSC-48.jpg','images/h3/DSC-51.jpg','images/h3/DSC-52.jpg'],
	"h4": ['images/h4/DSC-40.jpg','images/h4/DSC-36.jpg','images/h4/DSC-41.jpg','images/h4/DSC-42.jpg','images/h4/DSC-44.jpg'],
	"h5": ['images/h5/DSC-54.jpg','images/h5/DSC-53.jpg','images/h5/DSC-59.jpg','images/h5/DSC-60.jpg','images/h5/DSC-61.jpg'],
	"h6": ['images/h6/DSC-64.jpg','images/h6/DSC-68.jpg','images/h6/DSC-69.jpg','images/h6/DSC-70.jpg','images/h6/DSC-71.jpg'],
	"h7": ['images/h7/DSC-73.jpg','images/h7/DSC-77.jpg','images/h7/DSC-78.jpg'],
	"h8": ['images/h8/DSC-80.jpg','images/h8/DSC-82.jpg','images/h8/DSC-83.jpg','images/h8/DSC-84.jpg','images/h8/DSC-85.jpg'],
	"h9": ['images/h9/DSC-94.jpg','images/h9/DSC-86.jpg','images/h9/DSC-87.jpg','images/h9/DSC-97.jpg'],
	"h10": ['images/h10/DSC-99.jpg','images/h10/DSC-100.jpg','images/h10/DSC-101.jpg'],
	"h11": ['images/h11/DSC-102.jpg','images/h11/DSC-104.jpg','images/h11/DSC-105.jpg','images/h11/DSC-106.jpg','images/h11/DSC-107.jpg'],
	"h12": ['images/h12/DSC-141.jpg','images/h12/DSC-143.jpg'],
	"h13": ['images/h13/DSC-145.jpg','images/h13/DSC-146.jpg','images/h13/DSC-147.jpg','images/h13/DSC-150.jpg'],
	"h14": ['images/h14/DSC-153.jpg','images/h14/DSC-154.jpg','images/h14/DSC-148.jpg','images/h14/DSC-151.jpg'],
	"h15": ['images/h15/DSC-158.jpg','images/h15/DSC-159.jpg'],
	"h16": ['images/h16/DSC-166.jpg','images/h16/DSC-168.jpg','images/h16/DSC-169.jpg'],
	"h17": ['images/h17/DSC-201.jpg','images/h17/DSC-202.jpg','images/h17/DSC-203.jpg'],
	"bip": ['images/bip/DSC-110.jpg','images/bip/DSC-111.jpg','images/bip/DSC-112.jpg','images/bip/DSC-113.jpg'],
	"bis1": ['images/bis1/DSC-119.jpg','images/bis1/DSC-120.jpg','images/bis1/DSC-121.jpg'],
	"bis2": ['images/bis2/DSC-124.jpg','images/bis2/DSC-129.jpg','images/bis2/DSC-130.jpg'],
	"bis3": ['images/bis3/DSC-136.jpg','images/bis3/DSC-139.jpg','images/bis3/DSC-140.jpg'],
	"bis4": ['images/bis4/DSC-163.jpg','images/bis4/DSC-164.jpg','images/bis4/DSC-165.jpg'],
	"bish1": ['images/bish1/DSC-171.jpg','images/bish1/DSC-172.jpg','images/bish1/DSC-174.jpg','images/bish1/DSC-175.jpg'],
	"bish2": ['images/bish2/DSC-177.jpg','images/bish2/DSC-185.jpg','images/bish2/DSC-186.jpg','images/bish2/DSC-187.jpg','images/bish2/DSC-188.jpg'],
	"s1": ['images/s1/DSC-179.jpg','images/s1/DSC-181.jpg','images/s1/DSC-182.jpg'],
	"s2": ['images/s2/DSC-196.jpg'],
	"s3": ['images/s3/DSC-198.jpg'],
	"teenie": ['images/teenie/DSC-209.jpg','images/teenie/DSC-210.jpg','images/teenie/DSC-211.jpg'],
	"sl1": ['images/slike/NZF_6963.jpg'],
	"sl2": ['images/slike/NZF_6965.jpg'],
	"sl3": ['images/slike/NZF_6967.jpg'],
	"sl4": ['images/slike/NZF_6969.jpg'],
	"sl5": ['images/slike/NZF_6970.jpg'],
	"sl6": ['images/slike/NZF_6972.jpg'],
	"sl7": ['images/slike/NZF_6974.jpg'],
	"sl8": ['images/slike/NZF_6975.jpg'],
	"sl9": ['images/slike/NZF_6977.jpg'],
	"sl10": ['images/slike/NZF_6979.jpg'],
	"sl11": ['images/slike/NZF_6980.jpg'],
	"sl12": ['images/slike/NZF_6982.jpg'],
	"sl13": ['images/slike/NZF_6984.jpg'],
};
// var img1 = 'images/DSC-1.jpg';
// var img2 = 'images/DSC-2.jpg';
// var img3 = 'images/DSC-3.jpg';

function showCarousel(num) {
	$("#carouselContainer").show();
	// for (var i = 0; i < images[num].size; i++) {
	// 	$('#carouselContainer').append('<div class="item"><img src="'+images[num][i]+'" style="width:100%;"></div>');
	// }
	//console.log(images[num].length);
	for (var i = 0; i < images[num].length; i++) {
		if (i == 0) {
			$('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="'+i+'" class="active"></li>');
			$('.carousel-inner').append('<div class="item active"><img src="'+images[num][i]+'" class="carouselImage"></img></div>');
		} else {
			$('.carousel-indicators').append('<li data-target="#myCarousel" data-slide-to="'+i+'"></li>');
			$('.carousel-inner').append('<div class="item"><img src="'+images[num][i]+'" class="carouselImage"></img></div>');
		}
	}
	//$('.carousel-inner').append('<div class="item active"><img src="'+images[num][1]+'" class="carouselImage"></img></div>');
 	$(".gallery-item").css("z-index", "-1");
	$(".item>img").height($(window).height()-51);
	$(".carouselClose").width(($(window).width()-$("#myCarousel").width())/2);
}

function hideCarousel() {
	$("#carouselContainer").hide();
	$('.carousel-indicators').empty();
	$('.carousel-inner').empty();
  	$(".gallery-item").css("z-index", "20");
}

// function showImage() {
// 	$("#myCarousel").carousel("pause").removeData();
// 	for (var i = 0; i < images.length; i++) {
// 		// $('#carousel-container').append('<div class="item" id="carousel-item-'+i+'"></div>');
// 		// $('#carousel-item-'+i).css('background-image', 'url("' + images[i] + '")')
//     $('#carousel-container').append('<img class="item" src="'+images[i]+'" />');
// 		if (i == 0) {
// 			$('.item').addClass("active");
// 		}
// 	}
// 	$('#myCarousel').show();
// 	$('#myCarousel').carousel();
// }
