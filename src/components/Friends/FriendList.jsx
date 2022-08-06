import PropTypes from 'prop-types';
import { List, ListItem } from "./FriendList.styled";

function friendOnline(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}

export const FriendList = ({ friends }) => {
    
    return (
        <List>
            {friends.map(friend => (
                <ListItem key={friend.id}>
                    <span style={{ color: friendOnline(friend.isOnline) }}>{' '}●</span>
                    <img src={friend.avatar} alt="User avatar" width="48" />
                    <p>{friend.name}</p>
                </ListItem>
            ))}
        </List>
    );
};

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};