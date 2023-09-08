from datetime import datetime
from .models import Event 
from datetime import datetime, timedelta
from django.utils import timezone
from .models import Event


def set_event_state():
    
    # Obtener fecha
    now = datetime.now()

    # filtramos por state y fecha de event.date e igualamos
    events_date = Event.objects.filter(state=True, date__date = now.date())
    
    print(events_date)
   # print(events_date)
    
    count_eventFalse = 0
    format_date = now.strftime("%Y-%m-%d %H:%M")
    
    # State False cuando event.date sea igual a la fecha y hora actual
    for event in events_date:
        print(event.id)
        print(event.date.strftime("%Y-%m-%d %H:%M"))
        if event.date.strftime("%Y-%m-%d %H:%M") <= format_date:
            event.state = False 
            event.save()
            print(f"Evento:{event.name} state=False guardado")
            count_eventFalse +=1
        
    print(f"Hubo {count_eventFalse} eventos terminados")
    
    

