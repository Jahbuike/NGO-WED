
from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=100) # e.g., "Healthcare" or "Water"
    image = models.ImageField(upload_to='projects/')
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# Create your models here.
