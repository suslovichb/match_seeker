from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions, status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from authentication.models import CustomUser
from .serializers import CustomTokenObtainPairSerializer, CustomUserSerializer, CustomUserListSerializer, \
    CustomUserRetrieveSerializer, CustomUserCreateSerializer, CustomUserUpdateSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from authentication.permissions import IsOwnerOrAdmin
from rest_framework_simplejwt.authentication import JWTAuthentication


class ObtainTokenPairWithUserSettingsView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


# class CustomUserCreate(APIView):
#     permission_classes = (permissions.AllowAny,)
#     authentication_classes = ()
#
#     def post(self, request, format='json'):
#         serializer = CustomUserSerializer(data=request.data)
#         if CustomUser.objects.filter(username=request.data['username']).exists():
#             return Response({'username': 'This username is already taken'}, status=status.HTTP_400_BAD_REQUEST)
#         if serializer.is_valid():
#             user = serializer.save()
#             if user:
#                 json = serializer.data
#                 return Response(json, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#

class LogoutAndBlacklistRefreshTokenForUserView(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    default_serializer_class = CustomUserSerializer
    authentication_classes = (JWTAuthentication,)

    permission_classes_by_action = {
        'list': [permissions.IsAdminUser],
        'create': [permissions.AllowAny],
        'retrieve': [IsOwnerOrAdmin],
        'update': [IsOwnerOrAdmin],
        'destroy': [IsOwnerOrAdmin],
    }

    serializer_classes_by_action = {
        'list': CustomUserListSerializer,
        'create': CustomUserCreateSerializer,
        'retrieve': CustomUserRetrieveSerializer,
        'update': CustomUserUpdateSerializer,
    }

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            return [permission() for permission in self.permission_classes]

    def get_serializer_class(self):
        return self.serializer_classes_by_action.get(self.action, self.default_serializer_class)

    def get_authenticators(self):
        if self.request.method == 'POST':
            return []
        return super().get_authenticators()

    def create(self, request, *args, **kwargs):
        serializer = CustomUserCreateSerializer(data=request.data)
        if CustomUser.objects.filter(username=request.data['username']).exists():
            return Response({'username': 'This username is already taken'}, status=status.HTTP_400_BAD_REQUEST)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
