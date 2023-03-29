//import the tools we need from firebase-admin
import { initializeApp, cert } from "firebase-admin/app";//for connecting to our firebase project
import { getFirestore } from "firebase-admin/firestore";//for connecting to firestore
//import credentials from a secret file
import { credentials } from "./credentials.js";
//connect to our firebase project
initializeApp ({
    credential: cert(credentials)
});
//connect to firbase Db
const db = getFirestore();
//add a product 
const candy = {
    name:'skittles',
    unitprice:3.99,
    size:'16.02',
    color:'green',
    inventory: 144,
    productNumber:7,
}
 db.collection('products').add(candy)
   .then(doc => console.log('added doc: ' + doc.id))
   .catch(err => console.log(err))