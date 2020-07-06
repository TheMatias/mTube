import youtubeSearch from 'youtube-api-v3-search'
import youtube from '../../credentials/youtube.json'

const apiKey = youtube.apiKey

export const buscaVideoInicio = (termo) => {
	return  {
		type: 'BUSCA_VIDEO_INICIO',
		carregando: true,
		erro: false
	}
}

export const buscaVideoSucesso = (videos) => {
	return  {
		type: 'BUSCA_VIDEO_SUCESSO',
		videos,
		carregando: false,
		erro: false
	}
}

export const buscaVideoErro = () => {
	return  {
		type: 'BUSCA_VIDEO_ERRO',
		carregando: false,
		erro: true
	}
}

export const buscaVideo = (termo) => {
	return dispatch => {
		dispatch(buscaVideoInicio())
		youtubeSearch(apiKey, {q: termo})
			.then((data) => dispatch(buscaVideoSucesso(data.items)))
			.catch(() => dispatch(buscaVideoErro()))
	}
}