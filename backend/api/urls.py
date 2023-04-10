from django.contrib import admin
from django.urls import path, include
from signup.views import SignUpViewset
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('customers', SignUpViewset)

urlpatterns = [
    path("admin/", admin.site.urls),
    path('',include(router.urls))
]
