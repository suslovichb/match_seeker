from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from .models import CustomUser


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(CustomTokenObtainPairSerializer, cls).get_token(user)
        token['user_id'] = user.id
        token['username'] = user.username
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


class CustomUserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('email', 'username', 'id')


class CustomUserRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}


class CustomUserCreateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    username = serializers.CharField(max_length=150)
    password = serializers.CharField(min_length=8, write_only=True, required=True)

    search_google_spreadsheet_id = serializers.CharField(max_length=100, required=False)
    search_google_spreadsheet_email = serializers.CharField(max_length=100, required=False)
    search_google_spreadsheet_key = serializers.CharField(max_length=1676, required=False)
    search_google_spreadsheet_sheet_id = serializers.CharField(max_length=100, required=False)
    search_google_spreadsheet_column = serializers.CharField(max_length=100, required=False)

    synonyms_google_spreadsheet_id = serializers.CharField(max_length=100, required=False)
    synonyms_google_spreadsheet_email = serializers.CharField(max_length=100, required=False)
    synonyms_google_spreadsheet_key = serializers.CharField(max_length=1676, required=False)
    synonyms_google_spreadsheet_sheet_id = serializers.CharField(max_length=100, required=False)
    synonyms_google_spreadsheet_column = serializers.CharField(max_length=100, required=False)

    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CustomUserUpdateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=False)
    username = serializers.CharField(max_length=150, required=False)
    password = serializers.CharField(min_length=8, write_only=True, required=False)

    search_google_spreadsheet_id = serializers.CharField(max_length=100, required=False)
    search_google_spreadsheet_email = serializers.CharField(max_length=100, required=False)
    search_google_spreadsheet_key = serializers.CharField(max_length=1676, required=False)
    search_google_spreadsheet_sheet_id = serializers.CharField(max_length=100, required=False)
    search_google_spreadsheet_column = serializers.CharField(max_length=100, required=False)

    synonyms_google_spreadsheet_id = serializers.CharField(max_length=100, required=False)
    synonyms_google_spreadsheet_email = serializers.CharField(max_length=100, required=False)
    synonyms_google_spreadsheet_key = serializers.CharField(max_length=1676, required=False)
    synonyms_google_spreadsheet_sheet_id = serializers.CharField(max_length=100, required=False)
    synonyms_google_spreadsheet_column = serializers.CharField(max_length=100, required=False)

    class Meta:
        model = CustomUser
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}
