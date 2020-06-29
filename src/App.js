import React, {useState, useEffect, useRef} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { useSelector, useDispatch } from "react-redux";
import * as actions from './redux/actions/shelterActions';
import InfoModal from './InfoModal';
import axios from 'axios';
import Spinner from './Spinner';
import loader from './assets/loader.gif';
import './styles/App.scss';

function App() {
  
  //Setting url to point at blooming castle
  const shelterURL = 'https://blooming-castle-18936.herokuapp.com/shelterData/';

  //redux initialization (setting state + setting dispatch variable)
  const shelterArray = useSelector(state => state);
  const dispatch = useDispatch();

  //local state 
  const [selectedDay, setDay] = useState(null); //calendar state
  const [formattedDate, setFormattedDate] = useState(null) //formatting date for url request
  const [tableTest, setTableTest] = useState(false);
  const [buttonTest, setButtonTest] = useState(false);

  const buttonTestFunc = () => {
    setTimeout(
      function(){setButtonTest(true)}
    , 2000)
  }

 
  useEffect(() => {
    console.log(shelterArray.shelters[0])
      if ((shelterArray.shelters[0] < 1) && selectedDay)
      {
        dispatch(actions.toggleSpinnerOn())
      }
      else dispatch(actions.toggleSpinnerOff());
    }, [shelterArray.shelters]);


  //Fetch data from blooming-castle db
  useEffect(() => {
    setTimeout(function(){setButtonTest(false)},800);
    formattedDate ? dispatch(actions.addSelectedDate(formattedDate.slice(0,10))): dispatch(actions.addSelectedDate(formattedDate));    
    async function fetchData() {
      const result = await axios(`${shelterURL}${formattedDate}`);
      return result;
    }
    fetchData()
    .then(result => (dispatch(actions.addShelterData(result.data))))  
  }, [formattedDate]);


  //react day picker click handler
  const handleDayClick = (data) => {  
    
    setDay(data) 

    //date formatting bullshittery
    let year = data.getFullYear();
    let day = data.getDate();
    let month = data.getMonth() + 1;
    setTableTest(true)
    if (day < 10){
      day = `0${day}`;
    }
    if (month < 10){
      month = `0${month}`;
    }
    if (year > 2019){
    setFormattedDate(`${year}-${month}-${day}T00:00:00`);
    } else if (year <= 2019){
      setFormattedDate(`${year}-${month}-${day}`);
    }
  }

    //process data
    const doTheProcessing = () => {
      dispatch(actions.changeModalState())
      dispatch(actions.addWomenData(shelterArray.shelters[0].filter(item => ((item.SECTOR.includes('Women'))))));
      dispatch(actions.addMenData(shelterArray.shelters[0].filter(item => ((item.SECTOR.includes('Men'))))));
      dispatch(actions.addFamilyData(shelterArray.shelters[0].filter(item => ((item.SECTOR.includes('Families'))))));
      dispatch(actions.addCoedData(shelterArray.shelters[0].filter(item => ((item.SECTOR.includes('Co-ed'))))));
      dispatch(actions.addYouthData(shelterArray.shelters[0].filter(item => ((item.SECTOR.includes('Youth'))))));
    }

  //rendering data to table
  const renderTableData = () => {
    buttonTestFunc()
    return shelterArray.shelters[0].map((item, index) => {
       return (
          <tr key={Math.random()}>
            <td className='shelterTable__body-row--date'>{item.OCCUPANCY_DATE.slice(0,10)}</td>
            <td className='shelterTable__body-row'>{item.SHELTER_NAME}</td>
            <td className='shelterTable__body-row--big'>{item.PROGRAM_NAME}</td>
            <td className='shelterTable__body-row--small'>{item.OCCUPANCY}</td>
            <td className='shelterTable__body-row--small'>{item.CAPACITY}</td>
            <td className='shelterTable__body-row--small'>{Number((item.OCCUPANCY/item.CAPACITY)*100).toFixed(2)+ '%'}</td>
          </tr>
       )
    })
 }
    return (
      <>
      <h1 className='title'>Dreamy Jang Reborn</h1>
      <div className='calendar'>
        <DayPicker className='theActual'
          selectedDays={selectedDay}
          onDayClick={(data) => handleDayClick(data)}
          disabledDays={[
            {
              after: (new Date(new Date().setDate(new Date().getDate()-1))),
            },
          ]}
        />
        <p>
          {selectedDay
            ? null
            : 'Please select a day'}
        </p>
        {buttonTest ? <button className='dataButton' onClick={() => doTheProcessing()}>More Data</button> : null}
        {shelterArray.modalState ? <InfoModal/> : null}
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
        {shelterArray.spinnerState ? <Spinner/> : null}
      </div>
      </>
    );
  }

  export default App;