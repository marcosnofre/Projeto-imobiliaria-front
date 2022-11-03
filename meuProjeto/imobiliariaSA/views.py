from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions, authentication
from imobiliariaSA.models import Imovel, Categoria, Pessoa, TipoImovel
from imobiliariaSA.serializers import UserSerializer, GroupSerializer, ImoveisSerializer, CategoriaSerializer, PessoaSerializer, TipoImovelSerializer

from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
import json

 #evita ataque de sessao (ataque de um clique). Nao precisando pedir o token para esse usuario abaixo
@csrf_exempt
def login(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    if body['username']:
        user = authenticate(username=body['username'], password=body['password'])
        if user:
            token = Token.objects.get_or_create(user=user)
            return JsonResponse(  {'token': token[0].key, 'id': user.id, 'usuario': user.username, 'email': user.email, 'nome': user.first_name} )

                                  
    """
    API Endpoint que permite os serviços serem visualizados ou editados.
    """

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    
    
class ImoveisViewSet(viewsets.ModelViewSet):
    queryset = Imovel.objects.all()
    serializer_class = ImoveisSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    
    
class CategoriaViewSet(viewsets.ModelViewSet):
    queryset = Categoria.objects.all()
    serializer_class = CategoriaSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    
    
class PessoaViewSet(viewsets.ModelViewSet):
    queryset = Pessoa.objects.all()
    serializer_class = PessoaSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    
    
class TipoImovelViewSet(viewsets.ModelViewSet):
    queryset = TipoImovel.objects.all()
    serializer_class = TipoImovelSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    

