import api from '../../services/api';

export async function GetPlayers() {
  const response = await api.get('Home/get-players');
  console.log(`Action Get Home/get-players response:\n`);
  console.log(response);
  return response.data;
}

export async function DeletePlayer(id) {
  const response = await api.delete(`Home/delete-player/${id}`);
  console.log(`Action Delete Home/delete-player/${id} response:\n`);
  console.log(response);
  return response;
}