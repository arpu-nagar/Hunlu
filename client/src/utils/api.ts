import axios, { AxiosRequestConfig } from 'axios';

export const reqData = async (
	url: string,
	payload: AxiosRequestConfig,
	method: string
) => {
	const baseURL = 'http://localhost:2525/api';
	if (method === 'GET') {
		const data = await axios.get(baseURL + url);
		return data;
	} else {
		const data = await axios.post(baseURL + url, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
			withCredentials: true,
		});
		return data;
	}
};

export const reqRedirect = (url: string) => {
	const baseURL = 'http://localhost:2525/api';
	window.open(baseURL + url, '_self');
};
