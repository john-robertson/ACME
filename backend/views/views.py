from rest_framework import viewsets
from models.models import ac_transit_vehicle_positions
from models.models import events_511
from serializers.serializers import ac_vehicle_pos_serializer
from serializers.serializers import events_serializer

class ac_vehicle_pos_viewset(viewsets.ModelViewSet):
	queryset = ac_transit_vehicle_positions.objects.using('osm').all()
	serializer_class = ac_vehicle_pos_serializer

class events_511_viewset(viewsets.ModelViewSet):
	queryset = events_511.objects.using('511').all()
	serializer_class = events_serializer