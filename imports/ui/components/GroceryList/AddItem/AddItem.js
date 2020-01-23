import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import styles from './AddItem.m.css';

/**
 * AddItem component provides the user with inputs to add new items
 * to the 'items' collection.
 *
 * @version 1.0.0
 * @author [Derrik Fleming](https://github.com/drkmcfrk)
 */
class AddItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newItemName: '',
			newItemQty: ''
		};
	}

	addItemHandler = () => {
		this.props.addItem(this.state.newItemName, this.state.newItemQty);

		this.setState({ newItemName: '', newItemQty: '' });
	};

	render() {
		const { newItemName, newItemQty } = this.state;
		return (
			<Aux>
				<form className={styles.addItem} onSubmit={this.addItemHandler}>
					<Input
						value={newItemName}
						onChange={event =>
							this.setState({ newItemName: event.target.value })
						}
						className={styles.itemName}
						type="text"
						placeholder="Item's name"
					/>
					<Input
						value={newItemQty}
						onChange={event =>
							this.setState({ newItemQty: event.target.value * 1.0 })
						}
						className={styles.itemQty}
						type="number"
						placeholder="Item's quantity"
					/>
					<Button
						color="primary"
						type="submit"
						variant="contained"
						className={styles.button}
						startIcon={<AddShoppingCartIcon />}
					>
						Add Item
					</Button>
				</form>
			</Aux>
		);
	}
}

export default AddItem;
