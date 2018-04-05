export default{
	"_id": "5906f1491187080ae0ea5771",
	"template": "default",
	"header": {
		"title": "Leaver Form",
		"subtitle": "Off Roll - Leaver Details Form"
	},
	"content_json": {
		"type": "form",
		"submitText": "Submit",
		"webhook": {
			"method": "POST",
			"url": "/api/emp/create_leaver"
		},
		"fields": [{
				"type": "drop_down",
				"title": "Please choose your center name",
				"name": "center_name",
				"webhook": {
					"method": "GET",
					"url": "/api/master/facility/facility_name/facility_name/"
				}
			},
			{
				"type": "drop_down",
				"title": "Region",
				"name": "region",
				"dataOptions": [{
						"text": "North",
						"value": "north"
					},
					{
						"text": "South",
						"value": "south"
					},
					{
						"text": "East",
						"value": "east"
					},
					{
						"text": "West",
						"value": "west"
					}
				]
			},
			{
				"type": "text",
				"title": "Employee Code",
				"name": "emp_code",
				"hint": "Your answer"
			},
			{
				"type": "text",
				"title": "Employee Name",
				"name": "emp_name",
				"hint": "Your answer"
			},
			{
				"type": "date",
				"name": "dol",
				"title": "Last Working Date"
			},
			{
				"type": "drop_down",
				"name": "leaving_reason",
				"defaultValue": "value3",
				"title": "Reason For Leaving",
				"dataOptions": [{
						"text": "Resigned",
						"value": "Resigned"
					},
					{
						"text": "Terminated",
						"value": "Terminated"
					},
					{
						"text": "Absconder",
						"value": "Absconder"
					}
				]
			},
			{
				"type": "drop_down",
				"name": "resignation_reason",
				"title": "Reason For Resignation",
				"dataOptions": [{
						"text": "text1",
						"value": "value1"
					},
					{
						"text": "text2",
						"value": "value2"
					},
					{
						"text": "text3",
						"value": "value3"
					},
					{
						"text": "text4",
						"value": "value4"
					},
					{
						"text": "text5",
						"value": "value5"
					}
				]
			},
			{
				"type": "radio",
				"title": "Notice Period Given",
				"defaultValue": "medium",
				"name": "notice_period_given",
				"dataOptions": [{
						"text": "Yes",
						"value": "y"
					},
					{
						"text": "No",
						"value": "n"
					}
				]
			},
			{
				"type": "radio",
				"title": "Notice Period Waived Off",
				"defaultValue": "medium",
				"name": "notice_period_waived",
				"dataOptions": [{
						"text": "Yes",
						"value": "y"
					},
					{
						"text": "No",
						"value": "n"
					}
				]
			}
		]
	}
}
