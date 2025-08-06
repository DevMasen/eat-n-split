import { useState } from 'react';
import '../index.css';
import AddFriendForm from './AddFriendForm';
import Button from './Button';
import FriendList from './FriendList';
import SplitBillForm from './SplitBillForm';

export default function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);

	function handleShowAddFriend() {
		setShowAddFriend(curShow => !curShow);
	}
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList />
				{showAddFriend && <AddFriendForm />}
				<Button onClick={handleShowAddFriend}>
					{showAddFriend ? 'close' : 'Add Friend'}
				</Button>
			</div>
			<SplitBillForm />
		</div>
	);
}
