from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import ObtainTokenPairWithUserSettingsView, CustomUserCreate, LogoutAndBlacklistRefreshTokenForUserView

urlpatterns = [
    path('token/obtain/', ObtainTokenPairWithUserSettingsView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('user/create/', CustomUserCreate.as_view(), name='create_user'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='blacklist'),
]
