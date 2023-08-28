from rest_framework import routers
#from .eventapi import EventViewSet
from .views import EventViewSet


router = routers.DefaultRouter()

router.register('events', EventViewSet, 'events')

urlpatterns = router.urls
