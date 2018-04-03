class Users{
  constructor (){
    this.userArray = [];
  }

  function addUser(id, name, room){
    var newUser = {id, name, room};
    this.userArray.push(newUser);
  }

  function getUser(id){
    return this.userArray.filter((user) => user.id === id);
  }

  function getUserList(room){
    var userList = this.userArray.filter((user) => user.room === room);
    var nameArray = userList.filter((user) => userList.name);

    return nameArray;
  }

  function removeUser(id){
    var removedUser = this.userArray.filter((user) => user.id === id);

    if (removedUser) {
      this.userArray = this.userArray.filter((user) => user.id !== id);
    }

    return removedUser;
  }


}
