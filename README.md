# Django React Boilerplate

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
[![License: MIT](https://img.shields.io/github/license/vintasoftware/django-react-boilerplate.svg)](LICENSE.txt)

## About
A [Django](https://www.djangoproject.com/) project boilerplate/template with a multitude of state-of-the-art libraries and tools. If pairing Django with React is a possibility for your project or spinoff, this is the best solution available. Save time with tools like:
- [React](https://facebook.github.io/react/), for building interactive UIs
- [Poetry](https://python-poetry.org/), for managing the environment and its dependencies
- [django-js-reverse](https://github.com/vintasoftware/django-js-reverse), for generating URLs on JS
- [React Bootstrap](https://react-bootstrap.github.io/), for responsive styling
- [Webpack](https://webpack.js.org/), for bundling static assets
- [Celery](https://docs.celeryproject.org/), for background worker tasks
- [WhiteNoise](http://whitenoise.evans.io/en/stable/) with [brotlipy](https://github.com/python-hyper/brotlipy), for efficient static files serving
- [prospector](https://prospector.landscape.io/en/master/) and [ESLint](https://eslint.org/) with [pre-commit](https://pre-commit.com/) for automated quality assurance (does not replace proper testing!)

For continuous integration, a [Github Action](https://github.com/features/actions) configuration `.github/workflows/main.yml` is included.

Also, includes a Render.com `render.yaml` and a working Django `production.py` settings, enabling easy deployments with ['Deploy to Render' button](https://render.com/docs/deploy-to-render). The `render.yaml` includes the following:
- PostgreSQL, for DB
- Redis, for Celery

## Features Catalogue

### Frontend
- `react` for building interactive UIs
- `react-dom` for rendering the UI
- `react-router` for page navigation
- `webpack` for bundling static assets
- `webpack-bundle-tracker` for providing the bundled assets to Django
- Styling
  - `bootstrap` for providing responsive stylesheets
  - `react-bootstrap` for providing components built on top of Bootstrap CSS without using plugins
  - `sass` for providing compatibility with SCSS files
- State management and backend integration
  - `axios` for performing asynchronous calls
  - `cookie` for easy integration with Django using the `csrftoken` cookie
  - `@reduxjs/toolkit` for easy state management across the application with the whole toolkit including devtools for inspecting and debugging Redux via browser and ability to run thunks for interacting with the Redux store through asynchronous logic
  - `connected-react-router` for integrating Redux with React Router
  - `history` for providing browser history to Connected React Router
  - `react-redux` for integrating React with Redux
  - Utilities
  - `lodash` for general utility functions
  - `classnames` for easy working with complex CSS class names on components
  - `prop-types` for improving QoL while developing providing basic type-checking for React props
  - `react-refresh` for improving QoL while developing through automatic browser refreshing

### Backend
- `django` for building backend logic using Python
- `djangorestframework` for building a REST API on top of Django
- `django-webpack-loader` for rendering the bundled frontend assets
- `django-js-reverse` for easy handling of Django URLs on JS
- `psycopg2` for using PostgreSQL database
- `sentry-sdk` for error monitoring
- `python-decouple` for reading environment variables on settings files
- `celery` for background worker tasks
- `django-debreach` for additional protection against BREACH attack
- `whitenoise` and `brotlipy` for serving static assets

## Share your project!
Several people have leveraged our boilerplate to start spinoffs or to boost their efforts in the challenging pursuit of securing funding. Starting with a solid foundation allows you to create more resilient products and focus on what really matters: discovering and delivering value to your customers. If you are one of those people, we're eager to help you even more! We can spread the word about your project across our social media platforms, giving you access to a broader audience.

Send us an email at contact@vintasoftware.com telling us a bit more about how our boilerplate helped you boost your project.


## Project bootstrap [![main](https://github.com/chocoelho/django-react-boilerplate/actions/workflows/main.yml/badge.svg)](https://github.com/chocoelho/django-react-boilerplate/actions/workflows/main.yml) [![Known Vulnerabilities](https://snyk.io/test/github/vintasoftware/django-react-boilerplate/badge.svg)](https://snyk.io/test/github/vintasoftware/django-react-boilerplate)
- [ ] Make sure you have Python 3.11 installed
- [ ] Install Django with `pip install django`, to have the `django-admin` command available.
- [ ] Open the command line and go to the directory you want to start your project in.
- [ ] Start your project using:
    ```
    django-admin startproject theprojectname --extension py,yml,json --name Procfile,Dockerfile,docker-compose.yml,README.md,.env.example,.gitignore,Makefile,render.yaml --template=https://github.com/vintasoftware/django-react-boilerplate/archive/boilerplate-release.zip
    ```
    Alternatively, you may start the project in the current directory by placing a `.` right after the project name, using the following command:
    ```
    django-admin startproject theprojectname . --extension py,yml,json --name Procfile,Dockerfile,docker-compose.yml,README.md,.env.example,.gitignore,Makefile,render.yaml --template=https://github.com/vintasoftware/django-react-boilerplate/archive/boilerplate-release.zip
    ```
In the next steps, always remember to replace theprojectname with your project's name
- [ ] Above: don't forget the `--extension` and `--name` params!
- [ ] Change the first line of README to the name of the project
- [ ] Add an email address to the `ADMINS` settings variable in `{{project_name}}/backend/{{project_name}}/settings/base.py`
- [ ] Change the `SERVER_EMAIL` to the email address used to send e-mails in `{{project_name}}/backend/{{project_name}}/settings/production.py`

After completing ALL of the above, remove this `Project bootstrap` section from the project README. Then follow `Running` below.

## Running
### Tools
- Setup [editorconfig](http://editorconfig.org/), [prospector](https://prospector.landscape.io/en/master/) and [ESLint](http://eslint.org/) in the text editor you will use to develop.

### Setup
- Inside the `backend` folder, do the following:
  - Create a copy of `{{project_name}}/settings/local.py.example`:  
  `cp {{project_name}}/settings/local.py.example {{project_name}}/settings/local.py`
  - Create a copy of `.env.example`:
  `cp .env.example .env`

### If you are using Docker:
- Open the `/backend/.env` file on a text editor and uncomment the line `DATABASE_URL=postgres://{{project_name}}:password@db:5432/{{project_name}}`
- Open a new command line window and go to the project's directory
- Run the initial setup:
  `make docker_setup`
- Create the migrations for `users` app:  
  `make docker_makemigrations`
- Run the migrations:
  `make docker_migrate`
- Run the project:
  `make docker_up`
- Access `http://localhost:8000` on your browser and the project should be running there
  - When you run `make docker_up`, some containers are spinned up (frontend, backend, database, etc) and each one will be running on a different port
  - The container with the React app uses port 3000. However, if you try accessing it on your browser, the app won't appear there and you'll probably see a blank page with the "Cannot GET /" error
  - This happens because the container responsible for displaying the whole application is the Django app one (running on port 8000). The frontend container is responsible for providing a bundle with its assets for [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) to consume and render them on a Django template
- To access the logs for each service, run:
  `make docker_logs <service name>` (either `backend`, `frontend`, etc)
- To stop the project, run:
  `make docker_down`

#### Adding new dependencies
- Open a new command line window and go to the project's directory
- Update the dependencies management files by performing any number of the following steps:
  - To add a new **frontend** dependency, run `npm install <package name> --save`
    > The above command will update your `package.json`, but won't make the change effective inside the container yet
  - To add a new **backend** dependency, run `docker compose run backend --rm bash` to open an interactive shell and then run `poetry add {dependency}` to add the dependency. If the dependency should be only available for development user append `-G dev` to the command.
  - After updating the desired file(s), run `make docker_update_dependencies` to update the containers with the new dependencies
  > The above command will stop and re-build the containers in order to make the new dependencies effective

### If you are not using Docker:
#### Setup and run the frontend app
- Open a new command line window and go to the project's directory
- `npm install`
- `npm run start`
  - This is used to serve the frontend assets to be consumed by [django-webpack-loader](https://github.com/django-webpack/django-webpack-loader) and not to run the React application as usual, so don't worry if you try to check what's running on port 3000 and see an error on your browser

#### Setup the backend app
- Open the `/backend/.env` file on a text editor and do one of the following:
  - If you wish to use SQLite locally, uncomment the line `DATABASE_URL=sqlite:///backend/db.sqlite3`
  - If you wish to use PostgreSQL locally, uncomment and edit the line `DATABASE_URL=postgres://{{project_name}}:password@db:5432/{{project_name}}` in order to make it correctly point to your database URL
    - The url format is the following: `postgres://USER:PASSWORD@HOST:PORT/NAME`
  - If you wish to use another database engine locally, add a new `DATABASE_URL` setting for the database you wish to use
    - Please refer to [dj-database-url](https://github.com/jacobian/dj-database-url#url-schema) on how to configure `DATABASE_URL` for commonly used engines
- Open a new command line window and go to the project's directory
- run `poetry install`

#### Run the backend app
- With the virtualenv enabled, go to the `backend` directory
- Create the migrations for `users` app: 
  `poetry run python manage.py makemigrations`
- Run the migrations:
  `poetry run python manage.py migrate`
- Run the project:
  `poetry run python manage.py runserver`
- Open a browser and go to `http://localhost:8000` to see the project running

#### Setup Celery
- `poetry run python manage.py celery`

#### Mailhog
- For development, we use Mailhog to test our e-mail workflows, since it allows us to inspect the messages to validate they're correctly built
  - Docker users already have it setup and running once they start the project
  - For non-Docker users, please have a look [here](https://github.com/mailhog/MailHog#installation) for instructions on how to setup Mailhog on specific environments
> The project expects Mailhog SMTP server to be running on port 1025, you may alter that by changing `EMAIL_PORT` on settings


### Testing
`make test`

Will run django tests using `--keepdb` and `--parallel`. You may pass a path to the desired test module in the make command. E.g.:

`make test someapp.tests.test_views`

### Adding new pypi libs
To add a new **backend** dependency, run `poetry add {dependency}`. If the dependency should be only available for development user append `-G dev` to the command. 

## Github Actions

To enable Continuous Integration through Github Actions, we provide a `proj_main.yml` file. To connect it to Github you need to rename it to `main.yml` and move it to the `.github/workflows/` directory. 

You can do it with the following commands:

```bash
mkdir -p .github/workflows
mv proj_main.yml .github/workflows/main.yml
```

## Deployment 
### Setup
This project comes with an `render.yaml` file, which can be used to create an app on Render.com from a GitHub repository.

Before deploying, please make sure you've generated an up-to-date `poetry.lock` file containing the Python dependencies. This is necessary even if you've used Docker for local runs. Do so by following [these instructions](#setup-the-backend-app).

After setting up the project, you can init a repository and push it on GitHub. If your repository is public, you can use the following button:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

If you are in a private repository, access the following link replacing `$YOUR_REPOSITORY_LINK$` with your repository link.

- `https://render.com/deploy?repo=$YOUR_REPOSITORY_LINK$`

Remember to fill the `ALLOWED_HOSTS` with the URL of your app, the default on Render.com is `appname.onrender.com`. Replace `appname` with your Render.com app name.

### Configuring Celery

As there aren't free plans for Workers in Render.com, the configuration for Celery workers/beat will be commented by default in the `render.yaml`. This means celery won't be available by default. 

Uncommenting the worker configuration lines on `render.yaml` will imply in costs.

### SendGrid

To enable sending emails from your application you'll need to have a valid SendGrid account and also a valid verified sender identity. After finishing the validation process you'll be able to generate the API credentials and define the `SENDGRID_USERNAME` and `SENDGRID_PASSWORD` envvars on Render.com. 

These variables are required for your application to work on Render.com since it's pre-configured to automatically email admins when the application is unable to handle errors gracefully. 

### Sentry

[Sentry](https://sentry.io) is already set up on the project. For production, add `SENTRY_DSN` environment variable on Render.com, with your Sentry DSN as the value.

You can test your Sentry configuration by deploying the boilerplate with the sample page and clicking on the corresponding button.

### Sentry source maps for JS files

The `render_build.sh` script has a step to push Javascript source maps to Sentry, however some environment variables need to be set on Render.com.

The environment variables that need to be set are:

- `SENTRY_ORG` - Name of the Sentry Organization that owns your Sentry Project.
- `SENTRY_PROJECT_NAME` - Name of the Sentry Project.
- `SENTRY_API_KEY` - Sentry API key that needs to be generated on Sentry. [You can find or create authentication tokens within Sentry](https://sentry.io/api/).

After enabling dyno metadata and setting the environment variables, your next Render.com Deploys will create a release on Sentry where the release name is the commit SHA, and it will push the source maps to it.

## Linting
- Manually with `poetry run prospector` and `npm run lint` on project root.
- During development with an editor compatible with prospector and ESLint.

## Pre-commit hooks
- Run `poetry run pre-commit install` to enable the hook into your git repo. The hook will run automatically for each commit.
- Run `git commit -m "Your message" -n` to skip the hook if you need.

## Opinionated Settings
Some settings defaults were decided based on Vinta's experiences. Here's the rationale behind them:

### `CELERY_ACKS_LATE = True`
We believe Celery tasks should be idempotent. So for us it's safe to set `CELERY_ACKS_LATE = True` to ensure tasks will be re-queued after a worker failure. Check Celery docs on ["Should I use retry or acks_late?"](https://docs.celeryproject.org/en/latest/faq.html#should-i-use-retry-or-acks-late) for more info.

## Contributing

If you wish to contribute to this project, please first discuss the change you wish to make via an [issue](https://github.com/vintasoftware/django-react-boilerplate/issues).

Check our [contributing guide](https://github.com/vintasoftware/django-react-boilerplate/blob/master/CONTRIBUTING.md) to learn more about our development process and how you can test your changes to the boilerplate.

## Commercial Support
[![alt text](https://avatars2.githubusercontent.com/u/5529080?s=80&v=4 "Vinta Logo")](https://www.vinta.com.br/)

This project is maintained by [Vinta Software](https://www.vinta.com.br/) and is used in products of Vinta's clients. We are always looking for exciting work, so remember to contact us at contact@vintasoftware.com if you want to share your work with a broader audience. 