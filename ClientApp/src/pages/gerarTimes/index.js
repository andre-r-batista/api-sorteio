import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Times from "../../components/times";
import { PostSorteiaTimes } from "./actions";

export default function GerarTimes() {
  const [playersCheck, setPlayersCheck] = useState([]);
  const [team, setTeam] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async() => {
      const playersChecked = location.state.players.filter(x => x.checked);
      setPlayersCheck(playersChecked);
      sortStart(playersChecked);
    })()
  }, [location])

  const sortStart = async (players) => {
    const timesResponse = await PostSorteiaTimes(players);
    console.log(timesResponse);

    if (timesResponse.status !== 200) {
      //erro
      alert(timesResponse.data);
    } else {
      setTeam(timesResponse.data);
      alert('Sorteado com sucesso')
    }
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 'auto' }}><h2>Gerar Times</h2></div>
        <div style={{ flex: 'auto', alignSelf: 'center', textAlign: 'end', paddingRight: '12px' }}>
          <button style={{ backgroundColor: 'greenyellow' }} onClick={() => sortStart(playersCheck)}>Sortear Jogadores Novamente</button>
        </div>
      </div>

      <Times timesGerado={team}/>
    </>
  );
}