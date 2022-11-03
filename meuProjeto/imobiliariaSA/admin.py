from django.contrib import admin
from imobiliariaSA.models import TipoImovel, Imovel, Pessoa, Categoria, Fotos
from nested_inline.admin import NestedTabularInline, NestedModelAdmin

class FotosInline(NestedTabularInline):
    model = Fotos
    extra = 0

class ImovelAdmin(NestedModelAdmin):
    inlines = [FotosInline]

admin.site.register(Categoria)
admin.site.register(Pessoa)
admin.site.register(TipoImovel)
admin.site.register(Imovel, ImovelAdmin)
