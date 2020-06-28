import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as actions from './redux/actions/shelterActions';
import './styles/InfoModal.scss';

function InfoModal() {

  //redux initialization (setting state + setting dispatch variable)
  const shelterArray = useSelector(state => state);
  const dispatch = useDispatch();

  //local state to go here if required
  const [totOcc, setTotOcc] = useState(0);
  const [totCap, setTotCap] = useState(0);
  const [menOcc, setMenOcc] = useState(0);
  const [womenOcc, setWomenOcc] = useState(0);
  const [menCap, setMenCap] = useState(0);
  const [womenCap, setWomenCap] = useState(0);
  const [familyOcc, setFamilyOcc] = useState(0);
  const [familyCap, setFamilyCap] = useState(0);
  const [coedOcc, setCoedOcc] = useState(0);
  const [coedCap, setCoedCap] = useState(0);
  const [youthOcc, setYouthOcc] = useState(0);
  const [youthCap, setYouthCap] = useState(0);

  useEffect(() => {
    for (let i = 0; i < shelterArray.shelters[0].length; i++)
    {
      setTotOcc(prevState => prevState + shelterArray.shelters[0][i].OCCUPANCY)
      setTotCap(prevState => prevState + shelterArray.shelters[0][i].CAPACITY)
    }
    for (let i = 0; i < shelterArray.menData[0].length; i++)
    {
      setMenOcc(prevState => prevState + shelterArray.menData[0][i].OCCUPANCY)
      setMenCap(prevState => prevState + shelterArray.menData[0][i].CAPACITY)
    }
    for (let i = 0; i < shelterArray.womenData[0].length; i++)
    {
      setWomenOcc(prevState => prevState + shelterArray.womenData[0][i].OCCUPANCY)
      setWomenCap(prevState => prevState + shelterArray.womenData[0][i].CAPACITY)
    }
    for (let i = 0; i < shelterArray.familyData[0].length; i++)
    {
      setFamilyOcc(prevState => prevState + shelterArray.familyData[0][i].OCCUPANCY)
      setFamilyCap(prevState => prevState + shelterArray.familyData[0][i].CAPACITY)
    }
    for (let i = 0; i < shelterArray.coedData[0].length; i++)
    {
      setCoedOcc(prevState => prevState + shelterArray.coedData[0][i].OCCUPANCY)
      setCoedCap(prevState => prevState + shelterArray.coedData[0][i].CAPACITY)
    }
    for (let i = 0; i < shelterArray.youthData[0].length; i++)
    {
      setYouthOcc(prevState => prevState + shelterArray.youthData[0][i].OCCUPANCY)
      setYouthCap(prevState => prevState + shelterArray.youthData[0][i].CAPACITY)
    }
  }, [shelterArray]);


//   //render info table for modal
//   const renderTableData = () => {
//     //Setup Regex
//     return shelterArray.menData[0].map((item, index) => {
//       return (
//          <tr key={Math.random()}>
//            <td className='shelterTable__body-row'>{menOcc}</td>
//          </tr>
//       )
//    })
// }

    return (
      <>
        <div className='infoModal'>
        <table className='infoTable' id='info'>
               <tbody className='infoTable__body'>
                 <tr>
                   <td className='infoTable__body-cell'>Total Occupancy (System)</td>
                   <td className='infoTable__body-cell'>{totOcc}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Capacity (System)</td>
                   <td className='infoTable__body-cell'>{totCap}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Occupancy (Men)</td>
                   <td className='infoTable__body-cell'>{menOcc}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Capacity (Men)</td>
                   <td className='infoTable__body-cell'>{menCap}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Occupancy (Women)</td>
                   <td className='infoTable__body-cell'>{womenOcc}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Capacity (Women)</td>
                   <td className='infoTable__body-cell'>{womenCap}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Occupancy (Families)</td>
                   <td className='infoTable__body-cell'>{familyOcc}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Capacity (Families)</td>
                   <td className='infoTable__body-cell'>{familyCap}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Occupancy (Coed)</td>
                   <td className='infoTable__body-cell'>{coedOcc}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Capacity (Coed)</td>
                   <td className='infoTable__body-cell'>{coedCap}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Occupancy (Youth)</td>
                   <td className='infoTable__body-cell'>{youthOcc}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total Capacity (Youth)</td>
                   <td className='infoTable__body-cell'>{youthCap}</td>
                 </tr>
               </tbody>
               </table>
          <button onClick={() => dispatch(actions.changeModalState())}>Close Window</button>
        </div>
      </>
    );
  }

  export default InfoModal;