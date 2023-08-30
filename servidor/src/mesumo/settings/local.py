from .base import *
import dj_database_url


# Configuración credenciales
credentials_file = os.path.join(BASE_DIR, "settings", "credentials", "access.conf")
parser = configparser.ConfigParser()
parser.read(credentials_file)

JWT_SECRET = parser.get('keys', 'JWT_SECRET')

SECRET_KEY = parser.get('keys', 'SECRETKEY')

DEBUG = True

ALLOWED_HOSTS = []


#sqlite3 local


    #postgres produccion
database_url = parser.get('default', 'database_url') 
DATABASES = {
    'default': dj_database_url.parse(database_url)
}



# config django_allauth 
AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend', 
]

SITE_ID = 1

SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'APP': {
            'client_id': '390361596539-hbc2tjpqe1a7q9h9p78ua9ipjd3sg3qo.apps.googleusercontent.com',
            'secret': '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',
        }
    }
}


