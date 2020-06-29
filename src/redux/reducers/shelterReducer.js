import * as shelterActions from '../actions/shelterActions';

const initialShelterState = {
  shelters: [],
  date: null,
  womenData: [],
  menData: [],
  familyData: [],
  coedData: [],
  youthData: [],
  spinnerState: false,
  modalState: false,
}


function shelterReducer(state = initialShelterState, action) {
  switch (action.type) {
    case shelterActions.ADD_SHELTER_DATA:
      return {
        ...state,
        shelters: [action.payload]
      }
    
    case shelterActions.RESET_SHELTER_ARRAY:
      return{
        ...state,
        shelters:[]
      }

    case shelterActions.ADD_SELECTED_DATE:
      return {
        ...state,
        date: action.payload
      }

    case shelterActions.TOGGLE_SPINNER_ON:
      return {
        ...state,
        spinnerState: true
      }

    case shelterActions.TOGGLE_SPINNER_OFF:
        return{
          ...state,
          spinnerState: false
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

      case shelterActions.ADD_COED_DATA:
        return{
          ...state,
          coedData: [action.payload]
        }
        
      case shelterActions.ADD_YOUTH_DATA:
        console.log(action.payload);
        return{
          ...state,
          youthData: [action.payload]
        }

    default:
      return state
  }
}

export default shelterReducer;