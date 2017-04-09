import ImagePicker from 'react-native-image-picker'

const creatorActions = {}
creatorActions.addCard = () => ({
  type: 'ADD_CARD'
})

creatorActions.removeCard = key => ({
  type: 'REMOVE_CARD',
  key: key
})



creatorActions.attachFile = (key, card) => {
  return dispatch => {
    var options = {
      title: 'Pick Picture',
      storageOptions: {
        skipBackup: true,
        path: '../images'
      }
    }

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        // Open Image Library:
        // ImagePicker.launchImageLibrary(options, (response)  => {
        //   // Same code as in above section!
        // });
        let source = { uri: response.uri };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        dispatch(creatorActions.attach(key, source, card))
      }
    });
  }
}

creatorActions.attach = (key, source, card) => ({
  type: 'ATTACH_FILE',
  key: key,
  updatedCard: Object.assign(card, {
    image: source.uri
  })
})

export default creatorActions

