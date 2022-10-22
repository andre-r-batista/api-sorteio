import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Card from "../../components/card"
import { GetPlayers } from "../home/actions";

export default function Sorteio() {
  const [players, setPlayers] = useState([]);
  const [checkAllPlayers, setCheckAllPlayers] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    ( async () => {
      const getPlayers = await GetPlayers();
      setPlayers(getPlayers);
    })();
  }, []);

  const checkedPlayer = (event, id) => {
    const playersCheck = [...players];
    let player = playersCheck.find(x => x.id === id);

    player['checked'] = event.target.checked

    setPlayers([...playersCheck]);

    setCheckAllPlayers(false);
  }

  const checkedAllPlayers = (event) => {
    setCheckAllPlayers(event.target.checked);

    checkedAll(event.target.checked);
  }

  const checkedAll = (check) => {
    const playersCheck = [...players];
    
    playersCheck.forEach(player => player['checked'] = check);

    setPlayers([...playersCheck]);
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 'auto' }}><h2>Sortear Jogadores</h2></div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label>
          <input
            type="checkbox"
            checked={checkAllPlayers}
            onChange={checkedAllPlayers} />
            Selecionar todos os jogadores
        </label>
      </div>

      {players.map((player) => (
        <Card jogador={player} key={player.id} handleCheckbox={(event) => checkedPlayer(event, player.id)} />
      ))}

      <div style={{ flex: 'auto', alignSelf: 'center', textAlign: 'center', paddingRight: '12px', marginTop: '24px' }}>
        <button style={{ backgroundColor: 'greenyellow', fontSize: '16px' }} onClick={() => navigate('/gerartimes', { state: {players} })}>Gerar Times</button>
      </div>
    </>
  )
}