web: gunicorn {{project_name}}.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app={{project_name}} worker --loglevel=info
beat: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app={{project_name}} beat -S redbeat.RedBeatScheduler --loglevel=info
