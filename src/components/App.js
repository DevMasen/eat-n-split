import { useState } from 'react';
import '../index.css';
import AddFriendForm from './AddFriendForm';
import Button from './Button';
import FriendList from './FriendList';
import SplitBillForm from './SplitBillForm';

export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friendList, setFriendList] = useState([]);
	const [selectedFriend, setSelectedFriend] = useState(null);

	function handleShowAddFriend() {
		setShowAddFriend(curShow => !curShow);
	}
	function handleAddFriend(friend) {
		setFriendList(curList => [...curList, friend]);
		setShowAddFriend(false);
	}
	function handleSelection(friend) {
		setSelectedFriend(friend.id === selectedFriend?.id ? null : friend);
		setShowAddFriend(false);
	}
	function handleSplit(value) {
		setFriendList(curList =>
			curList.map(friend =>
				friend.id === selectedFriend.id
					? { ...friend, balance: friend.balance + value }
					: friend,
			),
		);
		setSelectedFriend(null);
	}
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList
					friendList={friendList}
					selectedFriend={selectedFriend}
					onSelection={handleSelection}
				/>
				{showAddFriend && (
					<AddFriendForm onAddFriend={handleAddFriend} />
				)}
				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? 'Close' : 'Add Friend'}
				</Button>
			</div>
			{selectedFriend && (
				// Using key prop to reset the state
				<SplitBillForm
					selectedFriend={selectedFriend}
					onSplit={handleSplit}
					key={selectedFriend.id}
				/>
			)}
		</div>
	);
}
