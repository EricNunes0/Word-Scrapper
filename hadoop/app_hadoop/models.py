from django.db import models

class CsvModels(models.Model):
    id = models.PositiveIntegerField(default=0, primary_key=True)
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    email = models.CharField(max_length=100)