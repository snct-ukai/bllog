import * as admin from "firebase-admin";
import * as serviceAccount from "../../blog-snct-ukai-firebase-adminsdk-l7zdl-947023c7d0.json";

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url
}

let adminApp;

if(!admin.apps.length){
  adminApp = admin.initializeApp({credential: admin.credential.cert(params)});
}

export const firestore = admin.firestore(adminApp);