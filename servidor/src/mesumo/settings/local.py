from .base import *
import dj_database_url

SECRET_KEY = parser.get('keys', 'SECRETKEY')

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {

}

database_url = parser.get('default', 'database_url')
DATABASES["default"] = dj_database_url.parse(database_url)

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

