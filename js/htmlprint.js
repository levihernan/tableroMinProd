var htmlprint = function(){
	
	if($('#seriesContainer').css('display') !== 'block'){

		html2canvas($(".spreadedTablero"), {
			onrendered: function(canvas) {
				var myImage = canvas.toDataURL("image/png");
				var tWindow = window.open("");
				$(tWindow.document.body).html("<img id='Image' src=" + myImage + " style='width:100%;'></img>").ready(function() {
					tWindow.focus();
					tWindow.print();
				});
			}
		});

	}else{

		window.print();



	}



}