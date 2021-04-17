# Generated by Django 3.1.7 on 2021-04-17 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('watching', '0006_video_check_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='status',
            field=models.CharField(choices=[('Dropped', 'Dropped'), ('Planned', 'Planned'), ('On Hold', 'On Hold'), ('Watching', 'Watching'), ('Finished', 'Finished')], default='Finished', max_length=50),
        ),
    ]