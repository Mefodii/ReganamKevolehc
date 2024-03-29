# Generated by Django 3.1.7 on 2021-04-17 13:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('watching', '0009_auto_20210417_1604'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagemodel',
            name='video',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='watching.video'),
        ),
        migrations.AlterField(
            model_name='season',
            name='video',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='seasons', to='watching.video'),
        ),
    ]
