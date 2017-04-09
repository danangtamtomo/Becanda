export const cards = (state = [{image: '', sound: ''}], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...state, {
        image: '',
        sound: ''
      }]
      break
    case 'REMOVE_CARD':
      let removedCard = state.slice()
      removedCard.splice(action.key, 1)
      return removedCard
      break
    case 'ATTACH_FILE':
      return state.map((card, index) => {
        if (index === action.key) {
          return Object.assign({}, card, {
            image: action.updatedCard.image
          })
        }
        return card
      })
      break
    default:
      return state
  }
}
