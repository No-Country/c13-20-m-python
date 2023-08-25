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

DATABASES = {

}

database_url = parser.get('default', 'database_url')
DATABASES["default"] = dj_database_url.parse(database_url)

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

