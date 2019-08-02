# coding: utf-8

from __future__ import absolute_import

import os

from django.apps import apps

from celery import Celery


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "{{project_name}}.settings.local")

app = Celery('{{project_name}}_tasks')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks(lambda: [n.name for n in apps.get_app_configs()])
