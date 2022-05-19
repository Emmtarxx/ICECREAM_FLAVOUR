$(document).ready(function () {
  $("#btn").click(function () {
    let Flavours = ["Chocolate", "Vanilla", "Strawberry", "Cookies And Cream", "Mint Chocolate Chip", "Cherry", "Cream", "Rum Raisin", "Banana Split", "Strawberry iceCream"];

    Flavours.forEach(function (Elements) {
      $('ul#output').append("<li>" + Elements + "</li>")


    });



  });

});

