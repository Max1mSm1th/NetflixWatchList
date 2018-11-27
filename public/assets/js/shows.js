$(function() {
  $(".liked").on("click", function(event) {
    var id = $(this).data("id");
    var newLiked = $(this).data("newLiked");

    var newLikedShow = {
      liked: newLiked
    };

$.ajax("/api/shows/" + id, {
  type: "PUT",
  data: newLikedShow
}).then(
  function() {

    console.log("changed liked to", newLiked);
    
    location.reload();
  }
);
});

$(".create-form").on("submit", function(event) {
  event.preventDefault();

  var newShow = {
    name: $("#ca").val().trim(),
  };

$.ajax("/api/shows", {
  type: "POST",
  data: newShow
}).then(
  function() {

    console.log("created new show");

    location.reload();
  }
);
});

$(".delete-show").on("click", function(event) {
  var id = $(this).data("id");

  $.ajax("/api/shows/" + id, {
    type: "DELETE"
  }).then(
    function() {

      console.log("deleted show", id);

      location.reload();
    }
  );
});
});
