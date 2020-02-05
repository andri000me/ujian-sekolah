// Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyAedQNccvGAzUrxSg0NSP-r_cgxG4TfOLs",
    authDomain: "ujian-sekolah.firebaseapp.com",
    databaseURL: "https://ujian-sekolah.firebaseio.com",
    projectId: "ujian-sekolah",
    storageBucket: "ujian-sekolah.appspot.com",
    messagingSenderId: "904992602631",
    appId: "1:904992602631:web:de75996276079a011908a2",
    measurementId: "G-F3T5PJ9W60"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

    function cek_login(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {

        return true;
      

      } else {
          window.location.href = "/";
        }
    });
  }
  cek_login();

  

   function logout(){
    firebase.auth().signOut().then(function() {
      console.log("sign out berhasil");
      window.location.href = "/";
    }).catch(function(error) {
      swal ( "Oops" ,  "Something went wrong!" ,  "error" )
    });
  }