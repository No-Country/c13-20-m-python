import dataclasses
import datetime
import jwt
from typing import TYPE_CHECKING
from django.conf import settings
    
def create_token(user_id:int) -> str:
    payload = dict(
        id=user_id,
        exp=datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
        iat=datetime.datetime.utcnow()
    )
    token = jwt.encode(payload, settings.JWT_SECRET, algorithm="HS256")

    return token