from pymongo import MongoClient
import os
# Database connection specific to next-investment-api
MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://DevDB-User:mi_%40mor_es_8008135@devdb-test-cluster.kip4k.mongodb.net/?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true")
client = MongoClient(MONGO_URI)
db = client['next-investment']

