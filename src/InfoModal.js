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
                   <td className='infoTable__body-cell'>Sector</td>
                   <td className='infoTable__body-cell'>Occupancy</td>
                   <td className='infoTable__body-cell'>Capacity</td>
                   <td className='infoTable__body-cell'>Percentage Occupancy</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Women</td>
                   <td className='infoTable__body-cell'>{womenOcc}</td>
                   <td className='infoTable__body-cell'>{womenCap}</td>
                   <td className='infoTable__body-cell'>{Number((womenOcc/womenCap)*100).toFixed(2)+'%'}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Men</td>
                   <td className='infoTable__body-cell'>{menOcc}</td>
                   <td className='infoTable__body-cell'>{menCap}</td>
                   <td className='infoTable__body-cell'>{Number((menOcc/menCap)*100).toFixed(2)+'%'}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Families</td>
                   <td className='infoTable__body-cell'>{familyOcc}</td>
                   <td className='infoTable__body-cell'>{familyCap}</td>
                   <td className='infoTable__body-cell'>{Number((familyOcc/familyCap)*100).toFixed(2)+'%'}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Co-ed</td>
                   <td className='infoTable__body-cell'>{coedOcc}</td>
                   <td className='infoTable__body-cell'>{coedCap}</td>
                   <td className='infoTable__body-cell'>{Number((coedOcc/coedCap)*100).toFixed(2)+'%'}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Youth</td>
                   <td className='infoTable__body-cell'>{youthOcc}</td>
                   <td className='infoTable__body-cell'>{youthCap}</td>
                   <td className='infoTable__body-cell'>{Number((youthOcc/youthCap)*100).toFixed(2)+'%'}</td>
                 </tr>
                 <tr>
                   <td className='infoTable__body-cell'>Total</td>
                   <td className='infoTable__body-cell'>{totOcc}</td>
                   <td className='infoTable__body-cell'>{totCap}</td>
                   <td className='infoTable__body-cell'>{Number((totOcc/totCap)*100).toFixed(2)+'%'}</td>
                 </tr>
               </tbody>
               </table>
          <button onClick={() => dispatch(actions.changeModalState())}>Close Window</button>
        </div>
      </>
    );
  }

  export default InfoModal;