import firebase from "firebase";
// import "firebase/messaging";

const config = {
  apiKey: "AIzaSyDASa9gfqb6dYJwLrUGJFjM6WXJO2wwAQk",
  authDomain: "ti1-final-leap.firebaseapp.com",
  projectId: "ti1-final-leap",
  storageBucket: "ti1-final-leap.appspot.com",
  messagingSenderId: "206385707149",
  appId: "1:206385707149:web:ecb93d89797bcf95b68ac4",
};

const firebaseAPI = firebase.initializeApp(config);

export const firbaseAnalytic = firebaseAPI.analytics();

const messaging = firebase.messaging();

const key = "BFwqSqHJciMUpSZqdknNkuWp9Wn51ZFKGZBiBaB1yZDVO4O85nsNJMI7bt30v-eeXDRGFcorXXE3txd-xcWRguc";

export const firebaseRequestForTokenMessging = () => {
  console.log("messaging:::", messaging);
  return messaging
    .getToken({ vapidKey: key })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log("No registration token available. Request permission to generate one.");
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
export default firebase;
