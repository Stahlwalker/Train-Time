
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAaUycNT-YHVYTFyGlu4A0-zCyisaubFdo",
    authDomain: "train-time-eb924.firebaseapp.com",
    databaseURL: "https://train-time-eb924.firebaseio.com",
    projectId: "train-time-eb924",
    storageBucket: "",
    messagingSenderId: "595268866699"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var frequency = 0;
  var nextArrival = "";
  var minutesArival = "";

  function displayTrainInfo() {
// transport API
  var queryURL = "http://transportapi.com/v3/uk/places.json?query=euston&type=train_station&app_id=5bc5ba12&app_key=914c74173c980e2f0faa659c14e6a714";
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {

  });

}


// $("#submit").on("click", function(event) {
//     // event.preventDefault() prevents submit button from trying to send a form.
//     // Using a submit button instead of a regular button allows the user to hit
//     // "Enter" instead of clicking the button if desired
//     event.preventDefault();

//     // Write code to grab the text the user types into the input field
//     // Write code to add the new animals into the animals array
//     console.log($("#submit").val());

//     var userInput = $("#submit").val().trim();
  
//     // console.log("Current: " + topics);
//     // topics.push(userInput);
//     // console.log("New Array: " + topics); 
//     // The renderButtons function is called, rendering the list of animal buttons
//     renderButtons();
//   });

//   $(document).on("click", displayTrainInfo);
//   // Calling the renderButtons function to display the initial list of animals
