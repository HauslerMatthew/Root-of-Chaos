from django.db import models
from login_app.models import User 

#NuggetManager goes here with basic validator
# class NuggetManager(models.Manager):
#     pass

# #MediaTypeManager(models.Manager):
#     #media_type = ''
#     #if file type == video file
#         #media_type = 'video'
#     #if file type == img
#         #media_type = 'image'
#     #if file type == sound
#         #media_type = 'sound'
#     #return media_type

#============================================Need to figure out adding these=======================================================

# class MediaType(models.Model): 
#     text = models.TextField(max_length=255)
#     video = models.CharField(max_length=255)
#     image = models.CharField(max_length=255)
#     audio = models.CharField(max_length=255)

# class File(models.Model):
#     upload = models.FileField(upload_to='uploads/', blank = True, null= True)
#     image_upload = models.ImageField(upload_to = 'uploads/images/', null = True, blank = True)
#     media_type = models.ForeignKey(MediaType, related_name = "uploads", on_delete = models.CASCADE)

#============================================Need to figure out adding these=======================================================

class Nugget(models.Model):
    # file = models.ForeignKey(File, related_name= "files", on_delete = models.CASCADE) #possible foreign key
    text = models.TextField(max_length=1000)
    # media_type = models.ForeignKey(MediaType, related_name="media", on_delete= models.CASCADE)
    #media_type wants to be a hidden auto input field that will populate what the media is: text, video, audio, etc.
    user = models.ForeignKey(User, related_name = "nuggets", on_delete = models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


# class Sound(models.Model):
#     sound_file
#     title
#     isAudio
#     isVideo
