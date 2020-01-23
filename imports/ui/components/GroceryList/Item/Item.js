import React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Aux from '../../../hoc/Aux/Aux';
import ItemControls from './ItemControls/ItemControls';

import styles from './Item.m.css';

/**
 * ListItem provides the mechanism for displaying
 * the data fields of existing Item in the 'items' collection.
 * It also serves as a container for the ItemControls ('./ItemControls.js')
 * for Updating, and Deleting the item.
 *
 * @version 1.0.0
 * @author [Derrik Fleming](https://github.com/drkmcfrk)
 */

const item = props => {
	return (
		<Aux>
			<div className={styles.item}>
				<Typography variant="h6" className={styles.nameLabel}>
					{props.itemName}
				</Typography>
				<Typography variant="h6" className={styles.qtyLabel}>
					{props.itemQty}
				</Typography>
				<ItemControls
					incrementItem={props.itemQtyIncremented}
					decrementItem={props.itemQtyDecremented}
					decrementable={props.decrementable}
					deleteItem={props.itemDeleted}
					id={props.itemId}
					qty={props.itemQty}
				/>
			</div>
		</Aux>
	);
};

export default item;
