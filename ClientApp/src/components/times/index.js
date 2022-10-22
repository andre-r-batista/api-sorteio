import util from "../../services/util"

export default function Times({timesGerado}) {
  return (
    <div>
      {
        timesGerado.map((time) => (
          <>
            <h3 style={{ backgroundColor: 'lightgray' }}>{util.colorTeam(time.color)}</h3>
            {
              time.players.map(player => (
                <div>{`${util.obterPosicaoJogadorAbreviada(player.position)} - ${player.name}`}</div>
              ))
            }
          </>
        ))
      }
    </div>
  );
}