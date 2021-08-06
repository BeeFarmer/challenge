'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getItems = () => {
    const dataAccessMethod = () => _.uniq(
      Object.values(db.itemsOfUserByUsername).reduce((acc, cur) => acc.concat(cur), [])
    );
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        const userNameToAge = {};
        Object.values(db.usersById).forEach(obj => userNameToAge[obj.username] = obj.age);

        const ageToCountMap = {};
        Object.entries(db.itemsOfUserByUsername).forEach(arr => {
          if (arr[1].includes(item)) {
            const age = userNameToAge[arr[0]];
            if (ageToCountMap.hasOwnProperty(age)) {
              ++ageToCountMap[age];
            } else {
              ageToCountMap[age] = 1;
            }
          }
        });
        return Object.entries(ageToCountMap).map(arr => ({ age: arr[0], count: arr[1] }));
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getItems,
    getListOfAgesOfUsersWith
};
