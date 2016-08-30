from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from views.views import ac_vehicle_pos_viewset
from views.views import events_511_viewset

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

router.register(
	r'osm',
	ac_vehicle_pos_viewset,
	base_name='osm'
)

router.register(
	r'511',
	events_511_viewset,
	base_name='511'
)

urlpatterns = [
	url(r'^', include(router.urls)),
]