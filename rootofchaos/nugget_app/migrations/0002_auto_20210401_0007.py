# Generated by Django 2.2.4 on 2021-04-01 00:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('nugget_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='nugget',
            name='file',
        ),
        migrations.RemoveField(
            model_name='nugget',
            name='media_type',
        ),
        migrations.AlterField(
            model_name='nugget',
            name='text',
            field=models.TextField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='nugget',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='nuggets', to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='File',
        ),
        migrations.DeleteModel(
            name='MediaType',
        ),
    ]