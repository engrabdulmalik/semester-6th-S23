from django.db import models

class Drinks(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class College(models.Model):
    CollegeID=models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    strength = models.IntegerField()
    website=models.URLField()

    def __str__(self):
        return self.name
class Principal(models.Model):
    PrincipalID=models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    age = models.IntegerField()
    email=models.EmailField()
    college = models.OneToOneField(College, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
class Subject(models.Model):
    SubjectID=models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    code = models.CharField(max_length=20)
    credits=models.IntegerField()
    def __str__(self):
        return self.name

class Teacher(models.Model):
    TeacherID=models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    age = models.IntegerField()
    email=models.EmailField()
    college = models.ForeignKey(College, on_delete=models.CASCADE)
    subjects = models.ManyToManyField(Subject)

    def __str__(self):
        return self.name

class MenuItem(models.Model):
    item_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    inventory_count = models.IntegerField()

    def __str__(self):
        return self.name