const Queue = require('firebase-queue');
const firebase = require('firebase');

firebase.initializeApp({ 
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

var instructorsRef = firebase.database().ref('instructors');

function processLikes() {
    var queueRef = firebase.database().ref('queue/likes');

    console.log('start queue');
    var queue = new Queue(queueRef, function(data, progress, resolve, reject)  {
         progress(10);

        console.log('queue processing ', data.instructorKey);
        progress(90);
        var instructorRef = instructorsRef.child(data.instructorKey);
        instructorRef.once('value', function(snapshot) {
            var instructor = snapshot.val();
            var likes = instructor.likes + 1;
            instructorRef.update({likes: likes})
                .then(resolve)
                .catch(reject);
        });
    });
}
