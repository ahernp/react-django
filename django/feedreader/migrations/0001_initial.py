# Generated by Django 2.0rc1 on 2017-11-21 17:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Entry",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(blank=True, max_length=2000, null=True)),
                ("link", models.CharField(max_length=2000)),
                ("description", models.TextField(blank=True, null=True)),
                ("published_time", models.DateTimeField(auto_now_add=True)),
                ("read_flag", models.BooleanField(default=False)),
            ],
            options={"ordering": ["-published_time"], "verbose_name_plural": "entries"},
        ),
        migrations.CreateModel(
            name="Feed",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(blank=True, max_length=2000, null=True)),
                ("xml_url", models.CharField(max_length=255, unique=True)),
                ("link", models.CharField(blank=True, max_length=2000, null=True)),
                ("description", models.TextField(blank=True, null=True)),
                ("published_time", models.DateTimeField(blank=True, null=True)),
                ("last_polled_time", models.DateTimeField(blank=True, null=True)),
            ],
            options={"ordering": ["title"]},
        ),
        migrations.CreateModel(
            name="Group",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=250, unique=True)),
            ],
            options={"ordering": ["name"]},
        ),
        migrations.AddField(
            model_name="feed",
            name="group",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to="feedreader.Group",
            ),
        ),
        migrations.AddField(
            model_name="entry",
            name="feed",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to="feedreader.Feed"
            ),
        ),
    ]
