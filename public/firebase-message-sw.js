// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.3/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const config = {
  apiKey: "AIzaSyDASa9gfqb6dYJwLrUGJFjM6WXJO2wwAQk",
  authDomain: "ti1-final-leap.firebaseapp.com",
  projectId: "ti1-final-leap",
  storageBucket: "ti1-final-leap.appspot.com",
  messagingSenderId: "206385707149",
  appId: "1:206385707149:web:ecb93d89797bcf95b68ac4",
};

firebase.initializeApp(config);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// console.log("messaging fibase:::,", messaging);

// browser body request for notification from api
// POST- https://fcm.googleapis.com/fcm/send
// Header : {
// Authorization : key = SERVER_KEY
// Authorization : key=AAAA4B37fj0:APA91bGhQdrBMnIRg132y94NhyKDKfB8OZRaWmoBm3KVSQYHGV1z456qVBGd71i4lrhWDiprnth-p6Vg9DR5VhUfVlWN2hd63hmh7ErYacIOZTNTBn6hxf_D3DelBOInvwkQbMPoftoX
// }
// body request :
// {
//     "notification": {
//         "title": "Firebase",
//         "body": "Firebase is awesome",
//         "click_action": "http://localhost:3001/"
//     },
//     "to": "d3Kbz2mHXvc0S1kIgb66J4:APA91bFFxY1e7yajZNbfOJh_o0aOcNSj6mzQWsxGPGLf9buzJ9FY7lEB7vm0tX_sT4l5fiYdKyfcsmyFbJlcvpJdJSrkPrJ1POy0eDXuM3szwctaIEvAtaDuMco6JGjfboQ81xzgBhdx"
// }

// log notfication event method
// self.addEventListener("push", async function (event) {
//   console.log("event:::", event);
//   console.log("event data:::", event.data.json());
//   event.waitUntil(
//     self.registration.showNotification("title", {
//       body: "body",
//     })
//   );
// });

// messaging.onBackgroundMessage(function (payload) {
//   console.log("Received background message ===>>>s", payload);
//   // Customize notification heres
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
