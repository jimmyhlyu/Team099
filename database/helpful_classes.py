from firebase_admin import credentials, firestore
import firebase_admin

# Use a service account.
_cred = credentials.Certificate('./serviceAccounts/project099-99999-175dee9dcb2f.json')

_app = firebase_admin.initialize_app(_cred)
db = firestore.client()
