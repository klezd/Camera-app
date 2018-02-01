document.addEventListener("deviceready", deviceReady, false);

function deviceReady() {
    document.getElementById("openCamera").addEventListener("click", openCamera, false);
    document.getElementById("openGallery").addEventListener("click", openGallery, false);

    function setOptions(srcType) {
        var options = {
            // Some common settings are 20, 50, and 100
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: srcType,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true  //Corrects Android orientation quirks
        }
        return options;
    }

    function openCamera(selection) {
        var srcType = Camera.PictureSourceType.CAMERA;
        var options = setOptions(srcType);

        navigator.camera.getPicture(onSuccess, onFail, options);
        console.log("open camera");
    }

    function openGallery(selection) {
        var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;   //change source to library
        var options = setOptions(srcType);

        navigator.camera.getPicture(onSuccess, onFail, options);
        console.log("open gallery");
    }

    function onSuccess(imageUrl) {
        var image = document.getElementById('myImage');
        image.src = imageUrl;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

}



