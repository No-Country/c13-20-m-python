from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from firebase_admin import auth
from rest_framework.decorators import api_view

@api_view(['POST'])
@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        try:
            # Obténer los datos de registro del cuerpo de la solicitud
            email = request.data.get('email')
            password = request.data.get('password')

            # Crea el usuario en Firebase Authentication
            user = auth.create_user(
                email=email,
                password=password,
            )

            # Devuelve una respuesta exitosa
            return JsonResponse({'message': 'Usuario registrado exitosamente'}, status=201)
        except auth.AuthError as e:
            # Maneja los errores de Firebase Authentication
            return JsonResponse({'error': 'Error al registrar usuario: {}'.format(str(e))}, status=400)



@api_view(['POST'])
@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        try:
            # Obtén los datos de inicio de sesión del cuerpo de la solicitud
            email = request.data.get('email')
            password = request.data.get('password')

            # Autentica al usuario en Firebase Authentication
            user = auth.sign_in_with_email_and_password(email, password)

            # Devuelve el token de autenticación como respuesta
            return JsonResponse({'token': user['idToken']}, status=200)
        except auth.AuthError as e:
            # Maneja los errores de Firebase Authentication
            return JsonResponse({'error': 'Error al iniciar sesión: {}'.format(str(e))}, status=401)