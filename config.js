import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBinMRhh7ic6N3CzF1OQEOj6HlWmmlle_c',
  authDomain: 'school-attendance-app-a8f22.firebaseapp.com',
  databaseURL:
    'https://school-attendance-app-a8f22-default-rtdb.firebaseio.com',
  projectId: 'school-attendance-app-a8f22',
  storageBucket: 'school-attendance-app-a8f22.appspot.com',
  messagingSenderId: '415902932102',
  appId: '1:415902932102:web:b20f0e3e72ee7ad60ec507',
};

const app = firebase.initializeApp(firebaseConfig);
export default firebase.database();