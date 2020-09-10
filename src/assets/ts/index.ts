import { prism, indexAutoGen, smoothScroll } from './modules/ui/index'
import { initializeApp, analytics, database, firestore } from 'firebase'
import type { firebaseConfig } from './interface/firebase'
import { config } from 'dotenv'

prism()
indexAutoGen()
smoothScroll()

config()

const fbconfig: firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}
initializeApp(fbconfig)
analytics()

/**
 * Firestore
 */
const store = firestore()
const $sendToFirestore: HTMLButtonElement = document.querySelector(
  '#SendToFirestore'
)
$sendToFirestore.addEventListener('click', async () => {
  const $username: HTMLInputElement = document.querySelector('#FirestoreName')
  const $description: HTMLInputElement = document.querySelector(
    '#FirebaseDescription'
  )
  try {
    const docRef = await store.collection('user').add({
      username: $username.value,
      description: $description.value,
    })
    console.log(`Document add: ${docRef}`)
  } catch (error) {
    console.error(`Document adding error: ${error}`)
  }
})

/**
 * Realtime Database
 */
const db = database()
const $sendToDatabase: HTMLButtonElement = document.querySelector(
  '#SendToDatabase'
)
$sendToDatabase.addEventListener('click', () => {
  const $username: HTMLInputElement = document.querySelector('#DatabaseName')
  const $description: HTMLInputElement = document.querySelector(
    'DatabaseDescription'
  )
  db.ref('users').set({
    username: $username.value,
    description: $description.value,
  })
})
