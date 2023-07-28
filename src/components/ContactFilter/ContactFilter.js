import React from 'react';
import PropTypes from "prop-types";
import styles from './ContactFilter.module.css';

const Filter = ({ value, onChangeFilter }) => {
	return (
		<label className={styles.label}>
			Find contacts by name:
			<input className={styles.input} type="text" value={value} onChange={(event) => onChangeFilter(event.target.value)} />
		</label>
	);
};

Filter.propTypes = {
	value: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;