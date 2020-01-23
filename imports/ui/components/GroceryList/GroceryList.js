import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-meteor-data';
import { Items } from '../../../api/items.js';

import AddItem from './AddItem/AddItem';
import Item from './Item/Item';
import Aux from '../../hoc/Aux/Aux';

import styles from './GroceryList.m.css';

class GroceryList extends Component {
	constructor(props) {
		super(props);
	}

	incrementItemHandler = (_id, qty) => {
		Items.update(_id, {
			$set: { itemQty: qty + 1 }
		});
	};

	decrementItemHandler = (_id, qty) => {
		if (qty > 1) {
			Items.update(_id, {
				$set: { itemQty: qty - 1 }
			});
		} else {
			Items.remove(_id);
		}
	};

	deleteItemHandler = _id => {
		Items.remove(_id);
	};

	addItemHandler = (itemName, itemQty) => {
		event.preventDefault();

		Items.insert({
			itemName,
			itemQty,
			createdAt: new Date()
		});
	};

	renderItemList() {
		let itemList = null;
		if (this.props.items.length !== 0) {
			itemList = this.props.items.map(item => {
				let decrementable = true;
				if (item.itemQty === 0) {
					decrementable = false;
				}
				return (
					<Item
						key={item._id}
						itemId={item._id}
						decrementable={decrementable}
						itemName={item.itemName}
						itemQty={item.itemQty}
						itemQtyIncremented={this.incrementItemHandler}
						itemQtyDecremented={this.decrementItemHandler}
						itemDeleted={this.deleteItemHandler}
					/>
				);
			});
		}
		return itemList;
	}

	render() {
		const itemList = this.renderItemList();

		return (
			<div className={styles.groceryList}>
				<AddItem addItem={this.addItemHandler} />
				{itemList}
			</div>
		);
	}
}

export default withTracker(() => {
	return {
		items: Items.find({}).fetch()
	};
})(GroceryList);
