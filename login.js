
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
    import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqCov2mNwJkFND7GEN8ZMBbc1-8WvYQsI",
    authDomain: "the-brown-eyed-network.firebaseapp.com",
    projectId: "the-brown-eyed-network",
    storageBucket: "the-brown-eyed-network.appspot.com",
    messagingSenderId: "434173466288",
    appId: "1:434173466288:web:f807dc9edb6ed9fa544d75",
    measurementId: "G-KL4TS745BN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

const signInButton = document.getElementById("signInButton")
const signOutButton = document.getElementById("signOutButton");
const welcomeSpan = document.getElementById("welcome");
const message = document.getElementById("message");
// signOutButton.style.display = "none";
// message.style.display = "none";
const usersCollection = collection(firestore, "users");
let usersLocal = [];

// Retrieve all documents in the "users" collection
function RetrieveData() {    getDocs(usersCollection)
    .then((querySnapshot) => {
        // Iterate over the documents in the QuerySnapshot
        querySnapshot.forEach((doc) => {
            // Log document ID and data to the console        
            const userExists = usersLocal.some(user => user["userEmail"] === doc.data()["userEmail"]);
            if(!userExists){
                usersLocal.push(({ "userName": doc.data()["userName"] ,"userEmail": doc.data()["userEmail"], "userRole" : doc.data()["userRole"] }))
            };
    
        });


    })
    .catch((error) => {
        console.error("Error getting documents: ", error);
    });}


    

const userSignIn = async () => {
    RetrieveData();

    await signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;

            const userData = {
                userName: user["displayName"],
                userEmail: user["email"],
                userRole: "user",
            }; 



            // Add data to the "users" collection
            function checkExists(item) {
                return usersLocal.some(user => user["userEmail"] === item);
            }
            
            console.log(checkExists(userData["userEmail"]))
            if(welcomeSpan != null){welcomeSpan.innerHTML = userData["userName"];}
            RetrieveData();    

            if(!checkExists(userData["userEmail"])){
                addDoc(usersCollection, userData)
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);

                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });              
                RetrieveData();    

     
            }else{
                console.log("user already exists, wont be added to database")
            }
            let userRole= "";
            RetrieveData();    

            
            usersLocal.forEach((each)=>{
                if(each["userEmail"] === user["email"] ){
                    userRole = each["userRole"]
                }
            }
            )



            console.log("role:", usersLocal[0]["userRole"]);

            if(userRole === "admin"){
                window. location. assign("http://192.168.56.1:5500/bs-binary-admin/index.html");
            }
            if(userRole === "user"){
                window. location. assign("http://192.168.56.1:5500/bs-binary-user/index.html");
            }



        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
}

const userSignOut = async () => {
    alert("You are signed out!")
    await signOut(auth).then(() => {
        window. location. assign("http://192.168.56.1:5500/index.html");
    }).catch((error) => { })
}


if(signInButton != null){signInButton.addEventListener('click', userSignIn);}
if(signOutButton != null){signOutButton.addEventListener('click', userSignOut);
}


