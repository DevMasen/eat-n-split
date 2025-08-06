import Friend from './Friend';

export default function FriendList({ friendList }) {
	return (
		<ul>
			{friendList.map(friend => (
				<Friend friend={friend} key={friend.id} />
			))}
		</ul>
	);
}
