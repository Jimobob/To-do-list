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

		$("input").val('');
	}
});


$(document).on('change', '[type=checkbox]', function(){
	var id = $(this).attr("id");
	if($(this).is(":checked")){
		$("label[for='" + id + "']").css("text-decoration", "line-through");
	}
	else{
		$("label[for='" + id + "']").css("text-decoration", "none");
	}
});

$(document).on("click", ".fa-trash-alt", function(){
	$(this).parent().remove();
});

$(document).on("click", ".fa-edit", function(){
	var oldVal = $(this).parent().children("label").text();

	var $text = "<input type='text' name='text' value='" + oldVal + "'>";

	$(this).parent().children("label").replaceWith($text);

	$("input[name='text']").css({
		"margin-left" : "15px",
		"outline" : "none"
	});

	$("input[name='text']").focus();

	$("input[name='text']").on("keypress", function(event){
		if(event.which == 13){
			var value = $("input[name='text']").val();


			var $newText = "<label for='checkbox'>" + value + "</label>";
			$("input[name='text']").replaceWith($newText);
		}
	})

})
