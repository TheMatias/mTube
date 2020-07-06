import React from 'react';

import './App.css';
import {Provider} from 'react-redux'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'
import store from './store';

function App() {
  return (
	  <Provider store={store}>
			<div className="container">
				<SearchBar />
				<VideoList />
				<VideoPlayer /> 
			</div>
		</Provider>
  );
}

export default App;
