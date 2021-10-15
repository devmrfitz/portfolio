---
title: Working with django and pytest
description: Getting django and pytest to play along well
properties:
  languages:
    - Python
  labels:
    - best-practices
    - guide
    - tutorial
repository:
  upstream: https://github.com/IgnisDa/tutorials
  location: https://github.com/IgnisDa/tutorials/tree/main/django_pytest_tutorial
---

### Introduction

Django ships with a
[default test client](https://docs.djangoproject.com/en/3.1/topics/testing/) which is
pretty powerful, but can be a pain to work with sometimes. A far better alternative is the
third party python testing library called [pytest](https://docs.pytest.org/en/stable/). In
this guide, I would like to tell you how to use django and pytest effectively, since there
aren't many tutorials out there to make this apparent.

### Basic information about the project we will setup

We will create a basic note taking app, with features like user authentication (with a
custom user model). Users will be able to save their notes on our webapp and then view them
at a later date. For the sake of brevity, I will not be using any CSS frameworks but feel
free to check out the repository which have the full project and would be made using
bootstrap.

### Setting up a basic project

We will start off by creating a virtual environment and installing some required packages,
and then starting a django project.

```bash
python -m venv .venv # create a virtual environment
source .venv/bin/activate # activate the virtual environment; command is different for Windows
pip install django pytest pytest-django validate-email requests # install required packages
django-admin startproject django_pytest_tutorial # create a new django project
cd django_pytest_tutorial/
django-admin startapp notes # create app: notes
django-admin startapp accounts # create app: accounts
```

Don't forget to add your newly created app to `INSTALLED_APPS`.

```python [django_pytest_tutorial/settings.py]
INSTALLED_APPS = [
    # Other stuff
    'accounts.apps.AccountsConfig',
    'notes.apps.NotesConfig',
]
```

<education-question :question="'How many apps have we installed?'" :options="['One', 'Three', 'Four', 'Two']" :correct="3"></education-question>

### Setting up a custom user model

Next, we define a custom user model that will handle user authentication for us. This will
allow us to add more fields to the user model than what the default
`django.contrib.auth.models.User` provides, and also use `email` as the default identifier
instead of `username`.

```python [accounts/models.py]
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext as _
from . import managers ## we will write this module shortly


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    bio = models.TextField()
    gender = models.CharField(
        max_length=140,
        null=True,
        choices=(
            ('Male', 'Male'),
            ('Female', 'Female'),
            ('Other', 'Other')
        )
    )
    birth_date = models.DateField(null=True, blank=True)
    pro = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = managers.CustomUserManager()

    def __str__(self):
        return f"{self.email}'s custom account"
```

```python [accounts/managers.py]
from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _
from validate_email import validate_email


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        if not validate_email(email):
            raise ValueError(_('Invalid email set'))
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)
```

```python [accounts/admin.py]
from django.contrib import admin
from . import models

@admin.register(models.CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    pass
```

Change the `AUTH_USER_MODEL` settings for your webapp.

```python [django_pytest_tutorial/settings.py]
AUTH_USER_MODEL = 'accounts.CustomUser'
```

Then run migrations for your newly created model using `python manage.py makemigrations`
and then migrate these changes to your database using `python manage.py migrate`.

Now create a new superuser using `python manage.py createsuperuser`. If everything went
well, you will prompted to enter an email (instead of the default username) for your
superuser. Visit the django admin to confirm everything works fine as expected.

### Creating models

Lets create a model for storing our user's notes.

```python [notes/models.py]
from django.db import models
from django.utils.translation import gettext as _

class Note(models.Model):
    title = models.CharField(
        max_length=200, help_text=_('The title for the note.')
    )
    summary = models.TextField(
        blank=True, null=True,
        help_text=_('Briefly describe your note.')
    )
    text = models.TextField(
        help_text=_('The actual note you want to write.')
    )
    owner = models.ForeignKey(
        'accounts.CustomUser', related_name='note', on_delete=models.CASCADE
    )
    created_on = models.DateTimeField(
        auto_now_add=True, help_text=_('The time when this note was created.')
    )

    def __str__(self):
        return f"Note by {self.owner}"
```

Don't forget to register your new model to the django from `notes/admin.py`.

### Testing our newly created models

We will start off by testing the `CustomUser` model and then move on to testing the `Note`
model. In your project root create a `pytest.ini` file with the following contents.

```ini [pytest.ini]
[pytest]
DJANGO_SETTINGS_MODULE = django_pytest_tutorial.settings
python_files = tests.py test_*.py *_tests.py
django_find_project = true
```

Now create the following files: `tests/__init__.py`, `tests/accounts/test_models.py` and
`tests/accounts/__init__.py`. The `__init__.py` files are required to help pytest to
discover your tests properly (try deleting these files and you will find that pytest throws
errors). Every app should have a corresponding directory in the `tests/` folder and a
`__init__.py` file in each.

**Note**: The above rule isn't enforced by pytest. I just find it convenient to modularize
the tests I write. You can use your own directory structure if you like.

```python [tests/accounts/test_models.py]
import pytest
from django.contrib.auth import get_user_model

CustomUser = get_user_model()
class TestCustomUser:
    @pytest.mark.django_db
    def test_created_version_one(self):
        CustomUser.objects.create(
            email='test@email.com', password='test-password'
        )
        assert CustomUser.objects.count() == 1
```

This is just an example of a very basic test. You would probably want to write a pytest
fixture for creating a user instance. Let's do that now.

```python [tests/conftest.py]
import pytest
from django.contrib.auth import get_user_model

CustomUser = get_user_model()
@pytest.fixture()
def create_custom_user(db):
    def _create_custom_user(*args, **kwargs):
        return CustomUser.objects.create_user(*args, **kwargs)
    return _create_custom_user
```

This fixture will create a test user with email, password etc supplied in the fixture call.
Lets write a new test using this fixture.

```python [tests/accounts/test_models.py]
class TestCustomUser:
    # Other stuff
    def test_created_version_two(self, create_custom_user):
        create_custom_user(email='test@email.com', password='test-password')
        assert CustomUser.objects.count() == 1
```

Now lets write a test which ensures that the correct error are raised if we supply
incorrect values.

```python [tests/accounts/test_models.py]
class TestCustomUser:
    # Other stuff
    def test_value_error_on_invalid_email(self, create_custom_user):
        with pytest.raises(ValueError):
            create_custom_user(email='tes.com', password='test-password')
        assert CustomUser.objects.count() == 0
```

`pytest.raises` is a context manager that confirms that the correct error is raised. If it
is not raised, the test fails. You can test this behavior by changing `ValueError` with a
different error (this error must not be a subclass of `ValueError`).

The repository also contains tests for other similar attributes.

#### Testing file uploads

You will have noticed that the `CustomUser` model contains an `image` field. Handling
fields like this, that is, file based fields, is slightly difficult since django doesn't
provide an easy way to upload files programmatically.

So, we will write a fixture to solve this problem. Creating a fixture will make it easy
to reuse and also follow the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
principle.

```python [tests/conftest.py]
# add these imports to the top of the file
import shutil
import tempfile
from pathlib import Path

import pytest
import requests
from django.core.files.uploadedfile import SimpleUploadedFile

# add this to the end of the file
@pytest.fixture()
def create_temp_upload_file(settings):
    """This creates a image file for testing and then automatically deletes it
    after the test is complete."""
    temp_dir = tempfile.gettempdir() # 1
    temp_media_root = tempfile.mkdtemp() # 1
    temp_download_dir = tempfile.mkdtemp() # 1

    file_name = Path(temp_dir) / temp_download_dir / "test.jpg" # 2

    response = requests.get("https://picsum.photos/300") # 3

    with open(file_name, "wb") as f:
        f.write(response.content) # 4
    with open(file_name, "rb") as f:
        content = f.read() # 4

    settings.MEDIA_ROOT = temp_media_root # 5

    file = SimpleUploadedFile(name=file_name, content=content) # 6
    yield file # 6

    shutil.rmtree(temp_media_root, ignore_errors=True) # 7
```

We create temporary directories here to make sure that none of the data that
we might store in the `MEDIA_ROOT` folder gets overwritten.

Let's understand the code line-by-line (as labelled by the comments in code):

1. These lines create the temporary directories required for this operation.
2. We construct the complete path where the downloaded image file will be stored.
3. We download a test image from [picsum.photos](https://picsum.photos/) and store the
   response in a variable.
4. These lines create the file that will be uploaded. You would think that we could
   have gotten away with directly using `response.content` for the file upload but
   that doesn't work (and I have no idea why).

5. <education-alert severity="warning">

   Using the `settings` [fixture](https://pytest-django.readthedocs.io/en/latest/helpers.html#settings)
   that `pytest_django` provides us, we change the location of the `MEDIA_ROOT`
   django setting effectively preventing us from accidentally overwriting the
   media (images etc.) we might have had stored in the development environment.

   </education-alert>

6. We create a `file` variable which is an instance of `SimpleUploadedFile` and then
   return it to be used by our test functions.
   [Here](https://docs.pytest.org/en/latest/fixture.html#yield-fixtures-recommended)
   is why we use `yield` instead of `return`.
7. Any statements after `yeild` will be always run as _tear down_ code so we use
   this to clear up the uploaded files. You can do the same to delete the
   downloaded image too. This is not a necessary step since most Operating
   Systems delete all contents of their [temporary
   directories](https://en.wikipedia.org/wiki/Temporary_folder) on system reboot.

Let's put this fixture to action!

```python [tests/accounts/test_models.py]
class TestCustomUser:
    # Other stuff
    def test_uploaded_image_path(self, create_custom_user, create_temp_upload_file):
        image = create_temp_upload_file
        user = create_custom_user(email="test@email.com", password="dummy", image=image)
        assert CustomUser.objects.count() == 1
        assert user.image.url == "/users/test.jpg"
```

Simple enough. We first use our new fixture to get an image. Then we
create a `CustomUser` object with the `image`. Next we assert that the user was
indeed created by counting the total number of users in the database. Then we
make sure that the path where the image was uploaded to was correct.
