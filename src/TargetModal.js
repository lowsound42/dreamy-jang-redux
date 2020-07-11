import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import * as actions from './redux/actions/shelterActions';
import './styles/InfoModal.scss';

function TargetModal() {

  //redux initialization (setting state + setting dispatch variable)
  const shelterArray = useSelector(state => state);
  const dispatch = useDispatch();

  //local state to go here if required
  const [bad, setBad] = useState([]);
  const [covenant, setCovenant] = useState(0);
  const [dixon, setDixon] = useState(0);
  const [eva, setEva] = useState(0);
  const [fred, setFred] = useState(0);
  const [fredWomen, setFredWomen] = useState(0);
  const [shepherd, setShepherd] = useState(0);
  const [lakeshore, setLakeshore] = useState(0);
  const [saEvangeline, setSaEvangeline] = useState(0);
  const [salvGate, setSalvGate] = useState(0);
  const [salvIslington, setSalvIslington] = useState(0);
  const [salvMax, setSalvMax] = useState(0);
  const [scott, setScott] = useState(0);
  const [seaton, setSeaton] = useState(0);
  const [simons, setSimons] = useState(0);
  const [haven, setHaven] = useState(0);
  const [willow, setWillow] = useState(0);
  const [womens, setWomens] = useState(0);
  const [youth, setYouth] = useState(0);
  const [youthLink, setYouthLink] = useState(0);
  const [ywca, setYwca] = useState(0);
  const [message, setMessage] = useState([])
  const [christie, setChristie] = useState(0);
  const [christieSouth, setChristieSouth] = useState(0)
  const [cornerstone, setCornerstone] = useState(0);
  const [costi, setCosti] = useState(0);
  const [covPassage, setCovPassage] = useState(0);
  const [dixonSchool, setDixonSchool] = useState(0);
  const [downsview, setDownsview] = useState(0);
  const [evaPhoenix, setEvaPhoenix] = useState(0);
  const [evaPlace, setEvaPlace] = useState(0);
  const [fife, setFife] = useState(0);
  const [fifeSherb, setFifeSherb] = useState(0);
  const [fortYork, setFortYork] = useState(0);
  const [transitionFred, setTransitionFred] = useState(0);
  const [beddedFred, setBeddedFred] = useState(0);
  const [barrett, setBarrett] = useState(0);
  const [homesKennedy, setHomesKennedy] = useState(0);
  const [homesScarb, setHomesScarb] = useState(0);
  const [homesStrachan, setHomesStrachan] = useState(0);
  const [horizons, setHorizons] = useState(0);
  const [junction, setJunction] = useState(0);
  const [kennedy, setKennedy] = useState(0);
  const [naMe, setNaMe] = useState(0);
  const [native, setNative] = useState(0);
  const [sagatay, setSagatay] = useState(0);
  const [scarb, setScarb] = useState(0);
  const [streets, setStreets] = useState(0);
  const [stAme, setStAme] = useState(0);
  const [stMary, setStMary] = useState(0);
  const [stElisa, setStElisa] = useState(0);
  const [stClare, setStClare] = useState(0);
  const [turning, setTurning] = useState(0);
  const [bellwood, setBellwood] = useState(0);
  const [ymca, setYmca] = useState(0);
  const [ymcaSprott, setYmcaSprott] = useState(0);

  useEffect(() => {
    for (let i = 0; i < shelterArray.shelters[0].length; i++){
      let object = shelterArray.shelters[0][i];
      if (object.PROGRAM_NAME === "Christie Ossington Men's Hostel"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setChristie(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Christie Ossington Men's Hostel South"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setChristieSouth(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Cornerstone Place"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setCornerstone(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "COSTI Reception Ctr CITY Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setCosti(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Covenant House -  Transitional Safe Beds for women" || object.PROGRAM_NAME === "Covenant House Residence"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setCovenant(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Covenant House-Rights of Passage"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setCovPassage(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Dixon Hall - Extreme Weather Program" || object.PROGRAM_NAME === "Dixon Hall - Heyworth House"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setDixon(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Dixon Hall - Schoolhouse"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setDixonSchool(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Downsview Dells Bedded Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setDownsview(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Eva's Phoenix"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setEvaPhoenix(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Eva's Place"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setEvaPlace(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Eva's Satellite" || object.PROGRAM_NAME === "Eva's Satellite Extreme Weather Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setEva(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Fife House Denison Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setFife(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Fife-Sherbourne Transitional Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setFifeSherb(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Fort York Residence Bedded Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setFortYork(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Fred Victor Bethlehem United Program" || object.PROGRAM_NAME === "Fred Victor - Bethlehem United Extreme Weather Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setFred(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Fred Victor T2H Bedded Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setTransitionFred(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Fred Victor Transition to Housing:  Bedded Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setBeddedFred(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Fred Victor Women's Extreme Weather Program" || object.PROGRAM_NAME === "Fred Victor Women's Hostel Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setFredWomen(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Good Shepherd - Emergency/Resettlement" || object.PROGRAM_NAME === "Good Shepherd Centre - D.A.R.E."){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setShepherd(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Barrett House"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setBarrett(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "545 Lakeshore Blvd. W.Couple" || object.PROGRAM_NAME === "545 Lakeshore Blvd. W. Men" || object.PROGRAM_NAME === "545 Lakeshore Blvd W. Men Winter Program Lower Level" || object.PROGRAM_NAME === "545 Lakeshore Blvd. W. Women"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setLakeshore(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Homes First Society- Kennedy Shelter Women's Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setHomesKennedy(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Homes First Society - Scarborough Shelter"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setHomesScarb(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Homes First Society - Strachan House"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setHomesStrachan(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Horizons for Youth"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setHorizons(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Junction Place"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setJunction(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Kennedy House Youth Shelter:  Bedded Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setKennedy(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Na-Me-Res (Native Men's Residence)"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setNaMe(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Native Child & Family Services Toronto"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setNative(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Sagatay"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setSagatay(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "S.A. Evangeline - Emergency Weather" || object.PROGRAM_NAME === "S.A. Evangeline Residence - Women's Ministry"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setSaEvangeline(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Salvation Army - Gateway - Extreme Weather Beds" || object.PROGRAM_NAME === "Salvation Army - Gateway - Men's Hostel"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setSalvGate(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Salvation Army - Islington Seniors' Shelter Men's Program" || object.PROGRAM_NAME === "Salvation Army - Islington Seniors' Shelter Women's Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setSalvIslington(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Salvation Army - Maxwell Meighen Emergency Bed Program" || object.PROGRAM_NAME === "Salvation Army - Maxwell Meighen - Extreme Weather Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setSalvMax(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Scarborough Village Residence Main Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setScarb(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Scott Mission - Extreme Weather Program" || object.PROGRAM_NAME === "Scott Mission - Men's Ministry Overnight Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setScott(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Seaton House - Annex Harm Reduction & Managed Alcohol Program" || object.PROGRAM_NAME === "Seaton House - Long Term Program" || object.PROGRAM_NAME === "Seaton House - Hostel Program" || object.PROGRAM_NAME === "Seaton House - Hostels Extreme Weather Program"|| object.PROGRAM_NAME === "Seaton House - Infirmary Bedded Program" || object.PROGRAM_NAME === "Seaton House - O'Neill Harm Reduction Program" || object.PROGRAM_NAME === "Seaton House - Winter Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setSeaton(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Streets to Homes Bedded Program"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setStreets(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "St. Simon's Extreme Weather Program" || object.PROGRAM_NAME === "St. Simon's Shelter"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setSimons(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "St.Vincent De Paul - Amelie House - Women's Shelter"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setStAme(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "St.Vincent De Paul - Mary's Home - Emergency Shelter"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setStMary(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "St.Vincent De Paul - St. Clare's Residence - Transitional Housing"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setStClare(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "St.Vincent De Paul - Elisa House"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setStElisa(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Street Haven - Emergency Hostel" || object.PROGRAM_NAME === "Street Haven: Extreme Weather Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setHaven(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Turning Point Youth Services Shelter"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setTurning(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Willowdale Welcome Centre - Men" || object.PROGRAM_NAME === "Willowdale Welcome Centre - Women"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setWillow(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Women's Residence Extreme Weather Program" || object.PROGRAM_NAME === "Womens' Residence - Main Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setWomens(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Womens' Residence - Bellwoods House"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setBellwood(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "YMCA House-Vanauley"){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setYmca(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "YMCA Sprott House Walmer rd."){
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setYmcaSprott(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "Youth without Shelter Stay In School Program" || object.PROGRAM_NAME === "Youth without Shelter Emergency Shelter Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setYouth(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "YouthLink Emergency Program" || object.PROGRAM_NAME === "YouthLink Transitional Program"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        console.log(counter);
        setYouthLink(prevState => prevState + counter)
      }
      else if (object.PROGRAM_NAME === "YWCA - Adult Women Shelter" || object.PROGRAM_NAME === "YWCA - Youth Shelter"){
        console.log(object);
        let counter = 0;
        counter = counter + object.OCCUPANCY
        setYwca(prevState => prevState + counter)
      }
    }
  },[shelterArray.shelters])

  useEffect(()=> {
    if (christie > 40){
      setMessage(prevMessage => [...prevMessage, 'Christie Mens is over target occupancy ']);
    }
    if (christieSouth > 19){
      setMessage(prevMessage => [...prevMessage, 'Christie Mens south is over target occupancy ']);
    }
    if (cornerstone > 23){
      setMessage(prevMessage => [...prevMessage, 'Cornerstone is over target occupancy ']);
    }
    if (costi > 11){
      setMessage(prevMessage => [...prevMessage, 'Costi is over target occupancy ']);
    }
    if (covPassage > 28){
      setMessage(prevMessage => [...prevMessage, 'Covenant House Passage is over target occupancy ']);
    }
    if (dixonSchool > 29){
      setMessage(prevMessage => [...prevMessage, 'Dixon Schoolhouse is over target occupancy ']);
    }
    if (downsview > 12){
      setMessage(prevMessage => [...prevMessage, 'Downsview is over target occupancy ']);
    }
    if (evaPhoenix > 50){
      setMessage(prevMessage => [...prevMessage, 'Evas Phoenix is over target occupancy ']);
    }
    if (evaPlace > 16){
      setMessage(prevMessage => [...prevMessage, 'Eva Place is over target occupancy ']);
    }
    if (fife > 5){
      setMessage(prevMessage => [...prevMessage, 'Fife is over target occupancy ']);
    }
    if (fifeSherb > 11){
      setMessage(prevMessage => [...prevMessage, 'Fife Sherbourne is over target occupancy ']);
    }
    if (fortYork > 62){
      setMessage(prevMessage => [...prevMessage, 'Fort York Bedded is over target occupancy ']);
    }
    if (transitionFred > 37){
      setMessage(prevMessage => [...prevMessage, 'Fred Victor t2h is over target occupancy ']);
    }
    if (beddedFred > 26){
      setMessage(prevMessage => [...prevMessage, 'Fred Victor bedded is over target occupancy ']);
    }
    if (barrett > 6){
      setMessage(prevMessage => [...prevMessage, 'Barrett is over target occupancy ']);
    }
    if (homesKennedy > 47){
      setMessage(prevMessage => [...prevMessage, 'HFS Kennedy is over target occupancy ']);
    }
    if (homesScarb > 34){
      setMessage(prevMessage => [...prevMessage, 'HFS Scarborough is over target occupancy ']);
    }
    if (homesStrachan > 86){
      setMessage(prevMessage => [...prevMessage, 'HFS Strachan is over target occupancy ']);
    }
    if (horizons > 16){
      setMessage(prevMessage => [...prevMessage, 'Horizons for Youth is over target occupancy ']);
    }
    if (junction > 60){
      setMessage(prevMessage => [...prevMessage, 'Junction is over target occupancy ']);
    }
    if (kennedy > 15){
      setMessage(prevMessage => [...prevMessage, 'Kennedy house is over target occupancy ']);
    }
    if (naMe > 43){
      setMessage(prevMessage => [...prevMessage, 'Na-Me-Re is over target occupancy ']);
    }
    if (native > 12){
      setMessage(prevMessage => [...prevMessage, 'Native child and family is over target occupancy ']);
    }
    if (sagatay > 20){
      setMessage(prevMessage => [...prevMessage, 'Sagatay is over target occupancy ']);
    }
    if (scarb > 72){
      setMessage(prevMessage => [...prevMessage, 'Scarborough Village is over target occupancy ']);
    }
    if (streets > 31){
      setMessage(prevMessage => [...prevMessage, 'street haven is over target occupancy ']);
    }
    if (stAme > 18){
      setMessage(prevMessage => [...prevMessage, 'St. Vincente De Paul Amelie is over target occupancy ']);
    }
    if (stElisa > 27){
      setMessage(prevMessage => [...prevMessage, 'St. Vincente De Paul Elisa is over target occupancy ']);
    }
    if (stMary > 27){
      setMessage(prevMessage => [...prevMessage, 'St. Vincente De Paul Mary is over target occupancy ']);
    }
    if (stClare > 30){
      setMessage(prevMessage => [...prevMessage, 'St. Vincente De Paul St. Clare is over target occupancy ']);
    }
    if (turning > 14){
      setMessage(prevMessage => [...prevMessage, 'Turning Point is over target occupancy ']);
    }
    if (bellwood > 7){
      setMessage(prevMessage => [...prevMessage, 'Bellwood is over target occupancy ']);
    }
    if (ymca > 21){
      setMessage(prevMessage => [...prevMessage, 'YMCA Vanauley is over target occupancy ']);
    }
    if (ymcaSprott > 25){
      setMessage(prevMessage => [...prevMessage, 'YMCA Sprott is over target occupancy ']);
    }
    if (fred > 41){
      setMessage(prevMessage => [...prevMessage, 'Fred Victor Men is over target occupancy ']);
    }
    if (covenant > 83){
      setMessage(prevMessage => [...prevMessage, 'Covenant is over target occupancy ']);
    }
    if (dixon > 40){
      setMessage(prevMessage => [...prevMessage, 'Dixon is over target occupancy ']);
    }
    if (eva > 14){
      setMessage(prevMessage => [...prevMessage, 'Evas satellite is over target occupancy '])
    }
    if (fredWomen > 25){
      setMessage(prevMessage => [...prevMessage, 'Fred Victor Women is over target occupancy ']);
    }
    if (shepherd > 52){
      setMessage(prevMessage => [...prevMessage, 'Good shepherd is over target occupancy ']);
    }
    if (lakeshore > 224){
      setMessage(prevMessage => [...prevMessage, 'Lakeshore is over target occupancy ']);
    }
    if (saEvangeline > 82){
      setMessage(prevMessage => [...prevMessage, 'SA Evangeline is over target occupancy ']);
    }
    if (salvGate > 56){
      setMessage(prevMessage => [...prevMessage, 'Salvation Army Gateway is over target occupancy ']);
    }
    if (salvIslington > 30){
      setMessage(prevMessage => [...prevMessage, 'Salvation Army Islington is over target occupancy ']);
    }
    if (salvMax > 280){
      setMessage(prevMessage => [...prevMessage, 'Salvation Army Maxwell is over target occupancy ']);
    }
    if (scott > 36){
      setMessage(prevMessage => [...prevMessage, 'Scott is over target occupancy ']);
    }
    if (seaton > 220){
      setMessage(prevMessage => [...prevMessage, 'Seaton is over target occupancy ']);
    }
    if (simons > 35){
      setMessage(prevMessage => [...prevMessage, 'Simons is over target occupancy ']);
    }
    if (willow > 184){
      setMessage(prevMessage => [...prevMessage, 'Willowdale is over target occupancy ']);
    }
    if (womens > 51){
      setMessage(prevMessage => [...prevMessage, 'Womens residence is over target occupancy ']);
    }
    if (youth > 33){
      setMessage(prevMessage => [...prevMessage, 'Youth without shelter is over target occupancy ']);
    }
    if (youthLink > 45){
      console.log(youthLink)
      setMessage(prevMessage => [...prevMessage, 'YouthLink is over target occupancy ']);
    }
    if (ywca > 34){
      setMessage(prevMessage => [...prevMessage, 'YWCA is over target occupancy ']);
    }
    if (haven > 40){
      setMessage(prevMessage => [...prevMessage, 'Street Haven is over target occupancy ']);
    }
  }, [bad, fred, covenant, haven, willow, ywca, womens, youth, youthLink, 
    simons, seaton, scott, salvMax, salvGate, salvIslington, saEvangeline,
  dixon, eva, fredWomen, shepherd, lakeshore ])


  const renderTableData = () => {
    return message.map((item, index) => {
      return (
         <tr key={Math.random()}>
           <td className='shelterTable__body-row--date'>{item}</td>
         </tr>
      )
   })
}

    return (
      <>
        <div className='infoModal'>
        <p>Date: {shelterArray.date}</p>
        <table className='infoTable' id='info'>
               <tbody className='infoTable__body'>
                 <tr>
                 {renderTableData()}
                  <td></td>
                 </tr>
               </tbody>
               </table>
          <button className='closeButton' onClick={() => dispatch(actions.changeTargetModalState())}>Close Window</button>
        </div>
      </>
    );
  }

  export default TargetModal;