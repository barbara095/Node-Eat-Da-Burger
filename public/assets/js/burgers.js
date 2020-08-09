// This file attaches event handlers to our buttons

$(function () {
    $('.change-eaten').on('click', function (event) {
      var id = $(this).data('id');
      var newDevoured = $(this).data('devoured');
      var newDevouredState = {
        devoured: 1,
      };
  
      // Send the PUT request.
      $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: newDevouredState,
      }).then(function () {
        // Reload the page to get the updated list
        location.reload();
      });
      console.log(id);
      console.log(this);
    });
  
    $('.create-form').on('submit', function (event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log('click');
      var newBurger = {
        burger_name: $('#inlineFormInput').val().trim(),
        devoured: 0,
      };
  
      // Send the POST request.
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger,
      }).then(function () {
        console.log('created new burger');
        // Reload the page to get the updated list
        location.reload();
      });
    });
  
    $('.delete-burger').on('click', function (event) {
      event.preventDefault();
      var id = $(this).data('id');
      console.log(id);
      // Send the DELETE request.
      $.ajax('/api/burgers/' + id, {
        type: 'DELETE',
      }).then(function () {
        console.log('deleted burger', id);
        // Reload the page to get the updated list
        location.reload();
      });
    });
  });