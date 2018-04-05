// import React, {Component} from "react";
//
// module.exports = {
//
//     url(path){
//         return 'http://localhost:9000' + path;
//     },
//
//     get({url, headers, success, error}) {
//         fetch(url, {
//             method: "GET",
//             headers: this.getHeaders(headers)
//         })
//             .then(response => response.json())
//             .then(json => {
//                 success(json);
//             })
//             .catch(err => {
//                 console.log("err => ", err);
//                 error(err)
//             });
//     },
//
//     post({url, headers, data, body, success, error}) {
//         fetch(url, {
//             method: "POST",
//             headers: this.getHeaders(headers),
//             body: JSON.stringify(data || body)
//         })
//             .then(response => response.json())
//             .then(json => {
//                 success(json);
//             })
//             .catch(err => {
//                 console.log("error", err)
//                 error(err);
//             });
//     },
//
//     getWithAuthToken(options, authFailureHandler){
//         let token = this.getToken();
//         // console.log('in api call')
//         if (token) {
//             get(options);
//         }
//         else {
//             authFailureHandler();
//             //browserHistory.push('/logout');
//         }
//     },
//
//     fetchExcel({url, headers, data, body, success, error}){
//         fetch(url, {
//             headers: this.getHeaders(headers)
//         })
//             .then(response => response.blob())
//             .then(blob => {
//                 let url = window.URL.createObjectURL(blob);
//                 let a = document.createElement('a');
//                 a.href = url;
//                 a.download = "filename.xlsx";
//                 a.click();
//                 success(blob);
//             }).catch(err => {
//             console.log("err => ", err);
//             error(err);
//         });
//     },
//
//     getHeaders(headers){
//         return Object.assign({}, headers,
//             {'Wx-USER-TOKEN': this.getToken()},
//             {"Content-Type": "application/json"}
//         )
//     },
//
//     async getToken(){
//
//         await AsyncStorage.getItem('userid', (err, result) => {
//
//           return result;
//         });
//
//         // return localStorage.token
//     }
// };
