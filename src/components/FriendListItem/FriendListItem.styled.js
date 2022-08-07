import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 250px;
    border: 1px solid #4E555F;
    border-radius: 4px;
    margin-bottom: 8px;
    padding: 8px;
`;

export const FriendStatus = styled.span`
  display: inline-block;
  margin-right: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? '#00b300' : '#ff0000')};
`;