import '../index.css';
import AddFriendForm from './AddFriendForm';
import Button from './Button';
import FriendList from './FriendList';
import SplitBillForm from './SplitBillForm';

export default function App() {
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList />
				<AddFriendForm />
				<Button>Add Friend</Button>
			</div>
			<SplitBillForm />
		</div>
	);
}
