# Generated by Django 4.1.1 on 2022-09-08 09:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_alter_hr_db_years_of_experience'),
    ]

    operations = [
        migrations.AddField(
            model_name='hr_db',
            name='datetime_apply',
            field=models.DateTimeField(default=datetime.datetime.now),
        ),
    ]