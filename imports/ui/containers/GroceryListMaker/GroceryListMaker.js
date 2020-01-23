import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import GroceryList from '../../components/GroceryList/GroceryList';

class GroceryListMaker extends Component {
	render() {
		return (
			<Aux>
				<GroceryList />
			</Aux>
		);
	}
}

export default GroceryListMaker;
