import React from "react";
import {AppRegistry, StyleSheet, Text, View, PixelRatio, TouchableOpacity, Image, Platform} from "react-native";
import SplashScreen from "react-native-splash-screen";
//import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from "react-native-image-picker";
var FilePickerManager = require('NativeModules').FilePickerManager;

//import FileOpener from 'react-native-file-opener';
//import futch from '../api';
const futch = (url, opts = {}, onProgress) => {
    console.log(url, opts)
    return new Promise((res, rej) => {
        var xhr = new XMLHttpRequest();
        xhr.open(opts.method || 'get', url);
        for (var k in opts.headers || {})
            xhr.setRequestHeader(k, opts.headers[k]);
        xhr.onload  = e => res(e.target);
        xhr.onerror = rej;
        if (xhr.upload && onProgress)
            xhr.upload.onprogress = onProgress; // event.loaded / event.total * 100 ; //event.lengthComputable
        xhr.send(opts.body);
    });
}

export default class FileUpload extends React.Component {
    componentDidMount() {
        // do anything while splash screen keeps, use await to wait for an async task.
        SplashScreen.hide();
    }

    openSampleDoc() {
        const options = {
            title                : 'File Picker',
            chooseFileButtonTitle: 'Choose File...'
        };

        FilePickerManager.showFilePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePickerManager Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    file: response
                });
            }
        });
    }

    state = {
        avatarSource: null,
        videoSource : null,
        progress    : 0,
    };

    selectPhotoTapped() {
        const options = {
            quality       : 1.0,
            maxWidth      : 500,
            maxHeight     : 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                var source;

                // You can display the image using either:
                //source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                //Or:
                if (Platform.OS === 'android') {
                    source = {uri: response.uri, isStatic: true};
                } else {
                    source = {uri: response.uri.replace('file://', ''), isStatic: true};
                }
                const data = new FormData();
                data.append('name', 'testName');
                data.append('photo', {
                    uri : source.uri,
                    type: 'image/jpeg',
                    name: 'testPhotoName'
                });
                const url = Platform.OS === 'android' ? 'http://10.0.3.2:3000' : 'http://localhost:3000'; // genymotion's localhost is 10.0.3.2
                futch(url + '/single', {
                    method: 'post',
                    body  : data
                }, (e) => {
                    const progress = e.loaded / e.total;
                    console.log(progress);
                    this.setState({
                        progress: progress
                    });
                }).then((res) => console.log(res), (e) => console.log(e))

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    selectVideoTapped() {
        const options = {
            title               : 'Video Picker',
            takePhotoButtonTitle: 'Take Video...',
            mediaType           : 'mixed',
            videoQuality        : 'medium'
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    videoSource: response.uri
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.progress}</Text>
                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource}/>
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.openSampleDoc.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer]}>
                        <Text>Select a Video</Text>
                    </View>
                </TouchableOpacity>

                { this.state.videoSource &&
                <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container      : {
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor   : '#9B9B9B',
        borderWidth   : 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems    : 'center'
    },
    avatar         : {
        borderRadius: 75,
        width       : 150,
        height      : 150
    }
});

module.exports = FileUpload;
