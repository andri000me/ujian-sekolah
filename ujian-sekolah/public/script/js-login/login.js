//  $(function () {
//   $("#verified-alert").hide();
//     var config = {
//     apiKey: "AIzaSyAFThvhXDXQNaMbGU3Hqgbaiab4P92UY4c",
//     authDomain: "e-bookdigital.firebaseapp.com",
//     databaseURL: "https://e-bookdigital.firebaseio.com",
//     projectId: "e-bookdigital",
//     storageBucket: "e-bookdigital.appspot.com",
//     messagingSenderId: "939307484689",
//     appId: "1:939307484689:web:1ebe74f302c751b85b53b0",
//     measurementId: "G-V2G0WLPX3W"
//     };
//   firebase.initializeApp(config);
//   const auth = firebase.auth();
//   var providerGoogle = new firebase.auth.GoogleAuthProvider();
//   var facebookAccount = new firebase.auth.FacebookAuthProvider();

//   auth.onAuthStateChanged(function(cek_user) {
//     if (cek_user) {
//       var user = firebase.auth().currentUser;
//       var email= user.email;
//       var emailVerified = user.emailVerified;
//       if (!emailVerified){
//         $("#verified-alert").fadeIn("slow");
//       }else{
//         window.location.href = "/ujian/index.html";
//       }
//     } else {
//       console.log("Status belum diverifikasi");
//     }
//   });

//   $( "#btn-signup" ).click(function(e) {
//     e.preventDefault();
//     var email = $('#txtEmail-formLogin').val();
//     var password = $('#txtPassword-formLogin').val();
//     auth.createUserWithEmailAndPassword(email, password).then(function () {
//       console.log("Pendaftaran Berhasil");
//       var user = auth.currentUser;
//       user.sendEmailVerification().then(function() {
//         swal("Verification Email", "Buka e-mail anda untuk melakukan proses verifikasi akun pendaftaran", "success");
//         logout();
//       }, function(error) {
//         swal ( "Oops" ,  "Verifikasi e-mail tidak terkirim" ,  "error" )
//       });
//     }).catch(function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       if(error != null){
//         $( ".field-login-password" ).addClass( "has-error" );
//         $( ".field-login-email" ).addClass( "has-error" );
//         $( ".field-login-email>.help-block" ).html( errorCode );
//       }
//     });
//   });

//   $( "#btn-signin" ).click(function(e) {
//     e.preventDefault();
//     var email = $('#txtEmail-formLogin').val();
//     var password = $('#txtPassword-formLogin').val();
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       $( ".field-login-password" ).addClass( "has-error" );
//       $( ".field-login-email" ).addClass( "has-error" );
//       $( ".field-login-email>.help-block" ).html( errorCode );
//     });
//   });

  
//   $( "#btn-logout" ).click(function(e) {
//     logout();
//   });

//   // $( "#btn-login-google" ).click(function(e) {
//   //   e.preventDefault();
//   //   firebase.auth()

//   //   .signInWithPopup(providerGoogle).then(function(result) {
//   //     var token = result.credential.accessToken;
//   //     var user = result.user;

//   //     console.log(token)
//   //     console.log(user)
//   //   }).catch(function(error) {
//   //     var errorCode = error.code;
//   //     var errorMessage = error.message;

//   //     console.log(error.code)
//   //     console.log(error.message)
//   //   });
//   // });

//   //  $( "#btn-login-facebook" ).click(function(e) {
//   //   e.preventDefault();
//   //   firebase.auth()

//   //   .signInWithPopup(facebookAccount).then(function(result) {
//   //     var token = result.credential.accessToken;
//   //     var user = result.user;

//   //     console.log(token)
//   //     console.log(user)

//   //     window.location.href = "/ujian";
//   //     console.log("Masuk Facebook Berhasil !");

//   //   }).catch(function(error) {
//   //     var errorCode = error.code;
//   //     var errorMessage = error.message;

//   //     console.log("Masuk Facebook Gagal !");
//   //     console.log(error.code)
//   //     console.log(error.message)
//   //   });
//   // });

//   function logout(){
//     firebase.auth().signOut().then(function() {
//       console.log("Sign Out Berhasil");
//       $("#verified-alert").hide();
//     }).catch(function(error) {
//       swal ( "Oops" ,  "Something went wrong!" ,  "error" )
//     });
//   }
// }())









// Initialize Firebase
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
  firebase.initializeApp(config);
  const auth = firebase.auth();

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.

//     window.location.href = "/ujian/index.html";
 
//     var user = firebase.auth().currentUser;

//     if(user != null){

//       var email_id = user.email;
//       document.getElementById("user_para").innerHTML = " Status Login : " + email_id;
       
//     }

//   } else {
//     // No user is signed in.
//     window.location.href = "/";
//   }
// });

  auth.onAuthStateChanged(function(cek_user) {
    if (cek_user) {
      var user = firebase.auth().currentUser;

        window.location.href = "/ujian/index.html";
      
    } else {
      //tidak ada user terotentikasi

      console.log("Status belum diverifikasi");
    }

     
  });

  $( "#btn-signin" ).click(function(e) {
    e.preventDefault();
    var email = $('#txtEmail-formLogin').val();
    var password = $('#txtPassword-formLogin').val();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      $( ".field-login-password" ).addClass( "has-error" );
      $( ".field-login-email" ).addClass( "has-error" );
      $( ".field-login-email>.help-block" ).html( errorCode );
    });
  });

// function logout(){
//   firebase.auth().signOut();
// }

  $( "#btn-logout" ).click(function(e) {
    logout();
  });
