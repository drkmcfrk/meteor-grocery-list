import React from 'react';
import { IconButton } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './ItemControls.m.css';

/**
 * ItemContorols  provides the user with inputs (Buttons) to Update
 *  and/or Delete an existing item in the 'items' collection.
 *
 * @version 1.0.0
 * @author [Derrik Fleming](https://github.com/drkmcfrk)
 */

const itemControls = props => {
	return (
		<div className={styles.controls}>
			<IconButton
				disabled={!props.decrementable}
				onClick={() => props.decrementItem(props.id, props.qty)}
			>
				<RemoveIcon color="primary" />
			</IconButton>
			<IconButton onClick={() => props.incrementItem(props.id, props.qty)}>
				<AddIcon color="primary" />
			</IconButton>
			<IconButton onClick={() => props.deleteItem(props.id)}>
				<DeleteIcon color="primary" />
			</IconButton>
		</div>
	);
};

export default itemControls;
