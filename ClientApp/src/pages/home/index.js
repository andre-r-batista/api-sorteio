import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Card from "../../components/card"
import { DeletePlayer, GetPlayers } from "./actions"

export default function Home() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ( async () => {
      const getPlayers = await GetPlayers();
      setPlayers(getPlayers);
    })();
  }, []);

  const deletePlayer = async (id) => {
    const deletePlayerResponse = await DeletePlayer(id);

    if (deletePlayerResponse.status === 200) {
      const getPlayers = await GetPlayers();
      setPlayers(getPlayers);
      alert('Jogador excluido com sucesso');
    } else {
      alert('Erro ao excluir jogador');
    }
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 'auto' }}><h2>Lista de Jogadores</h2></div>
        <div style={{ flex: 'auto', alignSelf: 'center', textAlign: 'end', paddingRight: '12px' }}>
          <button style={{ backgroundColor: 'greenyellow' }} onClick={() => navigate('/jogador/add')}>Add Jogador</button>
        </div>
      </div>

      {players.map((player) => (
        <Card jogador={player} key={player.id} handleDeletePlayer={() => deletePlayer(player.id)} handleUpdatePlayer={() => navigate(`/jogador/${player.id}`)} />
      ))}
    </>
  )
}