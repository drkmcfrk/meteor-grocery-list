import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Aux from '../../../hoc/Aux/Aux';
import ItemControls from './ItemControls/ItemControls';

import styles from './Item.m.css';

class Item extends Component {
	render() {
		return (
			<Aux>
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
			</Aux>
		);
	}
}

export default Item;
