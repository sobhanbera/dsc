import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
}

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig)

export {FirebaseApp}
