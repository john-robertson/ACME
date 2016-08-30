
from __future__ import unicode_literals

from django.contrib.gis.db import models

class ac_transit_vehicle_positions(models.Model):
	vehicle_id = models.IntegerField(db_column='vehicle_id', blank=True, null=True, primary_key=True)
	trip_id = models.TextField(db_column='trip_id', blank=True, null=True)
	start_time = models.TextField(db_column='start_time', blank=True, null=True)
	route_id = models.TextField(db_column='route_id', blank=True, null=True)
	latitude = models.FloatField(db_column='latitude', blank=True, null=True)
	longitude = models.FloatField(db_column='longitude', blank=True, null=True)
	bearing = models.FloatField(db_column='bearing', blank=True, null=True)
	label = models.TextField(db_column='label', blank=True, null=True)
	license_plate = models.TextField(db_column='license_plate', blank=True, null=True)
	geom = models.GeometryField(blank=True, null=True)

	class Meta:
		managed = False
		db_table = 'ac_transit_vehicle_positions'
		app_label = 'osm'

class events_511(models.Model):
	url = models.TextField(db_column='events_url', blank=True, null=True, primary_key=True)
	headline = models.TextField(db_column='headline', blank=True, null=True)
	status = models.TextField(db_column='status', blank=True, null=True)
	event_type = models.TextField(db_column='event_type', blank=True, null=True)
	severity = models.TextField(db_column='severity', blank=True, null=True)
	created = models.TextField(db_column='created', blank=True, null=True)
	updated = models.TextField(db_column='updated', blank=True, null=True)
	geography_type = models.TextField(db_column='geography_type', blank=True, null=True)
	longitude = models.FloatField(db_column='longitude', blank=True, null=True)
	latitude = models.FloatField(db_column='latitude', blank=True, null=True)
	roads_name = models.TextField(db_column='roads_name', blank=True, null=True)
	roads_from = models.TextField(db_column='roads_from', blank=True, null=True)
	roads_state = models.TextField(db_column='roads_state', blank=True, null=True)
	geom = models.GeometryField(blank=True, null=True)

	class Meta:
			managed = False
			db_table = 'Events'
			app_label = 'osm'