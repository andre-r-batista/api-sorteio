import util from "../../services/util";

export default function Card({jogador, handleUpdatePlayer = null, handleDeletePlayer = null, handleCheckbox = null}) {
  return (
    <div style={{ display: 'flex', border: '1px solid black', alignItems: 'center' }}>
      {
        handleCheckbox ? (
          <input
            type="checkbox"
            checked={jogador.checked}
            onChange={handleCheckbox} />
        ) : null
      }
      <div style={{ flex: 'auto', paddingLeft: '12px', margin: '8px' }}>{jogador.name}</div>
      <div style={{ flex: 'auto' }}>{jogador.level}</div>
      <div style={{ flex: 'auto' }}>{util.obterPosicaoJogador(jogador.position)}</div>
      {
        (handleUpdatePlayer || handleDeletePlayer) ? (
          <div style={{ flex: 'auto', paddingRight: '24px', display: 'flex', justifyContent: 'flex-end' }}>
            {handleUpdatePlayer ? <div style={{ margin: '8px', cursor: 'pointer', color: 'darkorange' }} onClick={handleUpdatePlayer}>Alterar</div> : null}
            {handleDeletePlayer ? <div style={{ margin: '8px', cursor: 'pointer', color: 'red' }} onClick={handleDeletePlayer}>Excluir</div> : null}
          </div>
        ) : null
      }
    </div>
  )
}