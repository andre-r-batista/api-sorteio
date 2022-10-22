import api from '../../services/api';

export async function PostSorteiaTimes(players) {
  const response = await api.post('Home/sort', players).catch(e => e.response);
  console.log(`Action Post Home/sort response:\n`);
  console.log(response);
  return response;
}