import dataclasses
from typing import TYPE_CHECKING
from apps.user.models import User

if TYPE_CHECKING:
    from apps.user.models import User

@dataclasses.dataclass
class UserDataClass:
    first_name:str
    last_name:str
    username:str
    email:str
    password:str = None
    id: int = None

    @classmethod
    def from_instance(cls, user:"User") -> "UserDataClass":
        return cls(
            first_name = user.first_name,
            last_name = user.last_name,
            username = user.username,
            email = user.email,
            password = user.password,
            id=user.id
        )
    
def create_user(user_dc:"UserDataClass") -> "UserDataClass":
    instance = User(
        first_name = user_dc.first_name,
        last_name = user_dc.last_name,
        email = user_dc.email,
        username = user_dc.username,
    )

    if user_dc.password is not None:
        instance.set_password(user_dc.password)

    instance.save()

    return UserDataClass.from_instance(instance)