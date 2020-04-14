
// const firebase = require("/off");
const firebaseConfig = {
    apiKey: "AIzaSyBxAaYmjGtvtik079-sCjpRIwRNyDn6nHc",
    authDomain: "covid-id-6cc8a.firebaseapp.com",
    databaseURL: "https://covid-id-6cc8a.firebaseio.com",
    projectId: "covid-id-6cc8a",
    storageBucket: "covid-id-6cc8a.appspot.com",
    messagingSenderId: "647213455277",
    appId: "1:647213455277:web:2ddc94066695fd36503324",
    measurementId: "G-160PVSNFL8"
  };

firebase.initializeApp(firebaseConfig);

//Get elements

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');


//add login event
btnLogin.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise
        .catch(e => console.log(e.message));

});

btnLogout.addEventListener('click', e =>{
    firebase.auth().signOut();
});

//add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
    }else{
        console.log('not logged in');
        btnLogout.classList.add('hide');
    }

});

// add signup event
btnSignUp.addEventListener('click', e => {
    //gets new email and password check if real email
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
    promise
        .catch(e => console.log(e.message));


});
//add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
    } else {
        console.log("not logged in");
    }

})

//Handle Account Status
firebase.auth().onAuthStateChanged(user => {
    if(user) {
      window.location = 'views/user.handlebars'; //After successful login, user will be redirected to user.html
    }







// var document = require("index.html")
// document.getElementById("button").onclick;











// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// const auth = firebase.auth();
// auth.signInWithEmailAndPassword(email, pass);
// //returns a promise where user can be resolved
// auth.createUserWithEmailAndPassword(email, pass);
// //will create user and log them in)
// //async resolves users data, but does only once.
// auth.onAuthStateChanged(firebaseUser => { });


// //intializing firebase ui 
// ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     // Other config options...
//   });
  
//   ui.start('#firebaseui-auth-container', {
//     signInOptions: [
//       {
//         provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
//       }
//     ],
//     // Other config options...
//   });
  
//   // Is there an email link sign-in?
//   if (ui.isPendingRedirect()) {
//     ui.start('#firebaseui-auth-container', uiConfig);
//   }
//   // This can also be done via:
//               // if ((firebase.auth().isSignInWithEmailLink(window.location.href)) {
//               //   ui.start('#firebaseui-auth-container', uiConfig);
//               //   console.log(ui)
//               // });
  
  
//   // To kick off the FirebaseUI sign in flow, initialize the FirebaseUI instance by passing the underlying Auth instance.
  
//   // Initialize the FirebaseUI Widget using Firebase.
//   // var ui = new firebaseui.auth.AuthUI(firebase.auth());
  
//   var uiConfig = {
//     callbacks: {
//       signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//         // User successfully signed in.
//         // Return type determines whether we continue the redirect automatically
//         // or whether we leave that to developer to handle.
//         return true;
//       },
//       uiShown: function() {
//         // The widget is rendered.
//         // Hide the loader.
//         document.getElementById('loader').style.display = 'none';
//       }
//     },
//     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//     signInFlow: 'popup',
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//       // Leave the lines as is for the providers you want to offer your users.
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//       firebase.auth.GithubAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     // Terms of service url.
//     tosUrl: '<your-tos-url>',
//     // Privacy policy url.
//     privacyPolicyUrl: '<your-privacy-policy-url>'
//   };
  
//   // The start method will wait until the DOM is loaded.
//   ui.start('#firebaseui-auth-container', uiConfig);
  
  
//   var actionCodeSettings = {
//     // URL you want to redirect back to. The domain (www.example.com) for this
//     // URL must be whitelisted in the Firebase Console.
//     url: 'https://www.example.com/finishSignUp?cartId=1234',
//     // This must be true.
//     handleCodeInApp: true,
//     iOS: {
//       bundleId: 'com.example.ios'
//     },
//     android: {
//       packageName: 'com.example.android',
//       installApp: true,
//       minimumVersion: '12'
//     },
//     dynamicLinkDomain: 'example.page.link'
//   };
  
//   // Temp variable to hold the anonymous user data if needed.
//   var data = null;
//   // Hold a reference to the anonymous current user.
//   var anonymousUser = firebase.auth().currentUser;
//   ui.start('#firebaseui-auth-container', {
//     // Whether to upgrade anonymous users should be explicitly provided.
//     // The user must already be signed in anonymously before FirebaseUI is
//     // rendered.
//     autoUpgradeAnonymousUsers: true,
//     signInSuccessUrl: '<url-to-redirect-to-on-success>',
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       firebase.auth.PhoneAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//       // signInFailure callback must be provided to handle merge conflicts which
//       // occur when an existing credential is linked to an anonymous user.
//       signInFailure: function(error) {
//         // For merge conflicts, the error.code will be
//         // 'firebaseui/anonymous-upgrade-merge-conflict'.
//         if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
//           return Promise.resolve();
//         }
//         // The credential the user tried to sign in with.
//         var cred = error.credential;
//         // Copy data from anonymous user to permanent user and delete anonymous
//         // user.
//         // ...
//         // Finish sign-in after data is copied.
//         return firebase.auth().signInWithCredential(cred);
//       }
//     }
//   });
  
//   firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
//     .then(function() {
//       // The link was successfully sent. Inform the user.
//       // Save the email locally so you don't need to ask the user for it again
//       // if they open the link on the same device.
//       window.localStorage.setItem('emailForSignIn', email);
//     })
//     .catch(function(error) {
//       // Some error occurred, you can inspect the code: error.code
//     });
  
//   // Confirm the link is a sign-in with email link.
//   if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
//     // Additional state parameters can also be passed via URL.
//     // This can be used to continue the user's intended action before triggering
//     // the sign-in operation.
//     // Get the email if available. This should be available if the user completes
//     // the flow on the same device where they started it.
//     var email = window.localStorage.getItem('emailForSignIn');
//     if (!email) {
//       // User opened the link on a different device. To prevent session fixation
//       // attacks, ask the user to provide the associated email again. For example:
//       email = window.prompt('Please provide your email for confirmation');
//     }
//     // The client SDK will parse the code from the link for you.
//     firebase.auth().signInWithEmailLink(email, window.location.href)
//       .then(function(result) {
//         // Clear email from storage.
//         window.localStorage.removeItem('emailForSignIn');
//         // You can access the new user via result.user
//         // Additional user info profile not available via:
//         // result.additionalUserInfo.profile == null
//         // You can check if the user is new or existing:
//         // result.additionalUserInfo.isNewUser
//       })
//       .catch(function(error) {
//         // Some error occurred, you can inspect the code: error.code
//         // Common errors could be invalid email and invalid or expired OTPs.
//       });
//   }
  