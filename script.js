const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt user to select media stream, pass to video element, then play

async function selectMediaStream(){

    try{
        //get what window user wants to share
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    }

    catch(error){

    }
}

button.addEventListener('click', async () =>{

    //disable button when clicked
    button.disabled = true;

    //start picture in picture
    await videoElement.requestPictureInPicture();

    //reset button
    button.disabled = false;

});

selectMediaStream();