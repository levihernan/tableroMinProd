var htmlprint = function(){

	if($('#seriesContainer').css('display') !== 'block'){

		html2canvas($("#tableroContainer"), {
			onrendered: function(canvas) {
				var myImage = canvas.toDataURL("image/png");
				var tWindow = window.open("");
				$(tWindow.document.body).html("<div style='text-align:center'><img id='Image' src=" + myImage + " style='width:70%;'></img></div>").ready(function() {
					tWindow.focus();
					tWindow.print();
				});
			}
		});

	}else{
		window.print();
	}
}
