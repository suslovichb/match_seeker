from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import CustomUser


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)
        token['search_google_spreadsheet_id'] = user.search_google_spreadsheet_id
        token['search_google_spreadsheet_email'] = user.search_google_spreadsheet_email
        token['search_google_spreadsheet_key'] = user.search_google_spreadsheet_key
        token['synonyms_google_spreadsheet_id'] = user.synonyms_google_spreadsheet_id
        token['synonyms_google_spreadsheet_email'] = user.synonyms_google_spreadsheet_email
        token['synonyms_google_spreadsheet_key'] = user.synonyms_google_spreadsheet_key
        return token


class CustomUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField()
    password = serializers.CharField(min_length=8, write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
