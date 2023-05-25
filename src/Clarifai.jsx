//! @deprecated
export async function retrieveImageData(faceUrl) {
  const raw = JSON.stringify({
    user_app_id: {
      user_id: 'clarifai',
      app_id: 'main',
    },
    inputs: [
      {
        data: {
          image: {
            url: faceUrl,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Key ' + '2e4a2196676d4e4f8e0dee0b12b14b62',
    },
    body: raw,
  };

  // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
  // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
  // this will default to the latest version_id

  try {
    const response = await fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Error retrieving face data', error);
  }
}

export function calculateFaceLocation(data) {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage');
  const imageWidth = Number(image.width);
  const imageHeight = Number(image.height);

  return {
    topRow: clarifaiFace.top_row * imageHeight,
    leftCol: clarifaiFace.left_col * imageWidth,
    bottomRow: imageHeight - clarifaiFace.bottom_row * imageHeight,
    rightCol: imageWidth - clarifaiFace.right_col * imageWidth,
  };
}
