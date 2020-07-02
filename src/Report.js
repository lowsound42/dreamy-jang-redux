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
    'Pick a shelter here and a date above', 
    "COSTI - Radisson Hotel (Single Pregnant Women)","COSTI - Toronto Plaza Hotel (Non Refugee Families)","COSTI - Toronto Plaza Hotel (Refugees)","COSTI - Radisson Hotel (Non Refugee Families)","COSTI Radisson Hotel Family Program.","COSTI Reception Ctr CITY Program","COSTI - Toronto Plaza Hotel (Single Pregnant Women)","Christie Ossington Men's Hostel","Christie Ossington Men's Hostel South","Christie Refugee Welcome Ctr - Settlement and Support","Birkdale Residence - Bedded Program","Birkdale Residence - Toronto Plaza Hotel Program (Non Refugees)","Birkdale Residence  - Single Male Program","Downsview Dells Bedded Program","Edward Village Singles Program","Family Residence - Edward Village Hotel","Family Residence - LI Site (Internal Referral Only)","Family Residence - MA Site (Internal Referral Only)","Family Residence - Main","Family Residence - New Plaza (Internal Referral Only)","Family Residence - Roycroft Site","Fort York - Staybridge Suites","Fort York Extreme Weather Program","Fort York Residence Bedded Program","Fort York SRO Units Program","Robertson House - MAIN Program","Scarborough Village Residence Main Program","Junction Place","Seaton House - Annex Harm Reduction & Managed Alcohol Program","Seaton House - Hostel Program","Seaton House - Hostels Extreme Weather Program","Seaton House - Infirmary Bedded Program","Seaton House - Long Term Program","Seaton House - O'Neill Harm Reduction Program","Seaton House - Winter Program","Streets to Homes Bedded Program","Women's Res-Alexandra Hotel","Womens' Residence - Bellwoods House","Women's Residence Extreme Weather Program","Womens' Residence - Main Program","Cornerstone Place","Covenant House -  Transitional Safe Beds for women","Covenant House Residence","Covenant House-Rights of Passage","Dixon Hall - Extreme Weather Program","Dixon Hall - Heyworth House","Dixon Hall - Schoolhouse","Eva's Phoenix","Eva's Place","Eva's Satellite","Eva's Satellite Extreme Weather Program","Fife House Denison Program","Fife-Sherbourne Transitional Program","Fred Victor Transition to Housing:  Bedded Program","Fred Victor T2H Bedded Program","Fred Victor Women's Extreme Weather Program","Fred Victor Women's Hostel Program","Fred Victor - Bethlehem United Extreme Weather Program","Fred Victor Bethlehem United Program","Barrett House","Good Shepherd - Emergency/Resettlement","Good Shepherd Centre - D.A.R.E.","Homes First Society- Kennedy Shelter Women's Program","Homes First Society - Savard's Womens' Shelter","545 Lakeshore Blvd. W. Women","545 Lakeshore Blvd W. Men Winter Program Lower Level","545 Lakeshore Blvd. W. Men","Willowdale Welcome Centre - Men","Willowdale Welcome Centre - Women","Homes First Society - Scarborough Shelter","545 Lakeshore Blvd. W.Couple","Homes First Society - Flex Program","Homes First Society - Strachan House","Horizons for Youth","Kennedy House Youth Shelter:  Bedded Program","Na-Me-Res (Native Men's Residence)","Sagatay","Native Child & Family Services Toronto","St.Vincent De Paul - Amelie House - Women's Shelter","St.Vincent De Paul - Elisa House","SVDP - Mary's Home Extreme Weather Program","St.Vincent De Paul - Mary's Home - Emergency Shelter","St.Vincent De Paul - St. Clare's Residence - Transitional Housing","St. Simon's Extreme Weather Program","St. Simon's Shelter","Street Haven - Emergency Hostel","Street Haven: Extreme Weather Program","Sojourn House Transitional Housing Program","Sojourn House Bedded Program","Sojourn House - Refugee Family Hotel Program-Grange","S.A. Evangeline - Emergency Weather","S.A. Evangeline Residence - Women's Ministry","Salvation Army - Florence Booth Extreme Weather Program","Salvation Army - Florence Booth Womens Ministry","Salvation Army - Gateway - Extreme Weather Beds","Salvation Army - Gateway - Men's Hostel","S.A. Maxwell Meighen Transition to Housing","Salvation Army - Maxwell Meighen - Extreme Weather Program","Salvation Army - Maxwell Meighen Emergency Bed Program","Salvation Army - Maxwell Meighen Primary Support Unit","Salvation Army - New Hope - Men's Hostel","Salvation Army - Islington Seniors' Shelter Women's Program","Salvation Army - Islington Seniors' Shelter Men's Program","Scott Mission - Extreme Weather Program","Scott Mission - Men's Ministry Overnight Program","TCH-Singles","TCH (program)","Turning Point Youth Services Shelter","Red Door - Family Shelter","YMCA House-Vanauley","YMCA Sprott House Walmer rd.","YWCA - Adult Women Shelter","YWCA - Youth Shelter","YWCA Davenport - Adult","YWCA Davenport - Youth","Youth without Shelter Emergency Shelter Program","Youth without Shelter Stay In School Program","YouthLink Emergency Program","YouthLink Transitional Program"
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