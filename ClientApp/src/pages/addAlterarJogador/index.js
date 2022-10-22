import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetPlayer, PostInsertPlayer, PutUpdatePlayer } from "./actions";

export default function AddAlterarJogador() {
  const [player, setPlayer] = useState({
    id: 0,
    name: '',
    level: 'A',
    position: 1
  });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      if (params.id) {
        //modo de alterar jogador
        const playerResponse = await GetPlayer(params.id);

        if (playerResponse.status !== 200) {
          alert(playerResponse.data)
          navigate('/');
        }

        setPlayer({
          id: playerResponse.data.id,
          name: playerResponse.data.name,
          level: playerResponse.data.level,
          position: playerResponse.data.position,
        })
      }
    })()
  }, [navigate, params.id])

  const addJogador = async () => {
    console.log('add jogador', player);
    const addPlayerResponse = await PostInsertPlayer(player);

    if (addPlayerResponse.status === 201) {
      alert(`Jogador adicionado com sucesso`);
      navigate('/');
    }
    else
      alert('Erro ao adicionar jogador');
  }

  const alterarJogador = async () => {
    console.log('alterar jogador', player);
    const addPlayerResponse = await PutUpdatePlayer(params.id, player);

    if (addPlayerResponse.status === 200) {
      alert(`Jogador alterado com sucesso`);
      navigate('/');
    }
    else
      alert('Erro ao alterar jogador');
  }

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 'auto' }}><h2>{params.id ? 'Alterar Jogador' : 'Adicionar Jogador'}</h2></div>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', margin: '12px', width: '30%' }}>
          <span>Nome</span>
          <input 
            type="text"
            value={player.name}
            onChange={(e) => setPlayer((prevState) => (
              { ...prevState, name: e.target.value }
            ))} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '12px' }}>
          <span>Nivel</span>
          <select
            value={player.level}
            onChange={(e) => setPlayer((prevState) => (
              { ...prevState, level: e.target.value }
            ))} >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '12px' }}>
          <span>Posição</span>
          <select
            value={player.position}
            onChange={(e) => setPlayer((prevState) => (
              { ...prevState, position: e.target.value }
            ))} >
            <option value="1">Goleiro</option>
            <option value="2">Zagueiro</option>
            <option value="3">Meio Campo</option>
            <option value="4">Atacante</option>
          </select>
        </div>
      </div>

      <div style={{ margin: '12px' }}>
        <button style={{ backgroundColor: 'darkred', margin: '8px', color: 'white' }} onClick={() => navigate('/')}>Cancelar</button>
        {
          params.id ? (
            <button style={{ backgroundColor: 'orange', margin: '8px' }} onClick={alterarJogador}>Alterar</button>
          ) : (
            <button style={{ backgroundColor: 'greenyellow', margin: '8px' }} onClick={addJogador}>Adicionar</button>
          )
        }
      </div>
    </>
  )
}