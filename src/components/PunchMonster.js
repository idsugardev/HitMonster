import React, {useState} from 'react';

function PunchMonster(){
  // const darah = props.darah;
  // console.log(props);
  // method didalam function
  // pakai cara const = (data/event) => {}
  const [darah, setDarah] = useState(100);
  const [kritis, setKritis] = useState('green');
  const [tampak, setTampak] = useState('block');
  const [hilang, setHilang] = useState('none');

  const punchMonster = (e) => {
    const darahSegar = darah - 10; 

    if(darahSegar < 50)
    {
      setKritis('red');
    }

    if(darahSegar < 10)
    {      
      setTampak('none');
      setHilang('block');
      setDarah(darahSegar);
    }
    else
    {
      setDarah(darahSegar);       
    }
    
  }

  const resetGame = (e) => {
    e.preventDefault();
    setDarah(100);
    setKritis('green');
    setTampak('block');
    setHilang('none');

  }



  return (
   <div className="col s12 m12">
     <div className="row">
     <div className="monster">
      <img src="/hitmonster/images/monster.png" style={{display: tampak}} alt="monster"/>
      <img src="/hitmonster/images/monsterdead.png" style={{display: hilang}} alt="monster dead"/>
     </div>
     </div>
      <div className="row">
        <div className="darah" style={{width: darah + '%', background: kritis}}></div>
      </div>

     <div className="row">
       <button className="btn-small" onClick={punchMonster}>Pukul</button>
     </div>

     <div className="row">
     <button className="btn-small" onClick={resetGame} style={{display: hilang}}>Reset</button>
     </div>

   </div>
  );

}

export default PunchMonster;