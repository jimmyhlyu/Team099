from firebase_admin import credentials, firestore
import firebase_admin

# Use a service account.
_cred = credentials.Certificate('./serviceAccounts/web-search-tasy-0053c1cddd74.json')

_app = firebase_admin.initialize_app(_cred)
db = firestore.client()
