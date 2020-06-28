import * as shelterActions from '../actions/shelterActions';

const initialShelterState = {
  shelters: [],
  womenData: [],
  menData: [],
  familyData: [],
  sumData: {
    'menOccupancy': 0,
    'menCapacity': 0,
    'womenOccupancy': 0,
    'womenCapacity': 0,
    'familyOccupancy': 0,
    'familyCapacity': 0,
    'totalOccupancy': 0,
    'totalyCapacity': 0
  },  
  modalState: false,
}


function shelterReducer(state = initialShelterState, action) {
  switch (action.type) {
    case shelterActions.ADD_SHELTER_DATA:
      return {
        ...state,
        shelters: [action.payload]
      }

    case shelterActions.CHANGE_MODAL_STATE:
      return{
        ...state,
        modalState: !state.modalState
      }

      case shelterActions.ADD_WOMEN_DATA:
        return{
          ...state,
          womenData: [action.payload]
        }

      case shelterActions.ADD_MEN_DATA:
      return{
        ...state,
        menData: [action.payload]
      }

      case shelterActions.ADD_FAMILY_DATA:
      return{
        ...state,
        familyData: [action.payload]
      }

    default:
      console.log('actually here')
      return state
  }
}

export default shelterReducer;