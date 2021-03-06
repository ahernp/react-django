# ahernp.com

Implementation of website [ahernp.com](https://ahernp.com)
using Django 2, Python 3 & React with Django REST framework.

Running inside docker containers.

## Development Environment

### Setup

Populate `.env` file in this directory with values:

```
ADMIN_NAME=
ADMIN_EMAIL=
DJANGO_SECRET_KEY=
AHERNP_DATABASE_NAME=
AHERNP_DATABASE_USER=
AHERNP_DATABASE_PASSWORD=
POSTGRES_PASSWORD=
```

then run:

1. `sudo docker-compose up`
2. `sudo docker-compose exec react npm run build`
3. `python3 setup_app.py`

### Usage

`sudo docker-compose up`

Visit http://localhost:3000/ to see output of `npm start` React script.

http://localhost runs the most recent production version, created by `sudo docker-compose exec react npm run build`
