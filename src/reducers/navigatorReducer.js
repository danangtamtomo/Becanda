export const navigator = (state = 'TIMELINE_SCENE', action) => {
  switch(action.type) {
    case 'TIMELINE_SCENE':
      return action.payloads
    break
    case 'CREATOR_SCENE':
      return action.payloads
    case 'NAVIGATE_BACK':
      return {
        scene: 'Back'
      }
    default:
      return 'TIMELINE_SCENE'
  }
}
