import {database, initializeApp} from "firebase";
import {environment} from "../environments/environment";
import {libraryData} from "./library-data";

initializeApp(environment.firebaseConfig);

const eventsRef = database().ref('events');
const instructorsRef = database().ref('instructors');
const calendarRef = database().ref('scheduledEvents');
const eventInstructorLinkRef = database().ref('eventInstructorLink');
const eventCalendarLinkRef = database().ref('eventCalendarLink');
 
libraryData.events.forEach( event => {

  console.log('adding event', event.url);

  const eventRef = eventsRef.push({
      url: event.url,
      name: event.name,
      imageUrl: event.imageUrl,
      description: event.description
  });

   const eventInstructorLink = eventInstructorLinkRef.child(eventRef.key);
   const eventCalendarLink = eventCalendarLinkRef.child(eventRef.key);
   event.instructors.forEach((person:any) =>  {

     console.log('adding instructor ', person.url);

     const instructorRef = instructorsRef.push({
        name: person.name,
        url: person.url,
        imageUrl: person.imageUrl,
        startDate: new Date(person.startDate),
    });

    console.log('associating instructor to event ');
    const instructorEventLink = eventInstructorLink.child(instructorRef.key);
    instructorEventLink.set(true);

    
    const instructorToScheduledEventsRef = instructorRef.child('scheduledEvents');
    person.scheduledEvents.forEach((scheduled:any) => {

        console.log('adding calendar item ', scheduled.eventDate);

        const scheduledEventRef = calendarRef.push({
            eventDate: scheduled.eventDate,
            branch: scheduled.branch,
            room: scheduled.room,
            eventId: eventRef.key,
            instructorId: instructorRef.key
        });

        
        const instructorToScheduledEventLink =  instructorToScheduledEventsRef.child(scheduledEventRef.key);
        instructorToScheduledEventLink.set(true);

        const calendarEventLink = eventCalendarLink.child(scheduledEventRef.key);
        calendarEventLink.set(true);
    });
  });
});