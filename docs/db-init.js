var firebaseConfig = {
    apiKey: "AIzaSyA5j9wHBkzWrrvGdLZSIAdcwfKj1yIyr4c",
    authDomain: "csa-db.firebaseapp.com",
    databaseURL: "https://csa-db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "csa-db",
    storageBucket: "csa-db.appspot.com",
    messagingSenderId: "210017817440",
    appId: "1:210017817440:web:5bb9f482609abdc2498405"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref('zoom-name-list');