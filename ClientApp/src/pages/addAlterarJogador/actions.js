import api from '../../services/api';

export async function PostInsertPlayer(player) {
  const response = await api.post('Home/insert-player', player);
  console.log(`Action Post Home/insert-player response:\n`);
  console.log(response);
  return response;
}

export async function GetPlayer(id) {
  const response = await api.get(`Home/get-player/${id}`).catch(e => e.response);
  console.log(`Action Get Home/get-player/${id} response:\n`);
  console.log(response);
  return response;
}

export async function PutUpdatePlayer(id, player) {
  const response = await api.put(`Home/update-player/${id}`, player).catch(e => e.response);
  console.log(`Action Put Home/update-player/${id} response:\n`);
  console.log(response);
  return response;
}