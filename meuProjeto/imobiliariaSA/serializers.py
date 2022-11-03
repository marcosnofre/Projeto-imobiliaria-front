from django.contrib.auth.models import User, Group
from imobiliariaSA.models import Imovel, Fotos, Categoria, Pessoa, TipoImovel
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']
        

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
        

class FotosImoveisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fotos
        fields = ['id', 'descricao', 'foto']
        
        
class ImoveisSerializer(serializers.ModelSerializer):
    fotos = FotosImoveisSerializer(many=True, read_only=False, required=False)
    
    class Meta:
        model = Imovel
        fields = ['nome', 'descricao','fotos', 'categoria', 'tipoImovel']
        
        
class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['nome', 'status']
        

class PessoaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pessoa
        fields = ['nome', 'dataNascimento', 'sexo', 'avatar', 'status']
        
class TipoImovelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoImovel
        fields = ['nome']