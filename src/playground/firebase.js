import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyDEPNiCKWEEJtguj01uJL_ILAh61bV9M5M",
    authDomain: "expensify-34591.firebaseapp.com",
    databaseURL: "https://expensify-34591.firebaseio.com",
    projectId: "expensify-34591",
    storageBucket: "expensify-34591.appspot.com",
    messagingSenderId: "671851909002"
}

firebase.initializeApp(config)

const database = firebase.database()

// SUBSCRIPTION: ON CHILD REMOVE
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// SUBSCRIPTION: ON CHILD CHANGE
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// SUBSCRIPTION: ON CHILD ADDED
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val())
})

// GET ARRAY

/* database.ref('expenses')
.on('value', (snapshot) => {
    const expenses = []

    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        })
    })

    console.log(expenses)
}) */

// PUSH

/* database.ref('expenses').push({
    description: 'papitas lays',
    note: 'son puro aire',
    amount: 60,
    createdAt: 1500000
})

database.ref('expenses').push({
    description: 'chocolate',
    note: 'aguante ser gordo',
    amount: 180,
    createdAt: 2000000
})

database.ref('expenses').push({
    description: 'Cafe con leche',
    note: 'de los de Crucks',
    amount: 65,
    createdAt: 3000000
}) */

// SUBSCRIBE

/* const onValueChange = database.ref().on('value', (snapshot) => {
    console.log(snapshot.val())
}, (e) => {
    console.log('Error: could not fetch data', e)
})

setTimeout(() => {
    database.ref('age').set(28)
}, 3500)

setTimeout(() => {
    database.ref().off('value',onValueChange)
}, 7000)

setTimeout(() => {
    database.ref('age').set(27)
}, 10500) */


// CREATE

/* database.ref().set({
    name: 'Lisandro Pastinante',
    age: 27,
    stressLevel: 4,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    location: {
        city: 'Rosario',
        country: 'Argentina'
    }
}).then(() => {
    console.log('data is saved')
}).catch((e) => {
    console.log(e)
})

// READ

/* database.ref()
.once('value')
.then((snapshot) => {
    const val = snapshot.val()
    console.log(val)
})
.catch((e) => {

}) */

// UPDATE

/* database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
}) */

// DELETE

/* database.ref()
.remove()
.then(() => {
    console.log('Data was removed')
}).catch((e) => {
    console.log(e)
}) */