import { useState } from 'react';
import Button from './Button';
export default function SplitBillForm({ selectedFriend, onSplit }) {
	const [bill, setBill] = useState('');
	const [userPay, setUserPay] = useState('');
	const friendPay = bill ? bill - userPay : '';
	const [whoIsPaying, setWhoIsPaying] = useState('user');

	function handleSubmit(e) {
		e.preventDefault();

		if (!bill) return;

		onSplit(whoIsPaying === 'user' ? friendPay : -userPay);
	}
	return (
		<form className="form-split-bill" onSubmit={handleSubmit}>
			<h2>split a bill with {selectedFriend.name}</h2>

			<label>💰 Bill Value</label>
			<input
				type="text"
				value={bill}
				onChange={e =>
					!isNaN(e.target.value) && setBill(Number(e.target.value))
				}
			/>

			<label>🧍Your Expense</label>
			<input
				type="text"
				value={userPay}
				onChange={e =>
					!isNaN(e.target.value) &&
					setUserPay(
						Number(e.target.value) > bill
							? userPay
							: Number(e.target.value)
					)
				}
			/>

			<label>🧑‍🤝‍🧑 {selectedFriend.name}'s Expense</label>
			<input type="text" disabled value={friendPay} />

			<label>🤑 Who is paying the bill? </label>
			<select
				value={whoIsPaying}
				onChange={e => setWhoIsPaying(e.target.value)}
			>
				<option value="user">You</option>
				<option value="friend">{selectedFriend.name}</option>
			</select>

			<Button>Split bill</Button>
		</form>
	);
}
