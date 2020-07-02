import React, {useReducer, useEffect, useState, useRef} from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as actions from './redux/actions/shelterActions';
import {DateRangeInput} from '@datepicker-react/styled'
import moment from 'moment';
import { CSVLink } from "react-csv";
import axios from 'axios';
import './styles/Report.scss';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { ThemeProvider } from "styled-components";

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

  let tempArray = [["Run a report and THEN click here! Some day this will be a proper website, I promise"]];
  let beginDay, endDay;

  const shelterURL = 'https://blooming-castle-18936.herokuapp.com/shelterData';
  const url = 'http://localhost:8080/shelterData'
  const [dateArrayState, setDateArray] = useState([])
  const [tableTest, setTableTest] = useState(false);
  const [sector, setSector] = useState(null);
  const [selectedShelter, setSelectedShelter] = useState(null);
  const [sectorTest, setSectorTest] = useState(false);
  const [shelterTest, setShelterTest] = useState(false);
  const [buttonTest, setButtonTest] = useState(false);
  const [csvButton, setCsvButton] = useState(false);

  const sectorOptions = [
    'Pick a sector here and a date above', 'Women', 'Men', 'Families', 'Co-ed', 'Youth'
  ];
  const sectorDefaultOption = sectorOptions[0];
  const shelterOptions = [
    'Pick a shelter here and a date above', "COSTI - Radisson Hotel (Single)","COSTI - Toronto Plaza Hotel(Fam)","COSTI - Toronto Plaza Hotel(Fam)","COSTI Radisson Hotel","COSTI Radisson Hotel","COSTI Reception Centre","COSTI Toronto Plaza Hotel (Sin)","Christie Ossington Men's Hostel","Christie Ossington South Hostel","Christie Refugee Welcome Centre","Birkdale Residence","Birkdale Residence Motel (Fam)","Birkdale Residence Motel (Men's)","Downsview Dells 1651 Sheppard W","Family Residence - Edward  Co-Ed","Family Residence - Edward Villag","Family Residence - LI Site","Family Residence - MA Site","Family Residence - Main Building","Family Residence - New Plaza","Family Residence - Roycroft Site","Fort York - Staybridge Suites","Fort York Res 38 Bathurst St.","Fort York Res 38 Bathurst St.","Fort York Res 38 Bathurst St.","Robertson House","3306 Kingston Road","Junction Place","Seaton House - 339 George Street","Seaton House - 339 George Street","Seaton House - 339 George Street","Seaton House - 339 George Street","Seaton House - 339 George Street","Seaton House - 339 George Street","Seaton House - 339 George Street","129 Peter St","Womens Res-Alexandra Hotel","Womens' Res - 63 Bellwoods Ave.","Womens' Res - 674 Dundas St. W","Womens' Res - 674 Dundas St. W","Cornerstone 616 Vaughan Rd.","Covenant House-20 Gerrard St. E.","Covenant House-20 Gerrard St. E.","Covenant House-21 McGill Street","Dixon Hall - Heyworth House","Dixon Hall-School House","Eva's Phoenix","Eva's Place","Eva's Satellite","Eva's Satellite","Fife House - Denison Program","Fife-Sherbourne Transitional Pgm","Fred Victor 512 Jarvis St.","Fred Victor T2H 386 Dundas St. E","FV Women's Hostel 86 Lombard","FV Women's Hostel 86 Lombard","Fred Victor BUS - 1161 Caledonia","Fred Victor BUS - 1161 Caledonia","Barrett House","Good Shepherd Centre","Good Shepherd Centre","HFS - 702 Kennedy Shelter","HFS - Savard's Womens' Shelter","HFS - 545 Lakeshore Blvd W.Women","HFS - 545 Lakeshore Blvd. W. Men","HFS - 545 Lakeshore Blvd. W. Men","HFS - Refugee Response Centre -","HFS - Refugee Response Centre -","HFS - Scarborough Shelter","HFS-545 Lakeshore Blvd W.Couple","HFS - Strachan House","HFS - Strachan House","Horizons for Youth","Kennedy House Youth Shelter","Na-Me-Res 14 Vaughan Road","Sagatay 26 Vaughan Road","Eagle's Nest Transition House","SVDP - Amelie House","SVDP - Elisa House","SVDP - Mary's Home","SVDP - Mary's Home","SVDP - St. Clare's Residence","St.Simon's 525 Bloor Street East","St.Simon's 525 Bloor Street East","Street Haven - 87 Pembroke St","Street Haven - 87 Pembroke St","Sojourn House","Sojourn House(Singles)","Sojourn House-Grange (Family)","S.A. Evangeline Residence","S.A. Evangeline Residence","Florence Booth - 723 Queen St. W","Florence Booth - 723 Queen St. W","S.A. Gateway - 107 Jarvis Street","S.A. Gateway - 107 Jarvis Street","S.A. Maxwell Meighen Centre","S.A. Maxwell Meighen Centre","S.A. Maxwell Meighen Centre","S.A. Maxwell Meighen Centre","S.A. New Hope Leslieville","2671 Islington Avenue-Sr.Female","2671 Islington Avenue-Sr.Male","Scott Mission - 502 Spadina Ave","Scott Mission - 502 Spadina Ave","TCH 191 Spadina Rd(Singles)","Tor. Comm. Hostel 191 Spadina Rd","Turning Point Youth Services","Red Door - 1430 Gerrad St E","Yhouse - Vanauley","YMCA Sprott House Walmer Rd","YWCA-80 Woodlawn Av. E.-Women","YWCA-80 Woodlawn Ave. E.-Youth","YWCA - 348 Davenport Road Women","YWCA - 348 Davenport Road Youth","Youth w/o Shelter Emerg Shelter","Youth w/o Shltr Transitional Res","YouthLink - 747 Warden Ave","YouthLink - 747 Warden Ave"
  ]
  const shelterDefaultOption = shelterOptions[0];

  const sectorFunc = () =>{
    setSectorTest(true);
    setShelterTest(false);
    setButtonTest(true);
  }

  const shelterFunc = () =>{
    setSectorTest(false);
    setShelterTest(true);
    setButtonTest(true);
  }

  const dropState = (event) => {
    setSector(event.value);
    setSelectedShelter(event.value);
  }
  
  const loaded = useRef(false);
  useEffect(() => {
    if (loaded.current && sectorTest) {
      async function fetchData() {
        console.log(sector)
        const result = await axios.post(`${shelterURL}/array`, {
          data: dateArrayState,
          sector: sector
        })
        .then(response => {dispatch(actions.addReportShelters(response))})
        .then(() => setTableTest(true))
        return result;
      }
      fetchData()
    } 
    else if (loaded.current && shelterTest){
      async function fetchData() {
        console.log(selectedShelter)
        const result = await axios.post(`${shelterURL}/singleShelter`, {
          data: dateArrayState,
          shelter: selectedShelter
        })
        .then(response => {dispatch(actions.addReportFacilities(response))})
        .then(setTableTest(true))
        return result;
      }
      fetchData()
    }
    else {
        loaded.current = true;
    }
}, [dateArrayState]);
 

  const sendData = () => {
    setCsvButton(true);
    console.log(state);
    async function setPackage() {
      var dateArray = [];
      var currentDate = moment(state.startDate);
      var stopDate = moment(state.endDate);
      beginDay = currentDate;
      endDay = stopDate;
      while (currentDate <= stopDate) {
          dateArray.push( moment(currentDate).format('YYYY-MM-DD') )
          currentDate = moment(currentDate).add(1, 'days');
      }
      setDateArray(dateArray);
    }
    setPackage();
  }

  const renderTableData = () => {
    tempArray = [];
    if (sectorTest && shelterArray.reportShelterArray[0]){
    return shelterArray.reportShelterArray[0].data.map((object, index) => {
      return object.map(item => {
        tempArray.push(item);
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
  else {
    console.log(shelterArray.reportFacilityArray[0]);
    if (shelterArray.reportFacilityArray[0]){
    return shelterArray.reportFacilityArray[0].data.map((object, index) => {
      return object.map(item => {
        tempArray.push(item);
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
  }}
 }
    
  const [state, reactDispatch] = useReducer(reducer, initialState)
  
  return (
    <div className='main'>
       <ThemeProvider
      theme={{
        breakpoints: ["32em", "48em", "64em"],
        reactDatepicker: {
          daySize: [36, 40],
          fontFamily: "system-ui, -apple-system",
          datepickerPosition: 'left',
          datepickerBorderRadius: '10px',
        }
      }}
    >
    <DateRangeInput
      onDatesChange={data => reactDispatch({type: 'dateChange', payload: data})}
      onFocusChange={focusedInput => reactDispatch({type: 'focusChange', payload: focusedInput})}
      startDate={state.startDate} // Date or null
      endDate={state.endDate} // Date or null
      focusedInput={state.focusedInput} // START_DATE, END_DATE or null
    />
    </ThemeProvider>
    <button onClick={() => sectorFunc()}>Arrange by sector</button>
    <button onClick={() => shelterFunc()}>Arrange by shelter</button>
    {sectorTest ? 
    <Dropdown className='dateRange' options={sectorOptions} onChange={(event) => dropState(event)} value={sectorDefaultOption} placeholder="Select an option" />
    : null}
    {shelterTest ? 
    <Dropdown className='dateRange' options={shelterOptions} onChange={(event) => dropState(event)} value={shelterDefaultOption} placeholder="Select an option" />
    : null}
    {buttonTest ? <button onClick={() => sendData()}>World's Okayest Table</button> : null}
    <p>Once you click on download it might look like nothings happening, especially if you select a large date range.<br/> Give it up to 10 seconds to work before trying again (or letting me know). 
    <br/>I'm working on a loading bar/spinner and will get that up in a bit
    </p>
    {tableTest ? <table className='shelterTable' id='shelters'>
               <tbody className='shelterTable__body'>
                 <tr>
                   <th>Date</th>
                   <th>Shelter Name</th>
                   <th>Program Name</th>
                   <th>Sector</th>
                   <th>Occupancy</th>
                   <th>Capacity</th>
                   <th>% Occupancy</th>
                </tr>
                  {renderTableData()}
               </tbody>
            </table>
             : null}
            {csvButton ? <CSVLink
            data={tempArray}
            filename={`shelterData-${sector ? sector : selectedShelter}.csv`}
            className="csvButton"
            target="_blank"
          >
            Download me
          </CSVLink> : <p>Scroll all the way down to download an excel file when you generate a table</p>}
    </div>
  )
}

export default Report;