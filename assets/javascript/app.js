
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

  var database = firbase.database();

  var trainName = "";
  var destination = "";
  var frequency = 0;
  var nextArrival = "";
  var minutesArival = "";

  function displayTrainInfo() {
// transport API
  var queryURL = "http://transportapi.com/v3/uk/places.json?query=euston&type=train_station&app_id=YOUR_APP_ID&app_key=914c74173c980e2f0faa659c14e6a714";
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {

  });

}
