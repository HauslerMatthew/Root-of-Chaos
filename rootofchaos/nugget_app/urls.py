from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.rabbithole),
    path('new_nugget', views.new_nugget),
    path('process_new', views.process_new),
    path('edit/<int:nugget_id>', views.edit_nugget),
    path('process_edit/<int:nugget_id>', views.process_edit),
    path('user/<int:user_id>', views.user_profile),
    path('single_nugget/<int:nugget_id>', views.single_nugget),
    path('delete/<int:nugget_id>', views.delete_nugget),
    path('favorite/<int:user_id>/<int:nugget_id>', views.favorite_nugget),
    path('unfavorite/<int:user_id>/<int:nugget_id>', views.unfavorite_nugget),
    path('comment/<int:user_id>/<int:nugget_id>', views.comment_nugget),
]