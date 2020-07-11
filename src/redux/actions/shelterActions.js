//Action types

export const ADD_SHELTER_DATA = 'ADD_SHELTER_DATA';
export const CHANGE_MODAL_STATE = 'CHANGE_MODAL_STATE';
export const CHANGE_TARGETMODAL_STATE = 'CHANGE_TARGETMODAL_STATE';
export const ADD_WOMEN_DATA = 'ADD_WOMEN_DATA';
export const ADD_MEN_DATA = 'ADD_MEN_DATA';
export const ADD_FAMILY_DATA = 'ADD_FAMILY_DATA';
export const ADD_COED_DATA = 'ADD_COED_DATA';
export const ADD_YOUTH_DATA = 'ADD_YOUTH_DATA';
export const TOGGLE_SPINNER_OFF = 'TOGGLE_SPINNER_ON';
export const TOGGLE_SPINNER_ON = 'TOGGLE_SPINNER_OFF';
export const ADD_SELECTED_DATE = 'ADD_SELECTED_DATE';
export const RESET_SHELTER_ARRAY = 'RESET_SHELTER_ARRAY';
export const ADD_REPORT_SHELTERS = 'ADD_REPORT_SHELTERS';
export const ADD_REPORT_FACILITIES = 'ADD_REPORT_FACILITIES';
export const ADD_TARGETCHECKER_DATA = 'ADD_TARGETCHECKER_DATA';
export const RESET_TARGETCHECKER_ARRAY = 'RESET_TARGETCHECKER_ARRAY';

//Action Creators
export const reset = () => ({
  type: RESET_SHELTER_ARRAY
})

export const resetTarget = () => ({
  type: RESET_TARGETCHECKER_ARRAY,
})

export const addShelterData = value => ({
  type: ADD_SHELTER_DATA,
  payload: value
});

export const addReportShelters = value => ({
  type: ADD_REPORT_SHELTERS,
  payload: value
});

export const addReportFacilities = value => ({
  type: ADD_REPORT_FACILITIES,
  payload: value
});

export const addTargetCheckerData = value => ({
  type: ADD_TARGETCHECKER_DATA,
  payload: value
});

export const addSelectedDate = value => ({
  type: ADD_SELECTED_DATE,
  payload: value
})

export const addWomenData = value => ({
  type: ADD_WOMEN_DATA,
  payload: value
});

export const addMenData = value => ({
  type: ADD_MEN_DATA,
  payload: value
});

export const addFamilyData = value => ({
  type: ADD_FAMILY_DATA,
  payload: value
});

export const addCoedData = value => ({
  type: ADD_COED_DATA,
  payload: value
});

export const addYouthData = value => ({
  type: ADD_YOUTH_DATA,
  payload: value
});

export const toggleSpinnerOn = () => ({
  type: TOGGLE_SPINNER_ON,
});

export const toggleSpinnerOff = () => ({
  type: TOGGLE_SPINNER_OFF,
});

export const changeModalState = () => ({
  type: CHANGE_MODAL_STATE,
});

export const changeTargetModalState = () => ({
  type: CHANGE_TARGETMODAL_STATE,
});