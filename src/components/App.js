import { useState } from 'react';
import '../index.css';
import AddFriendForm from './AddFriendForm';
import Button from './Button';
import FriendList from './FriendList';
import SplitBillForm from './SplitBillForm';

const initialFriends = [
	{
		id: 118836,
		name: 'Clark',
		image: 'https://i.pravatar.cc/48?u=118836',
		balance: -7,
	},
	{
		id: 933372,
		name: 'Sarah',
		image: 'https://i.pravatar.cc/48?u=933372',
		balance: 20,
	},
	{
		id: 499476,
		name: 'Anthony',
		image: 'https://i.pravatar.cc/48?u=499476',
		balance: 0,
	},
];

export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friendList, setFriendList] = useState(initialFriends);

	function handleShowAddFriend() {
		setShowAddFriend(curShow => !curShow);
	}
	function handleAddFriend(friend) {
		setFriendList(curList => [...curList, friend]);
		setShowAddFriend(false);
	}
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList friendList={friendList} />
				{showAddFriend && (
					<AddFriendForm onAddFriend={handleAddFriend} />
				)}
				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? 'Close' : 'Add Friend'}
				</Button>
			</div>
			<SplitBillForm />
		</div>
	);
}
