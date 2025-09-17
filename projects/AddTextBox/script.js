
    // Add new row
    $(document).on("click", ".add", function() {
      let newRow = `<div class="row">
        <input type="text" name="name[]" placeholder="Name">
        <input type="number" name="amount[]" placeholder="Amount">
        <button type="button" class="add">Add</button>
        <button type="button" class="delete">Delete</button>
      </div>`;
      $("#Container").append(newRow);
    });

    // Delete row
    $(document).on("click", ".delete", function() {
      $(this).closest(".row").remove();
    });

    // On submit → calculate total
    $("#Form").on("submit", function(e) {
      e.preventDefault();
      let total = 0;
      $("input[name='amount[]']").each(function() {
        total += parseFloat($(this).val()) || 0;
      });
      $("#total").text("Total Amount: " + total);
    });