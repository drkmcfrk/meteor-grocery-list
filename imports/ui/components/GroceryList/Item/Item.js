import React, { Component } from 'react';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Aux from '../../../hoc/Aux/Aux';
import ItemControls from './ItemControls/ItemControls';

import styles from './Item.m.css';

class Item extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newItemName: '',
			newItemQty: 0
		};
	}

	render() {
		let item = (
			<div className={styles.item}>
				<Typography variant="h6" className={styles.nameLabel}>
					{this.props.itemName}
				</Typography>
				<Typography variant="h6" className={styles.qtyLabel}>
					{this.props.itemQty}
				</Typography>
				<ItemControls
					incrementItem={this.props.itemQtyIncremented}
					decrementItem={this.props.itemQtyDecremented}
					decrementable={this.props.decrementable}
					deleteItem={this.props.itemDeleted}
					id={this.props.itemId}
					qty={this.props.itemQty}
				/>
			</div>
		);

		if (this.props.add) {
			item = (
				<form
					className={styles.addItem}
					onSubmit={() => {
						this.props.addItem(this.state.newItemName, this.state.newItemQty);
					}}
				>
					<Input
						value={this.state.itemName}
						onChange={event =>
							this.setState({ newItemName: event.target.value })
						}
						className={styles.itemName}
						type="text"
						placeholder="Item's name"
					/>
					<Input
						value={this.state.itemQty}
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
			);
		}

		return <Aux>{item}</Aux>;
	}
}

export default Item;
