var React = require('react-native');

var {
        StyleSheet
    }
        = React;

module.exports = StyleSheet.create({

      Supertitle : {
          fontSize: 19.95,
      },
      Posttitle  : {
          color            : 'rgba(74,74,74,0.6)',
          fontSize         : 16.05,
          marginBottom     : 5,
          //marginLeft:2,
          paddingLeft      : 1,
          paddingHorizontal: 15,

      },
      headerImage: {
          marginLeft: 9,
          height    : 18,
          width     : 18
      },
      Timestamp  : {
          fontSize: 12.00,
      },
      Source     : {
          fontSize: 12.00,
          padding : 3,
          color   : 'rgba(74,74,74,0.6)'
      },
      Action     : {
          fontSize  : 13.95,
          color     : '#6c86ff',
          fontWeight: 'bold'
      },

      liked           : {
          fontSize       : 10.95,
          color          : 'rgba(74,74,74,0.6)',
          paddingVertical: 5,
          marginLeft     : 4
      },
      LikeCommentShare: {
          color          : '#6c86ff',
          fontSize       : 13.05,
          paddingVertical: 5
      },
      content         : {
          fontSize: 12,
      },
      contentbox      : {
          flexDirection    : "column",
          justifyContent   : "flex-start",
          paddingHorizontal: 15,
      },
      cardWrapper     : {
          backgroundColor: '#ffffff',
          marginVertical : 3,
          padding        : 3,
      },
      backgroundVideo : {
          position: 'absolute',
          top     : 0,
          left    : 0,
          bottom  : 0,
          right   : 0,
      },
      cardheader      : {
          padding: 5
      },

      cardheader_subheader   : {
          color     : 'rgba(74,74,74,0.6)',
          //padding:15,
          marginLeft: 8,
          //fontStyle:'italic',
          fontSize  : 12,
      },
      cardContentWrapper     : {
          paddingHorizontal: 15,
          paddingTop       : 0,
          bottom           : 5
      },
      cardActionsWrapperRight: {
          //paddingVertical: 8,
          //  flexDirection: 'row',
          //  alignItems:'center',
          justifyContent: 'flex-end'
      },
      cardActionsWrapper     : {
          //paddingVertical: 8,
          flexDirection : 'row',
          alignItems    : 'center',
          marginLeft    : 5,
          marginRight   : 10,
          justifyContent: 'space-between'
      },
      actionButton           : {
          color      : '#E3F2FD',
          flex       : 1,
          marginRight: 10
      },
      // dividerLine            : {
      //     borderColor: '#e5e5e5',
      //     borderWidth: 0.5,
      //     //height:1
      // },
      iconContainer          : {
          padding     : 15,
          borderWidth : 0.5,
          borderRadius: 30,
          height      : 40,
          borderColor : '#9E9E9E',
          marginRight : 10
      },
      header_icon            : {
          paddingVertical: 0,
          color          : '#6c86ff'
      },
      AddFabButton           : {
          width          : 50,
          height         : 50,
          borderRadius   : 50,
          backgroundColor: '#6c86ff',
          shadowRadius   : 100,
          shadowColor    : 'black',
          alignItems     : 'center',
          position       : 'absolute',
          bottom         : 80,
          right          : 20,
      },


        // Supertitle : {
        //     fontSize: 19.95,
        // },
        dividerLine: {
            borderColor: '#e5e5e5',
            borderWidth: 0.5,
            height     : 1
        },
        attendanceDividerLine:{
          borderWidth: 0.5,
            height     : 1,
           borderColor: '#ab47bc'
        },
        // Posttitle  : {
        // },
//         cardWrapper: {
//             backgroundColor  : '#ffffff',
// //  marginVertical:3,
//             padding          : 5,
//             height           : 100,
//             marginTop        : 7,
//             marginBottom     : 7,
//             borderBottomWidth: 20,
//             borderBottomColor: 'black'
//         },

        Timestamp       : {
            fontSize: 12.00,
        },
        // Source          : {
        //     fontSize: 12.00,
        // },
        // Action          : {
        //     fontSize  : 13.95,
        //     color     : '#6c86ff',
        //     fontWeight: 'bold',
        //     textAlign : 'right'
        // },
        // liked           : {
        //     fontSize: 10.95,
        // },
        // LikeCommentShare: {
        //     fontSize: 13.05,
        // },
        // content         : {
        //     fontSize: 12,
        // },
        //
        headerView   : {
            height         : 50,
            backgroundColor: '#F58545',
            flexDirection  : 'row'
        },
        footerView   : {},
        footerContent: {
            fontSize : 12,
            textAlign: 'center'
        },
        mainHeader   : {
            marginTop : 10,
            marginLeft: 10,
            fontSize  : 20,
            fontWeight: 'bold',
            color     : 'white'
        },
        mainView     : {
            padding: 20
        },
        pageTitle    : {
            marginLeft  : -5,
            fontSize    : 25,
            marginBottom: 20
        },
        viewstyle    : {
            flexDirection: 'column',
            height       : 100,
            padding      : 0
        }
    });
