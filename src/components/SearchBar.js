import React, { Component } from 'react'
import { Segment, Input, Icon } from 'semantic-ui-react'

import {connect} from 'react-redux'
import { buscaVideo } from '../store/actions/busca-video'

class SearchBar extends Component {
	constructor(props){
		super(props)

		this.props.buscaVideo('mob psycho 100')
	}

	pesquisaTermo = e => {
    const termo = e.target.value
    
		if(e.keyCode == 13)
			this.props.buscaVideo(termo)
	}

	render() {
		return (
			<div className='search-bar'>
				<Segment attached>
					<Icon name='youtube square' size='huge' />
					<Input icon='search' onKeyDown={(e) => this.pesquisaTermo(e)} size='big' placeholder='Search . . .' />
				</Segment>
			</div>
		)
	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		buscaVideo: (termo) => dispatch(buscaVideo(termo))
	}
}

export default connect(null, mapDispatchToProps)(SearchBar)