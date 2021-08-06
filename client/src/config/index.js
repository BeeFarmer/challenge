// Api Links
const Domain = "http://localhost:8000";

const apiLinks = {
  fetchUsers: `${Domain}/users`,
  fetchItems: `${Domain}/users/items`,
  fetchItemAgeCount: `${Domain}/users/age`
};

//Table Constants
const tableConstants = {
  userTable: {
    title: 'All Users',
    description: 'Users and their age',
    category: ['Username', 'Age']
  },
  demoTable: {
    title: 'Age Demographic of Users With ___',
    description: null,
    category: ['Age', 'Count']
  }
}

export {
  apiLinks,
  tableConstants
};
