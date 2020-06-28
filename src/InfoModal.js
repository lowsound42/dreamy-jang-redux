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
        <p className='infoModal__para'>Total Occupancy in system: <span className='infoModal__para-span'>{totOcc}</span></p>
        <p className='infoModal__para'>Total Capacity of system: <span className='infoModal__para-span'>{totCap}</span></p>
        <p className='infoModal__para'>Total Occupancy (Women): <span className='infoModal__para-span'>{womenOcc}</span></p>
        <p className='infoModal__para'>Total Capacity (Women): <span className='infoModal__para-span'>{womenCap}</span></p>
        <p className='infoModal__para'>Total Occupancy (Men): <span className='infoModal__para-span'>{menOcc}</span></p>
        <p className='infoModal__para'>Total Capacity (Men): <span className='infoModal__para-span'>{menCap}</span></p>
        <p className='infoModal__para'>Total Occupancy (Families): <span className='infoModal__para-span'>{familyOcc}</span></p>
        <p className='infoModal__para'>Total Capacity (Families): <span className='infoModal__para-span'>{familyCap}</span></p>
          <button onClick={() => dispatch(actions.changeModalState())}>Close Window</button>
        </div>
      </>
    );
  }

  export default InfoModal;