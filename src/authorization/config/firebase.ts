
import admin from 'firebase-admin';

import {firebaseConfig}  from './service'

const serviceAccount = firebaseConfig as admin.ServiceAccount;

export default {
    credential: admin.credential.cert(serviceAccount)
}