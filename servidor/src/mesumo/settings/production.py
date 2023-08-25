
from .base import *
import dj_database_url

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get("DEBUG", "False").lower() == "true"
#


SECRET_KEY = os.environ.get("SECRET_KEY")

ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS").split(" ")

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {

}

database_url = os.environ.get("DATABASE_URL")
DATABASES["default"] = dj_database_url.parse(database_url)

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

#FIREBASE AUTHENTICATION

""" import firebase_admin
from firebase_admin import credentials

cred_path = os.path.join(BASE_DIR, 'settings', 'credentials', 'firebase-credentials.json') """
# Ruta al archivo JSON de credenciales descargado desde Firebase

""" cred = credentials.Certificate(cred_path)

# Inicializa la aplicación Firebase
firebase_admin.initialize_app(cred) """