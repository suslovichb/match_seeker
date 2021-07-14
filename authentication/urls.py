from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithUserSettingsView, LogoutAndBlacklistRefreshTokenForUserView, CustomUserViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'users', CustomUserViewSet, basename='user')

urlpatterns = [
    path('token/obtain/', ObtainTokenPairWithUserSettingsView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
]

urlpatterns += router.urls
