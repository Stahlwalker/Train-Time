
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


	// Creates local "temporary" object for holding train data
	// var newTrain = {
	// 	name: name,
	// 	destination: destination,
	// 	firstTrain: firstTrainUnix,
	// 	frequency: frequency
	// }

    var name = "";
    var destination = "";
    var firstTrain = "";
    var frequency = "";
  

// Click Button changes what is stored in firebase
$("#submit").on("click", function() {
    // Prevent the page from refreshing
    event.preventDefault();

    // Get inputs
    name = $("#search-name").val().trim();
    destination = $("#search-destination").val().trim();
    firstTrain = $("#search-time").val().trim();
    frequency = $("#search-frequency").val().trim();
    

    // Change what is saved in firebase
    database.ref().set({
      name: name,
      destination: destination,
      firstTrain: firstTrain,
      frequency: frequency
    });
  });

  // Firebase is always watching for changes to the data.
  // When changes occurs it will print them to console and html
  database.ref().on("value", function(snapshot) {

    // Print the initial data to the console.
    console.log(snapshot.val());

    // Log the value of the various properties
    console.log(snapshot.val().name);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().firstTrain);
    console.log(snapshot.val().frequency);

    // Change the HTML
    $(".train-info").text(snapshot.val().name + " | " + snapshot.val().destination + " | " + snapshot.val().firstTrain + " | " + snapshot.val().frequency);

    // If any errors are experienced, log them to console.
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });





















//  var train = "Metra";
// // transport API
// //   var queryURL = "http://transportapi.com/v3/uk/places.json?query=euston&type=train_station&app_id=5bc5ba12&app_key=914c74173c980e2f0faa659c14e6a714";
//   var queryURL = "https://transportapi.com/v3/uk/train/station/CRS///timetable.json?app_id=5bc5ba12&app_key=914c74173c980e2f0faa659c14e6a714&train_status=passenger";
//   console.log(queryURL);

//   $.ajax({
//     url: queryURL,
//     method: 'GET'
//   }).done(function(response) {

//     var tBody = $("tbody");
//     var tRow = $("<tr>");

//     // Methods run on jQuery selectors return the selector they we run on
//       // This is why we can create and save a reference to a td in the same statement we update its text
//       var trainName = $("<td>").text(response.Name);
//       var destination = $("<td>").text(response.Destination);
//       var frequency = $("<td>").text(response.Frequency);
//       var nextArrival = $("<td>").text(response.NextArrival);
//       var minutesArrival = $("<td>").text(response.MinutesArrival);
//       // Append the newly created table data to the table row
//       tRow.append(trainName, destination, frequency, nextArrival, minutesArrival);
//       // Append the table row to the table body
//       tBody.append(tRow);

//   });




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
//     tRow.push(userInput);
//     // console.log("New Array: " + topics); 
//     // The renderButtons function is called, rendering the list of animal buttons
//     renderButtons();

//   });
