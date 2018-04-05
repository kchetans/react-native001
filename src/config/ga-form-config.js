export default{
  "_id": "5904bf8f76da23136cf4ee9c",
  "template": "default",
  "header": {
    "title": "GA Form",
    "subtitle": "Enter New FE Information Here"
  },
  "content_json": {
    "type": "form",
    "submitText": "Submit",
    "webhook": {
      "method": "POST",
      "url": "/api/emp/create_ga"
    },
    "fields": [
      {
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
        "dataOptions": [
          {
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
        "title": "Employee Name",
        "name": "emp_name",
        "hint": "Your answer"
      },
      {
        "type": "date",
        "name": "doj",
        "title": "Date Of Joining"
      },
      {
        "type": "date",
        "name": "dob",
        "title": "Date Of Birth"
      },
      {
        "type": "drop_down",
        "name": "designation",
        "title": "Designation",
        "dataOptions": [
          {
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
        "type": "drop_down",
        "name": "center_type",
        "title": "Please enter your Center Type",
        "webhook": {
          "method": "GET",
          "url": "/api/master/facility/facility_type/facility_type/"
        }
      },
      {
        "type": "text",
        "name": "fathers_name",
        "title": "Father's Name",
        "hint": "Your answer"
      },
      {
        "type": "drop_down",
        "title": "Agency",
        "name": "agency",
        "webhook": {
          "method": "GET",
          "url": "/api/master/sa/"
        }
      },
      {
        "type": "text",
        "title": "Mobile Number",
        "name": "mobile",
        "hint": "Your answer"
      },
      {
        "type": "text",
        "title": "Alternate/Emergency Number",
        "name": "mobile2",
        "hint": "Your answer"
      },
      {
        "type": "text",
        "title": "Aadhaar Card Number",
        "name": "aadhaar_no",
        "hint": "Your answer"
      },
      {
        "type": "radio",
        "title": "T-Shirt Size",
        "name": "tshirt_size",
        "dataOptions": [
          {
            "text": "Small",
            "value": "small"
          },
          {
            "text": "Medium",
            "value": "medium"
          },
          {
            "text": "Large",
            "value": "large"
          },
          {
            "text": "XL",
            "value": "xl"
          },
          {
            "text": "XXL",
            "value": "xxl"
          }
        ]
      },
      {
        "type": "drop_down",
        "title": "Gender",
        "name": "gender",
        "dataOptions": [
          {
            "text": "Male",
            "value": "male"
          },
          {
            "text": "Female",
            "value": "female"
          }
        ]
      },
      {
        "type": "drop_down",
        "title": "Does the associate have an android-based smart phone?",
        "name": "has_smart_phone",
        "dataOptions": [
          {
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
