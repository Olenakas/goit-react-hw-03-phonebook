import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './ContactForm.module.css';

class ContactForm extends Component {
	state = {
		name: '',
		number: '',
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { name, number } = this.state;
		this.props.onAddContact(name, number);
		this.setState({ name: '', number: '' });
	};

	render() {
		const { name, number } = this.state;

		return (
			<form className={styles.form} onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={name}
						onChange={this.handleChange}
						required
					/>
				</label>
				<label>
					Number:
					<input
						type="tel"
						name="number"
						value={number}
						onChange={this.handleChange}
						required
					/>
				</label>
				<button type="submit">Add contact</button>
			</form>
		);
	}
}

ContactForm.propTypes = {
	onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;