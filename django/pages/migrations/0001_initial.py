# Generated by Django 2.0rc1 on 2017-11-18 09:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Page',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250)),
                ('slug', models.SlugField(max_length=250, unique=True)),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Time Updated')),
                ('published', models.DateField(blank=True, help_text='dd/mm/yyyy', null=True, verbose_name='Date Published')),
                ('content_type', models.CharField(choices=[('homepage', 'Homepage'), ('markdown', 'Markdown'), ('table', 'Table'), ('gallery', 'Gallery')], default='markdown', max_length=10)),
                ('content', models.TextField(blank=True, verbose_name='Page content')),
                ('parent', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='pages.Page')),
            ],
            options={
                'ordering': ['title'],
            },
        ),
    ]
