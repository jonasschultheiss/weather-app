const getUser = (id, callback) => {
    const user = {
      id: 42,
      name: 'quest1onmark'
    };
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(42, (userObj) => {
    console.log(userObj);
});