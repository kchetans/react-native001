export default [
    {
        type   : "training",
        header : {
            title      : "Training",
            subtitle   : "5 hours ago",
            headerColor: "#26a69a",
            avatar     : "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
        },
        actions: [{
            icon       : "md-thumbs-up",
            actiontext : "Like",
            actioncolor: "#6c86ff"
        },
            {
                icon       : "md-chatboxes",
                actiontext : "Comment",
                actioncolor: "#6c86ff"
            },
            {
                icon       : "md-share",
                actiontext : "Share",
                actioncolor: "#6c86ff",
                actiontype:   'share',
                shareContent: "https://vjs.zencdn.net/v/oceans.mp4",
            }
        ],
        content: {
          //  imageurl    : "https://s-media-cache-ak0.pinimg.com/originals/df/43/25/df4325c1ac942fad9f7aebb6289304c9.jpg",
            videourl:"https://vjs.zencdn.net/v/oceans.mp4",
            text        : "Checkout this Video",
            subtext     : "Please take this quiz to get qualified for your incentives.",
            likecount   : "2",
            likeapi     : "",
            commentcount: "2",
            commentapi  : "",
            sharecount  : "2",
            shareapi    : ""
        }


    },
    {
        type   : "quiz",
        header : {
            title      : "Quiz",
            subtitle   : "2 hours ago",
            avatar     : "./quiz.png",
            headerColor: "#ff9800",
        },
        actions: [
            {},
            {
                actiontext : "Take the quiz",
                actiontype : "page",
                actionevent: "QuizHome",
                actioncolor: '#6c86ff'
            },
        ],
        content: {
            text   : "New quiz for you",
            subtext: "please take this quiz to get qualified for your incentives",
        }
    }, {
        type   : "quiz",
        header : {
            title      : "Quiz",
            subtitle   : "2 hours ago",
            headerColor: "#ff9800",
            avatar     : "https://static1.squarespace.com/static/52d07668e4b0b335d4dfb080/t/53165894e4b078aab7f3a38b/1393973402106/th.png",
        },
        actions: [
            {
                icon : "md-trophy",
                count: "30"
                //   //actiontext:"Take the quiz"
            }, {
                //  icon:"md-thumbs-up",
                actiontext : "Congratulate",
                actioncolor: '#6c86ff'
            },


        ],
        content: {
            url : "http://www.math.uni-frankfurt.de/~person/_4170854.jpg",
            text: "Ramesh topped yesterday quiz @ 9/10",

        }
    }, {
        type   : "attendence",
        header : {
            title      : "Attendance",
            subtitle   : "4 hours ago",
            headerColor: "#ab47bc",
            avatar     : "http://wfarm2.dataknet.com/static/resources/icons/set87/fb5b958f.png",
        },
        actions: [{}, {
            //  icon:"md-thumbs-up",
            actiontext : "Mark Attendance",
            actiontype : "page",
            actionevent: "AttendenceNav",
            actioncolor: '#6c86ff'
        },
        ],
        content: {
            text   : "Your attendance is pending",
            subtext: "Mark your attendance to avoid deduction your salary",
        }
    }, {
        type   : "payroll",
        header : {
            title      : "Payroll",
            subtitle   : "2 hours ago",
            headerColor: "#42a5f5",
            avatar     : "https://drive.google.com/open?id=0B76rbNtJhGQBWnUyMGRfN3BrU28",
        },
        actions: [{}, {
            //  icon:"md-thumbs-up",
            actiontext : "Salary Slip",
            actiontype : "page",
            actionevent: "SalarySlip",
            actioncolor: '#6c86ff'
        },
        ],
        content: {
            text: "Rs. 13,650 Credited to your Bank account xxxx x445",
            //subtext:"please take this quiz to get qualified for your incentives",
        }
    },
    {
        type   : "quiz",
        header : {
            title      : "Quiz",
            subtitle   : "2 hours ago",
            headerColor: "#ff9800",
            avatar     : "https://static1.squarespace.com/static/52d07668e4b0b335d4dfb080/t/53165894e4b078aab7f3a38b/1393973402106/th.png",
        },
        actions: [
            {
                icon : "md-trophy",
                color: "#ff9800",
                count: "50"
                //   //actiontext:"Take the quiz"
            }, {
                //  icon:"md-thumbs-up",
                // actiontext:"Congratulated"
            },


        ],
        content: {
            url : "http://www.material-ui.com/images/uxceo-128.jpg",
            text: "Congrats! You topped sale for last month across India",
            //subtext:"please take this quiz to get qualified for your incentives",
        }
    },
        {
          type:"training",
          header:{
            title:"Training",
            subtitle:"5 hours ago",
            headerColor:"#26a69a",
            avatar: "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
          },
          actions: [{
            icon:"md-thumbs-up",
            actiontext:"Like",
            actioncolor:"#6c86ff"
          },
          {
            icon:"md-chatboxes",
            actiontext:"Comment",
            actioncolor:"#6c86ff"
          },
          {
            icon:"md-share",
            actiontext:"Share",
            actioncolor:"#6c86ff"
          }
        ],
        content:{
          //imageurl:"http://www.ashirwadeducation.in/Screen%20Shot%202017-04-25%20at%209.16.01%20pm.png",
          //  videourl:"https://youtu.be/8LVN7WVgx0c",
          "data": [
            [{
                    "v": 49,
                    "name": "apple"
            }, {
                    "v": 42,
                    "name": "banana"
            },
            {
                    "v": 50,
                    "name": "grape"
            }, {
                    "v": 36,
                    "name": "orange"
            },
            {
                    "v": 49,
                    "name": "kiwi"
            }, {
                    "v": 42,
                    "name": "mango"
            },
            {
                    "v": 50,
                    "name": "starfruit"
            }, {
                    "v": 36,
                    "name": "blueberry"
            }
          ]
        ],
          text :"Weekly Offs",
          subtext:"Weekly Offs charts.",
          likecount:"5",
          likeapi:"",
          commentcount:"7",
          commentapi:"",
          sharecount:"5",
          shareapi:""
        }


      },
    //     {
    //       type :"attendence",
    //       header:{
    //         title:"Attendence",
    //         subtitle:"4 hours ago",
    //         headerColor:"#ab47bc",
    //         avatar: "http://wfarm2.dataknet.com/static/resources/icons/set87/fb5b958f.png",
    //       },
    //       actions: [{actiontext:"Comment",
    //       actionalign:"right",
    //
    //       //actiontype:"page",
    //         //actionevent:"AttendenceNav",
    //       actioncolor:'#6c86ff'},{
    //         actiontext:"Reject",
    //         actionalign:"right",
    //         //actiontype:"page",
    //           //actionevent:"AttendenceNav",
    //         actioncolor:'#B20000'
    //       },{
    //         //  icon:"md-thumbs-up",
    //         actiontext:"Approve",
    //         //actiontype:"page",
    //         //actionevent:"AttendenceNav",
    //         actioncolor:'#6c86ff'
    //       },
    //     ],
    //     content:{
    //       url: "http://www.material-ui.com/images/uxceo-128.jpg",
    //       text :"Leave request for Rima is panding.",
    //       //subtext:"Mark your attendance to avoid deduction your salary",
    //     }
    //   },
    //   {
    //     type:"training",
    //     header:{
    //       title:"Training",
    //       subtitle:"5 hours ago",
    //       headerColor:"#26a69a",
    //       avatar: "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
    //     },
    //     actions: [{
    //       icon:"md-thumbs-up",
    //       actiontext:"Like",
    //       actioncolor:"#6c86ff"
    //     },
    //     {
    //       icon:"md-chatboxes",
    //       actiontext:"Comment",
    //       actioncolor:"#6c86ff"
    //     },
    //     {
    //       icon:"md-share",
    //       actiontext:"Share",
    //       actioncolor:"#6c86ff"
    //     }
    //   ],
    //   content:{
    //     imageurl:"http://www.ashirwadeducation.in/attertation.png",
    //     //  videourl:"https://youtu.be/8LVN7WVgx0c",
    //     text :"Attrition Chart",
    //     subtext:"Attrition  charts.",
    //     likecount:"5",
    //     likeapi:"",
    //     commentcount:"7",
    //     commentapi:"",
    //     sharecount:"5",
    //     shareapi:""
    //   }
    //
    //
    // },              {
    //                 type:"training",
    //                 header:{
    //                   title:"Training",
    //                   subtitle:"5 hours ago",
    //                   headerColor:"#26a69a",
    //                   avatar: "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
    //                 },
    //                 actions: [{
    //                   icon:"md-thumbs-up",
    //                   actiontext:"Like",
    //                   actioncolor:"#6c86ff"
    //                 },
    //                 {
    //                   icon:"md-chatboxes",
    //                   actiontext:"Comment",
    //                   actioncolor:"#6c86ff"
    //                 },
    //                 {
    //                   icon:"md-share",
    //                   actiontext:"Share",
    //                   actioncolor:"#6c86ff"
    //                 }
    //               ],
    //               content:{
    //                 imageurl:"http://www.ashirwadeducation.in/top.png",
    //                 //  videourl:"https://youtu.be/8LVN7WVgx0c",
    //                 text :"Top Agencies Attrition Chart",
    //                 subtext:"Top Agencies Attrition  charts.",
    //                 likecount:"5",
    //                 likeapi:"",
    //                 commentcount:"7",
    //                 commentapi:"",
    //                 sharecount:"5",
    //                 shareapi:""
    //               }
    //
    //
    //             },
    //             {
    //               type:"training",
    //               header:{
    //                 title:"Training",
    //                 subtitle:"5 hours ago",
    //                 headerColor:"#26a69a",
    //                 avatar: "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png",
    //               },
    //               actions: [{
    //                 icon:"md-thumbs-up",
    //                 actiontext:"Like",
    //                 actioncolor:"#6c86ff"
    //               },
    //               {
    //                 icon:"md-chatboxes",
    //                 actiontext:"Comment",
    //                 actioncolor:"#6c86ff"
    //               },
    //               {
    //                 icon:"md-share",
    //                 actiontext:"Share",
    //                 actioncolor:"#6c86ff"
    //               }
    //             ],
    //             content:{
    //               imageurl:"http://www.ashirwadeducation.in/mm.png",
    //               //  videourl:"https://youtu.be/8LVN7WVgx0c",
    //               text :"Monthly Attrition",
    //               subtext:"Monthly Attrition  charts.",
    //               likecount:"5",
    //               likeapi:"",
    //               commentcount:"7",
    //               commentapi:"",
    //               sharecount:"5",
    //               shareapi:""
    //             }
    //
    //
    //           },
    {
  "type": "training",
  "header": {
    "title": "Training",
    "subtitle": "5 hours ago",
    "headerColor": "#26a69a",
    "avatar": "https://stratisems.com/wp-content/uploads/2016/10/Training-Icon.png"
  },
  "actions": [{
      "icon": "md-thumbs-up",
      "actiontext": "Like",
      "actioncolor": "#6c86ff"
    },
    {
      "icon": "md-chatboxes",
      "actiontext": "Comment",
      "actioncolor": "#6c86ff"
    },
    {
      "icon": "md-share",
      "actiontext": "Share",
      "actioncolor": "#6c86ff",
      "actiontype": "share",
      "shareContent": "https://vjs.zencdn.net/v/oceans.mp4"
    }
  ],
  "content": {
     "imageurl"    : "",
    "videourl": "https://vjs.zencdn.net/v/oceans.mp4",
    "text": "Checkout this Video",
    "subtext": "Please take this quiz to get qualified for your incentives.",
    "likecount": "2",
    "likeapi": "",
    "commentcount": "2",
    "commentapi": "",
    "sharecount": "2",
    "shareapi": ""
  }


}


]
