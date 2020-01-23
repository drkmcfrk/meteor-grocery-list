import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

import styles from './ItemControls.m.css';

class ItemControls extends Component {
	render() {
		return (
			<div className={styles.controls}>
				<IconButton
					disabled={!this.props.decrementable}
					onClick={() =>
						this.props.decrementItem(this.props.id, this.props.qty)
					}
				>
					<RemoveIcon color="primary" />
				</IconButton>
				<IconButton
					onClick={() =>
						this.props.incrementItem(this.props.id, this.props.qty)
					}
				>
					<AddIcon color="primary" />
				</IconButton>
				<IconButton onClick={() => this.props.deleteItem(this.props.id)}>
					<DeleteIcon color="primary" />
				</IconButton>
			</div>
		);
	}
}

export default ItemControls;
