export default {
  "type"  : "page",
  "fields": [{
    "type"      : "form",
    "fields"    : [{
      "type"  : "section",
      "fields": [{
        "type"       : "row_col_container",
        "columnCount": 2,
        "fields"     : [{
          "type" : "text",
          "hint" : "OLR ID",
          "name" : "ref_olrid",
          "title": "Ref. OLR-ID"
        }, {"type": "raised_button", "icon": "cloud_download", "iconColor": "white", "title": "Load"}]
      }]
    }, {
      "type"  : "section",
      "fields": [{
        "type"        : "radio",
        "title"       : "Select Employment Type",
        "name"        : "employment_type",
        "inline"      : true,
        "defaultValue": "OFC",
        "dataOptions" : [{"text": "Office", "value": "OFC"}, {
          "text" : "Project Based",
          "value": "proj"
        }, {"text": "Project Based Temp", "value": "proj_temp"}, {"text": "Office Temp", "value": "tmp"}]
      }]
    }, {
      "type"        : "section",
      "title"       : "Project Based OLR Details",
      "visibility"  : {"employment_type": "proj"},
      "fields"      : [{
        "type"       : "row_col_container",
        "columnCount": 2,
        "fields"     : [{
          "type"       : "drop_down",
          "title"      : "Project",
          "name"       : "buid",
          "dataOptions": [{"text": "Whirlpool", "value": "1"}, {
            "text" : "Philips",
            "value": "2"
          }, {"text": "Eureka", "value": "3"}, {"text": "Usha", "value": "4"}]
        }, {
          "type"       : "drop_down",
          "title"      : "invoicing Projects",
          "name"       : "inv_projectid",
          "search"     : ["buid"],
          "dataOptions": [{"text": "Whirlpool", "value": "1", "buid": "1"}, {
            "text" : "Philips",
            "value": "2",
            "buid" : "2"
          }, {"text": "Eureka", "value": "3", "buid": "3"}, {
            "text" : "Usha",
            "value": "4",
            "buid" : "4"
          }, {"text": "Whirlpool1", "value": "1", "buid": "1"}, {
            "text" : "Philips1",
            "value": "2",
            "buid" : "2"
          }, {"text": "Eureka1", "value": "3", "buid": "3"}, {"text": "Usha1", "value": "4", "buid": "4"}]
        }, {
          "type" : "checkbox",
          "title": "Need Authorization Letter",
          "name" : "need_auth_letter"
        }, {
          "type"       : "drop_down",
          "title"      : "City",
          "name"       : "store_city",
          "dataOptions": ["branch", "name", "city"]
        }, {"type": "checkbox", "title": "Is Replacement", "name": "is_replacement"}, {
          "type" : "text",
          "name" : "replacement_reason",
          "title": "Reason For Replacement"
        }]
      }],
      "isExpandable": true
    }, {
      "type"        : "section",
      "isExpandable": true,
      "title"       : "Was Employee of V5",
      "fields"      : [{
        "type" : "checkbox",
        "title": "Was Employee Of V5",
        "name" : "was_V5employee"
      }, {
        "type"       : "row_col_container",
        "columnCount": 4,
        "fields"     : [{
          "type"      : "text",
          "title"     : "Project_Department",
          "name"      : "v5_project",
          "visibility": {"was_V5employee": true}
        }, {
          "type"      : "text",
          "title"     : "Location",
          "name"      : "v5_location",
          "visibility": {"was_V5employee": true, "v5_project": "testing"}
        }, {
          "type"      : "date",
          "title"     : "Date Of Joining",
          "visibility": {"was_V5employee": true},
          "name"      : "v5_doj"
        }, {
          "type"      : "date",
          "title"     : "Date Of Leaving",
          "visibility": {"was_V5employee": true},
          "name"      : "v5_dol"
        }]
      }]
    }, {
      "type"        : "section",
      "isExpandable": true,
      "title"       : "Approval From Client/HOD (Mandatory)",
      "fields"      : [{
        "type"       : "row_col_container",
        "columnCount": 4,
        "fields"     : [{"type": "text", "title": "Client/HOD Name", "name": "client_name"}, {
          "type" : "date",
          "title": "Date Of Approval",
          "name" : "client_doa"
        }, {"type": "text", "title": "Designation", "name": "designation"}, {
          "type"       : "drop_down",
          "title"      : "Mode Of Approval",
          "name"       : "client_moa",
          "dataOptions": ["Phone", "Email", "SMS"]
        }]
      }]
    }, {
      "type"        : "section",
      "isExpandable": true,
      "avatar"      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDgTAWJR6QesJNEAaYC6hatSHLtKTdTENv5fX_OK7KWzshGfFMUsXywjE",
      "title"       : "Basic Details",
      "fields"      : [{
        "type"       : "row_col_container",
        "columnCount": 2,
        "fields"     : [{"type": "text", "title": "First Name", "name": "First_Name"}, {
          "type" : "text",
          "title": "Last Name",
          "name" : "last_Name"
        }, {"type": "text", "title": "Mother's Name", "name": "mother_Name"}, {
          "type" : "text",
          "title": "Father's Name",
          "name" : "Father_Name"
        }, {
          "type"       : "radio",
          "title"      : "Marital Status",
          "dataOptions": ["Unmarried", "Married", "Divorced"]
        }, {"type": "text", "title": "Spouse Name if married"}, {
          "type" : "text",
          "title": "Mobile No"
        }, {"type": "text", "title": "Mobile No 2"}, {
          "type" : "text",
          "title": "Email 1",
          "name" : "email1"
        }, {"type": "text", "title": "Email 2", "name": "email2"}, {
          "type"       : "radio",
          "title"      : "Gender",
          "dataOptions": ["Male", "Female"]
        }, {"type": "date", "title": "DOB", "name": "dob"}, {
          "type"       : "drop_down",
          "title"      : "Education",
          "dataOptions": ["Post Graduate", "Graduate", "12th pass", "10th Pass", "Below 10"]
        }, {"type": "text", "title": "PAN Card", "name": "pan_Card"}, {
          "type" : "text",
          "title": "Aadhar Card",
          "name" : "aadhar_Card"
        }]
      }, {
        "type"       : "row_col_container",
        "columnCount": 2,
        "fields"     : [{
          "type"  : "vertical_stack",
          "title" : "Present Address",
          "fields": [{"type": "text", "title": "Address"}, {
            "type" : "text",
            "title": "State"
          }, {"type": "text", "title": "City"}, {"type": "text", "title": "Country"}, {
            "type" : "text",
            "title": "Pin code"
          }]
        }, {
          "type"  : "vertical_stack",
          "title" : "Corresponding Address",
          "fields": [{"type": "text", "title": "Address"}, {
            "type" : "text",
            "title": "State"
          }, {"type": "text", "title": "City"}, {"type": "text", "title": "Country"}, {
            "type" : "text",
            "title": "Pin code"
          }]
        }]
      }]
    }, {
      "type"        : "section",
      "isExpandable": true,
      "title"       : "Candidate Joining Details",
      "fields"      : [{
        "type"       : "row_col_container",
        "columnCount": 3,
        "fields"     : [{"type": "date", "title": "Candidate Joining Date"}, {
          "type"       : "drop_down",
          "title"      : "Candidate Position",
          "dataOptions": ["i am dependent option"]
        }, {
          "type"       : "drop_down",
          "title"      : "Candidate Location",
          "dataOptions": ["Delhi", "Mumbai"]
        }, {"type": "text", "title": "Candidate Designation"}, {
          "type" : "checkbox",
          "title": "Need Emial"
        }, {"type": "checkbox", "title": "Need Visiting Card"}, {"type": "text", "title": "SSN Code"}]
      }]
    }, {
      "type"        : "section",
      "title"       : "ESIC Nominee Details",
      "fields"      : [{
        "type"       : "row_col_container",
        "columnCount": 3,
        "fields"     : [{"type": "text", "title": "Nominee 1 Name"}, {
          "type" : "text",
          "title": "Nominee 1 Relationship"
        }, {"type": "date", "title": "Nominee 1 DOB"}]
      }, {
        "type"       : "row_col_container",
        "columnCount": 3,
        "fields"     : [{"type": "text", "title": "Nominee 2 Name"}, {
          "type" : "text",
          "title": "Nominee 2 Relationship"
        }, {"type": "date", "title": "Nominee 2 DOB"}]
      }, {
        "type"       : "row_col_container",
        "columnCount": 3,
        "fields"     : [{"type": "text", "title": "Nominee 3 Name"}, {
          "type" : "text",
          "title": "Nominee 3 Relationship"
        }, {"type": "date", "title": "Nominee 3 DOB"}]
      }],
      "isExpandable": true
    }, {
      "type"        : "section",
      "title"       : "Previous Salary Details",
      "fields"      : [{
        "type"       : "row_col_container",
        "columnCount": 2,
        "fields"     : [{"type": "text", "title": "Last CTC", "defaultValue": "0"}, {
          "type"        : "text",
          "title"       : "Last Inhand",
          "defaultValue": "0"
        }, {"type": "checkbox", "title": "Was PF deducted"}, {
          "type" : "text",
          "title": "Last Employer"
        }, {"type": "text", "title": "Experience"}]
      }],
      "isExpandable": true
    }, {
      "type"        : "section",
      "title"       : "Offered Salary Details",
      "fields"      : [{
        "type"       : "row_col_container",
        "columnCount": 2,
        "fields"     : [{
          "type"       : "radio",
          "title"      : "Salary For",
          "dataOptions": ["Monthly", "Yearly"],
          "inline"     : true
        }, {"type": "checkbox", "title": "Has PF"}, {
          "type"       : "row_col_container",
          "columnCount": 2,
          "fields"     : [{
            "type"       : "radio",
            "dataOptions": ["V5 CTC", "V5 in hand"],
            "inline"     : true
          }, {"type": "text"}]
        }, {"type": "text", "title": "Monthly Incentive"}, {
          "type" : "text",
          "title": "Quarterly Incentive"
        }, {"type": "text", "title": "Yearly Incentive"}, {
          "type"       : "row_col_container",
          "columnCount": 2,
          "fields"     : [{
            "type"       : "radio",
            "dataOptions": ["Allowance", "Reimbursement-Mobile"],
            "inline"     : true
          }, {"type": "text"}]
        }, {
          "type"       : "row_col_container",
          "columnCount": 2,
          "fields"     : [{
            "type"       : "radio",
            "dataOptions": ["Allowance", "Reimbursement-Travel"],
            "inline"     : true
          }, {"type": "text"}]
        }, {
          "type"       : "row_col_container",
          "columnCount": 2,
          "fields"     : [{
            "type"       : "radio",
            "dataOptions": ["Allowance", "Reimbursement-Laptop"],
            "inline"     : true
          }, {"type": "text"}]
        }, {
          "type"       : "row_col_container",
          "columnCount": 2,
          "fields"     : [{
            "type"       : "radio",
            "dataOptions": ["Allowance", "Reimbursement-Internet"],
            "inline"     : true
          }, {"type": "text"}]
        }, {
          "type"       : "row_col_container",
          "columnCount": 2,
          "fields"     : [{
            "type"       : "radio",
            "dataOptions": ["Allowance", "Reimbursement-Medical"],
            "inline"     : true
          }, {"type": "text"}]
        }, {
          "type"       : "row_col_container",
          "columnCount": 2,
          "fields"     : [{
            "type"       : "radio",
            "dataOptions": ["Allowance", "Reimbursement-LTA"],
            "inline"     : true
          }, {"type": "text"}]
        }]
      }],
      "isExpandable": true
    }, {
      "type"        : "section",
      "title"       : "Documents",
      "fields"      : [{
        "type"       : "row_col_container",
        "columnCount": 2,
        "fields"     : [{
          "type"   : "button_upload",
          "title"  : "Resume",
          "webhook": {"url": "http://localhost:9000/upload", "method": "PUT"}
        }, {"type": "button_upload", "title": "Pan Card"}, {
          "type" : "button_upload",
          "title": "Aadhar Card"
        }, {"type": "button_upload", "title": "Old Salary Slip"}, {
          "type" : "button_upload",
          "title": "Cancel Cheque"
        }]
      }],
      "isExpandable": true
    }, {
      "type"        : "section",
      "title"       : "Remarks",
      "fields"      : [{"type": "text_area", "full": true}],
      "isExpandable": true
    }],
    "submitText": "Submit"
  }],
  "code"  : "newolr",
  "header": {
    "type"        : "header",
    "title"       : "New OLR",
    "subtitle"    : "Workex Sloutions & Services Pvt Ltd",
    "avatarSource": "http://www.caioderzo.it/images/add.jpg"
  }
}
