
 export default
 {
     "le_id": 1,
     "config_json": {
         "module": "attendance",
         "configuration": {
             "need_reason": true,
             "need_remarks": true,
             "reason_level": "mandatory",
             "remarks_level": "silent",
             "take_selfie": true,
             "selfie_level": "silent",
             "take_gps": true,
             "gps_level": "mandatory",
             "need_checkout": true,
             "need_checkout_remarks": true,
             "need_checkout_selfie": true,
             "checkout_remarks_level": "silent",
             "checkout_selfie_level": "silent",
             "take_checkout_gps": true,
             "checkout_gps_level": "mandatory",
             "need_livetracker": false,
             "tracker_frequency": {
                 "time_s": "120",
                 "distance_m": "1000"
             },
             "attendance_category": [
                 {
                     "code": "P",
                     "name": "Present"
                 },
                 {
                     "code": "A",
                     "name": "Absent"
                 },
                 {
                     "code": "O",
                     "name": "Off"
                 }
             ],
             "attendance_reasons": [
                 {
                     "attendance": "A",
                     "reason_name": "Medical",
                     "reason_code": "M",
                     "priority": "10"
                 },
                 {
                     "attendance": "A",
                     "reason_name": "Others",
                     "reason_code": "O",
                     "priority": "20"
                 },
                 {
                     "attendance": "P",
                     "reason_name": "At Store",
                     "reason_code": "S",
                     "priority": "30"
                 },
                 {
                     "attendance": "P",
                     "reason_name": "Others",
                     "reason_code": "O",
                     "priority": "40"
                 },
                 {
                     "attendance": "O",
                     "reason_name": "Weekly Off",
                     "reason_code": "W",
                     "priority": "50"
                 },
                 {
                     "attendance": "O",
                     "reason_name": "Others",
                     "reason_code": "O",
                     "priority": "60"
                 }
             ],
             "checkuot_gps_level": "mandatory"
         },
         "labels": [
             {
                 "component": "view_attendance",
                 "component_label": "View Attendance",
                 "labels": {
                     "from_date": "Start Date",
                     "to_date": "End Date",
                     "attendance_analysis": "Attendance Summary",
                     "hours_analysis": "Hourly Summary",
                     "daywise_analysis": "Daywise Analysis"
                 }
             },
             {
                 "component": "day_wise_analysis",
                 "component_label": "Daywise Analysis",
                 "labels": {
                     "date": "Date",
                     "In_time": "In Time",
                     "out_time": "Out Time",
                     "hrs": "Hrs.",
                     "status": "Att"
                 }
             },
             {
                 "component": "attendance_mark",
                 "component_label": "Mark Attendance",
                 "labels": {
                     "attendance_type": "Attendance",
                     "category": "Reason",
                     "remarks": "Remarks",
                     "submit": "Submit"
                 }
             },
             {
                 "component": "checkout",
                 "component_label": "Checkout",
                 "labels": {
                     "submit": "Submit"
                 }
             }
         ],
         "urls": [
             {
                 "component": "attendance_mark",
                 "component_url": {
                     "submit_attendance": "attendance/mark/?"
                 }
             },
             {
                 "component": "view_attendance",
                 "component_url": {
                     "view_attendance": "attendance/monthly_summary/?",
                     "daywise_view_attendance": "attendance/datewise_details_2/?"
                 }
             }
         ]
     }
 }


// {
//   "le_id":1,
//   "config_json":{
//     "module": "attendance",
//     "configuration": {
//       "need_reason": true,
//       "need_remarks": true,
//       "reason_level": "mandatory",
//       "remarks_level": "silent",
//       "take_selfie": true,
//       "selfie_level": "silent",
//       "take_gps": true,
//       "gps_level": "mandatory",
//       "need_checkout": true,
//       "need_checkout_remarks": true,
//       "need_checkout_selfie": true,
//       "checkout_remarks_level": "silent",
//       "checkout_selfie_level": "silent",
//       "take_checkout_gps": true,
//       "checkout_gps_level": "mandatory",
//       "need_livetracker": false,
//       "tracker_frequency": {
//         "time_s": "120",
//         "distance_m": "1000"
//       },
//       "attendance_reasons": [{
//         "att": "A",
//         "reason": "Medical",
//         "priority": "10"
//       },
//       {
//         "att": "A",
//         "reason": "Others",
//         "priority": "20"
//       },
//       {
//         "att": "P",
//         "reason": "At Store",
//         "priority": "30"
//       },
//       {
//         "att": "P",
//         "reason": "Others",
//         "priority": "40"
//       },
//       {
//         "att": "O",
//         "reason": "Weekly Off",
//         "priority": "50"
//       },
//       {
//         "att": "O",
//         "reason": "Others",
//         "priority": "60"
//       }
//     ],
//     "checkuot_gps_level": "mandatory"
//   },
//   "labels": [{
//     "component": "view_attendance",
//     "component_label": "View Attendance",
//     "labels": {
//       "from_date": "Start Date",
//       "to_date": "End Date",
//       "attendance_analysis": "Attendance Summary",
//       "hours_analysis": "Hourly Summary",
//       "daywise_analysis": "Daywise Analysis"
//     }
//   },
//   {
//     "component": "day_wise_analysis",
//     "component_label": "Daywise Analysis",
//     "labels": {
//       "date": "Date",
//       "In_time": "In Time",
//       "out_time": "Out Time",
//       "hrs": "Hrs.",
//       "status": "Att"
//     }
//   },
//   {
//     "component": "attendance_mark",
//     "component_label": "Mark Attendance",
//     "labels": {
//       "attendance_type": "Attendance",
//       "category": "Reason",
//       "remarks": "Remarks",
//       "submit": "Submit"
//     }
//   },
//   {
//     "component": "checkout",
//     "component_label": "Checkout",
//     "labels": {
//       "submit": "Submit"
//     }
//   }
// ],
// "urls": [{
//   "component": "attendance_mark",
//   "component_url": {
//     "submit_attendance": "attendance/mark/?"
//   }
// },
// {
//   "component": "view_attendance",
//   "component_url": {
//     "view_attendance": "attendance/monthly_summary/?",
//     "daywise_view_attendance": "attendance/datewise_details_2/?"
//   }
// }]
// }
// }
