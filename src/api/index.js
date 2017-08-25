import axios from 'axios';

export function getsliders(){
	return axios.get('/api/mm');
}
