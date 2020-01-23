import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { withTracker } from 'meteor/react-meteor-data';
import { Items } from '../../../api/items.js';

import AddItem from './AddItem/AddItem';
import Item from './Item/Item';
import Aux from '../../hoc/Aux/Aux';

import styles from './GroceryList.m.css';

/**
 * GroceryList is the container for the rest of the application, where all of the action
 * happens with Meteor server. Create, Read, Update, and Delete functions are
 * implemented in this component.
 * @version 1.0.0
 * @author [Derrik Fleming](https://github.com/drkmcfrk)
 */

class GroceryList extends Component {
	constructor(props) {
		super(props);
	}

	/**
	 * Function provides an 'Update' feature for an item in the
	 * 'items' collection. By incrementing the 'itemQty' property of an item
	 * Reference is passes as a prop through the Item component
	 * ('./Item/Item.js') and then on to the ItemControls  component
	 * ('./Item/ItemConrols/ItemControls.js')
	 *
	 * @param {string} _id - the item's id
	 * @param {integer} _qty - the item's quantity, prior to incrementing
	 */
	incrementItemHandler = (_id, qty) => {
		Items.update(_id, {
			$set: { itemQty: qty + 1 }
		});
	};

	/**
	 * Function provides an 'Update' feature for an item in the
	 * 'items' collection. By incrementing the 'itemQty' property of an item
	 * Reference is passes as a prop through the ListItem component
	 * ('./Item/Item.js') and then on to the ItemControls  component
	 * ('./Item/ItemConrols/ItemControls.js')
	 *
	 * @param {string} _id - the item's id
	 * @param {integer} _qty - the item's quantity, prior to decrementing
	 */
	decrementItemHandler = (_id, qty) => {
		if (qty > 1) {
			Items.update(_id, {
				$set: { itemQty: qty - 1 }
			});
		} else {
			Items.remove(_id);
		}
	};

	/**
	 * Function provides 'Delete' feature for the 'items' collection
	 * Reference is passes as a prop through the ListItem component
	 * ('./Item/Item.js') and then on to the ItemControls  component
	 * ('./Item/ItemConrols/ItemControls.js')
	 *
	 * @param {string} _id - the to-be-deleted item's id
	 */
	deleteItemHandler = _id => {
		Items.remove(_id);
	};

	/**
	 * Function provides 'Create' feature for the 'items' collection
	 * Reference is passed as a prop to the AddItem component
	 * ('./AddItem/AddItem.js') which contains the TextInputs
	 * for both of the params.
	 *
	 * @param {string} itemName - the to-be-added item's name
	 * @param {integer} itemQty - the to-be-added item's quantity
	 */
	addItemHandler = (itemName, itemQty) => {
		event.preventDefault();

		Items.insert({
			itemName,
			itemQty,
			createdAt: new Date()
		});
	};

	/**
	 * Builds out the list of Items in the 'items' collection
	 */
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
		// provides Read functionality
		items: Items.find({}).fetch()
	};
})(GroceryList);
