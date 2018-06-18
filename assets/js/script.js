var id = 0;

$("input").on("keypress", function(event){
	if(event.which == 13){
		id++;
		var value = $("input").val();

		var $div = $("<div>").append(
			$("<i>", {class: "fas fa-trash-alt fa-sm"}),
			$("<i>", {class: "far fa-edit fa-sm"}),
			$("<input>", {type: "checkbox", class: "checkbox", id: "cb" + id}, name="checkbox"),
			$('<label>', {for: "cb" + id, text: value})
		).appendTo("#list");


		console.log($div);

		$("input").val('');
	}
})


$(document).on('change', '[type=checkbox]', function(){
	var id = $(this).attr("id");
	if($(this).is(":checked")){
		$("label[for='" + id + "']").css("text-decoration", "line-through");
	}
	else{
		$("label[for='" + id + "']").css("text-decoration", "none");
	}
})


$("p").on("click", function(){

})
