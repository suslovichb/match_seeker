# Generated by Django 3.1.2 on 2020-10-08 02:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='synonyms_google_spreadsheet_key',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
