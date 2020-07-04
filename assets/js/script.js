
//---display delete button when checkbox is clicked


var checkbox = document.getElementsByClassName("delete-checkbox");

var displayDelete = function(){
    console.log("Displaying delete button");
    var deleteButton = document.getElementById("delete-button");
    deleteButton.style.visibility="visible";
}
for (var i = 0; i < checkbox.length; i++) {
   checkbox[i].addEventListener('click', displayDelete);
}


