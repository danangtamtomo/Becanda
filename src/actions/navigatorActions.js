const navigatorActions = {}
navigatorActions.navigateToCreator = payloads => ({
  type: 'CREATOR_SCENE',
  payloads: payloads
})

navigatorActions.navigateBack= () => ({
  type: 'NAVIGATE_BACK'
})

export default navigatorActions


