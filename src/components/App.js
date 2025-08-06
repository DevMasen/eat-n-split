import '../index.css';
import AddFriendForm from './AddFriendForm';
import FriendList from './FriendList';
import SplitBillForm from './SplitBillForm';

export default function App() {
	return (
		<div className="app">
			<div className="sidebar">
				<FriendList />
				<AddFriendForm />
			</div>
			<SplitBillForm />
		</div>
	);
}
