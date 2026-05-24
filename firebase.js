/* =========================================
FIREBASE IMPORT
========================================= */
/* =========================================
SAVE PRODUCT
========================================= */

window.saveProduct =
function(data){

const productRef =
ref(db,'products');

push(productRef,data);

};

/* =========================================
AUTH IMPORT
========================================= */

import {

getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
onAuthStateChanged

}

from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

/* =========================================
AUTH INIT
========================================= */

const auth =
getAuth(app);

/* =========================================
REGISTER
========================================= */

window.registerUser =
function(){

const email =
document.getElementById(
'loginEmail'
).value;

const password =
document.getElementById(
'loginPassword'
).value;

createUserWithEmailAndPassword(
auth,
email,
password
);

alert('Berhasil daftar');

};

/* =========================================
LOGIN
========================================= */

window.loginUser =
function(){

const email =
document.getElementById(
'loginEmail'
).value;

const password =
document.getElementById(
'loginPassword'
).value;

signInWithEmailAndPassword(
auth,
email,
password
);

alert('Berhasil login');

};

/* =========================================
GOOGLE LOGIN
========================================= */

window.googleLogin =
function(){

const provider =
new GoogleAuthProvider();

signInWithPopup(
auth,
provider
);

};

/* =========================================
USER SESSION
========================================= */

onAuthStateChanged(
auth,
(user)=>{

if(user){

document.getElementById(
'userData'
).innerHTML =

`
<h3>${user.email}</h3>
<p>Login berhasil</p>
`;

}

});

/* =========================================
GET PRODUCT
========================================= */

window.getProducts =
function(callback){

const productRef =
ref(db,'products');

onValue(productRef,(snapshot)=>{

callback(snapshot.val());

});

};

/* =========================================
UPLOAD PAYMENT
========================================= */

window.savePaymentProof =
function(data){

const paymentRef =
ref(db,'payments');

push(paymentRef,data);

};

/* =========================================
CONFIG
========================================= */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjSUSuUWl6GOh_vJ-GnYV1tvguv0_pRXI",
  authDomain: "fahrixzstore.firebaseapp.com",
  databaseURL: "https://fahrixzstore-default-rtdb.firebaseio.com",
  projectId: "fahrixzstore",
  storageBucket: "fahrixzstore.firebasestorage.app",
  messagingSenderId: "1070736619563",
  appId: "1:1070736619563:web:735cdd57d5c90373e1526e",
  measurementId: "G-H7QL79SSMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
};

/* =========================================
INIT
========================================= */
/* =========================================
SAVE ORDER
========================================= */

window.saveOrder =
function(data){

const orderRef =
ref(db,'orders');

push(orderRef,data);

};

/* =========================================
GET ORDERS
========================================= */

window.getOrders =
function(callback){

const orderRef =
ref(db,'orders');

onValue(orderRef,(snapshot)=>{

callback(snapshot.val());

});

};