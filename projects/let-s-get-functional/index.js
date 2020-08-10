// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-chriscoal');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./chriscoal.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return _.filter(array, (e, i, a) => {
        return a[i]['gender'] === 'male';
    }).length;
};

var femaleCount = (array) => {
    return _.filter(array, (e,i,a) => {
        return a[i]['gender'] === 'female';
    }).length;
};

var oldestCustomer = (array) => {
    let oldestAge = array[0]['age'];
    let result;
    _.each(array, (e,i,a) => {
        if (a[i]['age'] > oldestAge){
            oldestAge = a[i]['age'];
            result = a[i]['name'];
        }
    });
    return result;
};

var youngestCustomer = (array) => {
    let youngestAge = array[0]['age'];
    let result;
    _.each(array, (e,i,a) => {
        if (a[i]['age'] < youngestAge){
            youngestAge = a[i]['age'];
            result = a[i]['name'];
        }
    });
    return result;
};

var averageBalance = (array) => {
    let averageBalanceArray = _.pluck(array, 'balance');
    _.each(averageBalanceArray, (e,i,a) => {
        a[i] = parseFloat(e.replace("$", "").replace(",", ""));
    });
    let totalBalance = _.reduce(averageBalanceArray, (result, e) => {
        return result + e;
    });
    return totalBalance / array.length;
    
    
};

var firstLetterCount = (array, letter) => {
    let customerWithFirst = [];
    _.each(array, (e,i,a) => {
        if(a[i]['name'][0].toLowerCase() === letter.toLowerCase()){
            customerWithFirst.push(a[i]['name']);
        }
    });
    return customerWithFirst.length;
};

var friendFirstLetterCount = (array, customer, letter) => {
    let customerIndex;
    _.each(array, (e,i,a) => {
        if(a[i]['name'] === customer){
            customerIndex = i;
        }
    });
    return firstLetterCount(array[customerIndex]['friends'], letter);
};

var friendsCount = (array, name) => {
    let theirFriend = [];
    _.each(array, (e,i,a) => {
        _.each(a[i]['friends'], (element, index, arr) => {
            if (arr[index]['name'] === name){
            theirFriend.push(a[i]['name']);
            }
        });
        
    });
    console.log(theirFriend);
    return theirFriend;
};

var topThreeTags = (array) => {var topThreeTags = (array) => {
    let tags = {};
    _.each(array, (e,i,a) => {
        _.each(array[i]['tags'], (element) => {
            tags[element] =+ array[i]['name']
        })
    })
    console.log(tags);
};

var genderCount = (array) => {
    return {
        male: maleCount(array),
        female: femaleCount(array),
        'non-binary': _.filter(array, (e,i,a) => {
            return a[i]['gender'] === 'non-binary';
        }).length
    };
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
