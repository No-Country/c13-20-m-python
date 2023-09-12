from datetime import datetime
from .models import Event 
from datetime import datetime, timedelta
from django.utils import timezone
from .models import Event


def set_event_state():
    
    # Obtener fecha
    now = datetime.now()

    # filtramos por state y fecha de event.date e igualamos
    events_date = Event.objects.filter(state=True, date__lte=now)
    
    count_eventFalse = 0
    format_date = now.strftime("%Y-%m-%d %H:%M")
    
    # State False cuando event.date sea igual a la fecha y hora actual
    for event in events_date:
        if event.date.strftime("%Y-%m-%d %H:%M") <= format_date:
            event.state = False 
            event.save()
            count_eventFalse +=1

    
    

