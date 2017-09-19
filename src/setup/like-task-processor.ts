import {environment} from "../environments/environment";
import {auth, database, initializeApp} from 'firebase';
var Queue = require('firebase-queue');

initializeApp(environment.firebaseConfig);

auth().signInWithEmailAndPassword('testing1bougie@gmail.com', 'password')
    .then(processTasks)
    .catch(onError);

function onError(err) {
    console.error("Could not login", err);
    process.exit();
}

function processTasks() {
    const queueRef = database().ref('queue');
    
    const queue = new Queue(queueRef, function(data, progress, resolve, reject) {
        progress(25);
        let instructorKey = data.instructorKey;
        let instructorRef = database().ref(`instructors/${instructorKey}`);
        instructorRef.on('value', function (snap) {
            progress(50);
            let instructor = snap.val(); 
            let l: number = instructor.likes + 1;
            console.log(l)
            //instructorRef.update({likes: l});
            console.log('resolving');
            progress(75);
            setTimeout(function() {
                instructorRef.update({likes: l});
                progress(100);
              }, 2000);
        });
        resolve();

    });
}