import React, {useReducer, useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actions from './redux/actions/shelterActions';
import {DateRangeInput} from '@datepicker-react/styled'
import moment from 'moment';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { addReportShelters } from './redux/actions/shelterActions';

const initialState = {
  startDate: null,
  endDate: null,
  focusedInput: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'focusChange':
      return {...state, focusedInput: action.payload}
    case 'dateChange':
      return action.payload
    default:
      throw new Error()
  }
}

function Report() {

   //redux initialization (setting state + setting dispatch variable)
   const shelterArray = useSelector(state => state);
   const dispatch = useDispatch();

  const shelterURL = 'https://blooming-castle-18936.herokuapp.com/shelterData/  ';
  const url = 'http://localhost:8080/shelterData/'
  const [dateArrayState, setDateArray] = useState([])
  const [tableTest, setTableTest] = useState(false);
  const [sector, setSector] = useState(null);
  const options = [
    'Women', 'Men', 'Families', 'Co-ed', 'Youth'
  ];

  const dropState = (event) => {
    setSector(event.value);
  }

  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current) {
      async function fetchData() {
        console.log(sector)
        const result = await axios.post(`${url}/array`, {
          data: dateArrayState,
          sector: sector
        })
        .then(response => {dispatch(actions.addReportShelters(response))})
        .then(() => setTableTest(true))
        return result;
      }
      fetchData()
    } else {
        loaded.current = true;
    }
}, [dateArrayState]);
 

  const sendData = () => {
    console.log(state);
    async function setPackage() {
      var dateArray = [];
      var currentDate = moment(state.startDate);
      var stopDate = moment(state.endDate);
      while (currentDate <= stopDate) {
          dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
          currentDate = moment(currentDate).add(1, 'days');
      }
      setDateArray(dateArray);
    }
    setPackage();
  }

  const renderTableData = () => {
   return shelterArray.reportShelterArray[0].data.map((object, index) => {
      return object.map(item => {
        console.log('hmm')
        return (
          <tr key={Math.random()}>
            <td className='shelterTable__body-row--date'>{item.OCCUPANCY_DATE.slice(0,10)}</td>
            <td className='shelterTable__body-row'>{item.SHELTER_NAME}</td>
            <td className='shelterTable__body-row--big'>{item.PROGRAM_NAME}</td>
            <td className='shelterTable__body-row--big'>{item.SECTOR}</td>
            <td className='shelterTable__body-row--small'>{item.OCCUPANCY}</td>
            <td className='shelterTable__body-row--small'>{item.CAPACITY}</td>
            <td className='shelterTable__body-row--small'>{Number((item.OCCUPANCY/item.CAPACITY)*100).toFixed(2)+ '%'}</td>
          </tr>
       )
      })
      
    })
 }
    
  const [state, reactDispatch] = useReducer(reducer, initialState)
  
  return (
    <>
    <DateRangeInput
      onDatesChange={data => reactDispatch({type: 'dateChange', payload: data})}
      onFocusChange={focusedInput => reactDispatch({type: 'focusChange', payload: focusedInput})}
      startDate={state.startDate} // Date or null
      endDate={state.endDate} // Date or null
      focusedInput={state.focusedInput} // START_DATE, END_DATE or null
    />
    <Dropdown options={options} onChange={(event) => dropState(event)} placeholder="Select an option" />;
    <button onClick={() => sendData()}>Click to download info</button>
    {tableTest ? <table className='shelterTable' id='shelters'>
               <tbody className='shelterTable__body'>
                 <tr>
                   <th>Date</th>
                   <th>Shelter Name</th>
                   <th>Program Name</th>
                   <th>Occupancy</th>
                   <th>Capacity</th>
                   <th>% Occupancy</th>
                </tr>
                  {renderTableData()}
               </tbody>
            </table> : null}
    </>
  )
}

export default Report;