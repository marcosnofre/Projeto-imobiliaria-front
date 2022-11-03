# Generated by Django 4.1.2 on 2022-10-27 13:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('imobiliariaSA', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Fotos',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('foto', models.ImageField(blank=True, help_text='Escolha uma foto.', upload_to='media/fotos/%y/%m/%d', verbose_name='Foto')),
                ('descricao', models.TextField(help_text='Descricao', verbose_name='Descricao')),
                ('imovel', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='imobiliariaSA.imovel')),
            ],
            options={
                'verbose_name_plural': 'Fotos dos Imoveis',
                'db_table': 'tab_fotosImoveis',
                'managed': True,
            },
        ),
    ]