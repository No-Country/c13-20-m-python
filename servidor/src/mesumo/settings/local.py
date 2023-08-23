from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

#FIREBASE AUTHENTICATION

import firebase_admin
from firebase_admin import credentials

cred_path = os.path.join(BASE_DIR, 'settings', 'credentials', 'firebase-credentials.json')
# Ruta al archivo JSON de credenciales descargado desde Firebase

cred = credentials.Certificate(cred_path)

# Inicializa la aplicación Firebase
firebase_admin.initialize_app(cred)