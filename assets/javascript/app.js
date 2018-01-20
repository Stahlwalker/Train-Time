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

// 2. Button for adding Employees
$("#submit").on("click", function (event) {
    // Prevent the page from refreshing
    event.preventDefault();

    console.log($("#search-destination").val());
    // Get inputs
    var name = $("#search-name").val().trim();
    var destination = $("#search-destination").val().trim();
    var firstTrain = $("#search-time").val().trim();
    var frequency = $("#search-frequency").val().trim();


       // Creates local "temporary" object for holding employee data
    var newTrain = {
        name: name,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency,
        //   dateAdded: firebase.database.ServerValue.TIMESTAMP
    };

      // Uploads employee data to the database
    database.ref().push(newTrain);

       // Logs everything to console
    //    console.log(newTrain.name);
    //    console.log(newTrain.destination);
    //    console.log(newTrain.firstTrain);
    //    console.log(newTrain.frequency);

   // Alert
    alert("New train successfully added");

    // //   Change the HTML to reflect
    // $("#search-name").text(name);
    // $("#search-destination").text(destination);
    // $("#search-time").text(firstTrain);
    // $("#search-frequency").text(frequency);

    $("#search-name").val("");
    $("#search-destination").val("");
    $("#search-time").val("");
    $("#search-frequency").val("");
});
// $("").text(tMinutesTillTrain);
// $("").text(nextTrain);
database.ref().on("child_added", function (childSnapshot, prevChildkey) {

    console.log(childSnapshot.val());


    // Store everything into a variable.
    var train = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().firstTrain;
    var frequency = childSnapshot.val().frequency;

      // Train Info
    //   console.log(name);
    //   console.log(destination);
    //   console.log(firstTrain);
    //   console.log(frequency);

    
       // Prettify the employee start
    var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Calculate the months worked using hardcore math
    // To calculate the months worked
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



    // Change the HTML
    $("#train-table > tbody").append("<tr><td>" + train + "</td><td>" + destination + "</td><td>" +
        firstTimeConverted + "</td><td>" + +"</td><td>" + tMinutesTillTrain + "</td><td>" + nextTrain + "</td></tr>");

   
});


 // If any errors are experienced, log them to console.
    // }, function (errorObject) {
    //     console.log("Errors handled " + errorObject.code);
