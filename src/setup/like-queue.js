const Queue = require('firebase-queue');
const firebase = require('firebase');


firebase.initializeApp({ // Replace this section with your own data - this will fail with these values
    apiKey: "AIzaSyAYWh7rfqAs1r1102c7HwQxLLPWIWL03ZU",
    authDomain: "browncountylibraryevents.firebaseapp.com",
    databaseURL: "https://browncountylibraryevents.firebaseio.com",
    projectId: "browncountylibraryevents",
    storageBucket: "browncountylibraryevents.appspot.com",
    messagingSenderId: "346952864544"
  });
var auth = firebase.auth();
auth.signInWithEmailAndPassword('testing1bougie@gmail.com', 'password')
    .then(processLikes)
    .catch(console.log);
// var firebase = require('firebase').initializeApp({
//   serviceAccount: "../../../browncountylibraryevents-firebase-adminsdk-ar0mr-71ef294f02.json",
//   databaseURL: "https://browncountylibraryevents.firebaseio.com"
// }, 'Queue');



//console.log(queueRef.path);
var instructorsRef = firebase.database().ref('instructors');
//var adminUsers = ['anne.bougie@gmail.com'];
function processLikes() {
    var queueRef = firebase.database().ref('queue');
    // queueRef.child('tasks').on('value', function(v) {
    //     console.log(v.val());
    // });
    console.log('start queue');
    var queue = new Queue(queueRef, function(data, progress, resolve, reject)  {
         progress(10);

    //     //data.user.isAdmin = !!adminUsers.find(email => email == data.user.email);
    //     //var instructorKey = data.instructorKey;
        console.log('queue processing ', data.instructorKey);
    //     //progress(100);
        // return instructorsRef.child(data.instructorKey).then(function(d) { 
        //     console.log(d.name);
        progress(90);
        var instructorRef = instructorsRef.child(data.instructorKey);
        instructorRef.once('value', function(snapshot) {
            var instructor = snapshot.val();
            var likes = instructor.likes + 1;
            instructorRef.update({likes: likes})
                .then(resolve)
                .catch(reject);
        });//.then(resolve).catch(reject);
        // }).then(resolve).catch(reject);
         
    //   // return instructorsRef.child(data.instructorKey)
    //     //   .then(function(i) {
    //     //       console.log(' instructor ', i);
    //     //     progress(20);
    //     //     return true;
    //     //   })
    //     //   .then(resolve)
    //     //   .catch(reject);
    });
}
