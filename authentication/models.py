from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    search_google_spreadsheet_id = models.CharField(blank=True, max_length=100)
    search_google_spreadsheet_email = models.CharField(blank=True, max_length=100)
    search_google_spreadsheet_key = models.CharField(blank=True, max_length=100)
    synonyms_google_spreadsheet_id = models.CharField(blank=True, max_length=100)
    synonyms_google_spreadsheet_email = models.CharField(blank=True, max_length=100)
    synonyms_google_spreadsheet_key = models.CharField(blank=True, max_length=100)
