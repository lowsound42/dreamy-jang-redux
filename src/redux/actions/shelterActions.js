//Action types

export const ADD_SHELTER_DATA = 'ADD_SHELTER_DATA';
export const CHANGE_MODAL_STATE = 'CHANGE_MODAL_STATE';
export const ADD_WOMEN_DATA = 'ADD_WOMEN_DATA';
export const ADD_MEN_DATA = 'ADD_MEN_DATA';
export const ADD_FAMILY_DATA = 'ADD_FAMILY_DATA';
export const ADD_COED_DATA = 'ADD_COED_DATA';
export const ADD_YOUTH_DATA = 'ADD_YOUTH_DATA';


//Action Creators
export const addShelterData = value => ({
  type: ADD_SHELTER_DATA,
  payload: value
});

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

export const changeModalState = () => ({
  type: CHANGE_MODAL_STATE,
});