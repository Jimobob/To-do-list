$("input").on("keypress", function(event){
	if(event.which == 13){
		var value = $("input").val();
		$("#list").append("<p>" + value + "</p");
		console.log(value);
		$("input").val('');
	}
})
