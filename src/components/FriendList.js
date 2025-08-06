import Friend from './Friend';

export default function FriendList({
	friendList,
	selectedFriend,
	onSelection,
}) {
	return (
		<ul>
			{friendList.map(friend => (
				<Friend
					friend={friend}
					key={friend.id}
					selectedFriend={selectedFriend}
					onSelection={onSelection}
				/>
			))}
		</ul>
	);
}
