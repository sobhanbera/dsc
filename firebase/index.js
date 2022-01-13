import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: 'AIzaSyAWdFmR27GUpsaXaRMMMQx5_s3Kne6eHbc',
    authDomain: 'gdsc-ghrce.firebaseapp.com',
    projectId: 'gdsc-ghrce',
    storageBucket: 'gdsc-ghrce.appspot.com',
    messagingSenderId: '589020854613',
    appId: '1:589020854613:web:8df5e2e53b2c15a21017dc',
    measurementId: 'G-3D6TB6HF1X',
}

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig)

export {FirebaseApp}
