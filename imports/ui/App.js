import React from 'react';

import Layout from './hoc/Layout/Layout';
import GroceryListMaker from './containers/GroceryListMaker/GroceryListMaker';

const App = () => (
	<div>
		<Layout>
			<GroceryListMaker />
		</Layout>
	</div>
);

export default App;
