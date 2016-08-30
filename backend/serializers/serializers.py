from models.models import ac_transit_vehicle_positions
from models.models import events_511
from rest_framework_gis.serializers import GeoFeatureModelSerializer

class ac_vehicle_pos_serializer(GeoFeatureModelSerializer):
	class Meta:
		model = ac_transit_vehicle_positions
		geo_field = "geom"
		fields = ("vehicle_id", "trip_id", "start_time", "route_id", "latitude", "longitude", 
				  "bearing", "label", "license_plate")

class events_serializer(GeoFeatureModelSerializer):
	class Meta:
		model = events_511
		geo_field = "geom"
		field = ("url", "headline", "status", "event_type", "severity", "created", "updated",
				 "geography_type", "longitude", "latitude", "roads_name", "roads_from", "roads_to", "roads_state")
