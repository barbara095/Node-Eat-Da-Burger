// This file attaches event handlers to our buttons

$(function () {
    // Adding event listener to change devoured state
    $('.eat-burger').on('click', function (event) {
      var id = $(this).data('id');
      
      var newDevState = {
        devoured: 1,
      };
      // Send the PUT request.
      $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: newDevState,
      }).then(function () {
        // Reload the page to get the updated list
        location.reload();
      });
      console.log(id);
    });
  
    // Adding event listener on submit button, and posting new burger data
    $('.create-form').on('submit', function (event) {
      event.preventDefault();

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

    // Adding event listener on delete button, and deleting respective burger
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