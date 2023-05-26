const users = [];

const addUser = ({id, name, room}) => {
	// room name is single word in lowercase
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();
	
	// check same username exist in the same room or not
	const existingUser = users.find((user) => user.room === room && user.name === name );
	// if it does, return { error : username is taken}
	if (existingUser) {
		return { error : 'Username is taken'}
	}

	// else, create new user
	const user = {id, name, room};
	users.push(user);
	console.log(users);
	return {user}
}

const removeUser = (id) => {
	// find user index
	const index = users.findIndex((user) => user.id === id);

	// if exist, return it
	if (index !== -1){
		return users.splice(index, 1)[0];
	}
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {addUser, removeUser, getUser, getUsersInRoom};