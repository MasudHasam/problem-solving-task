//problem number 1
const numArray = [1, 3, 2, 4, 5];
let total = 0;
const numArrayLength = numArray.length;
numArray.map(numArrayValue => {
    total = total + numArrayValue;
});
const splitter = total / numArrayLength;
console.log(splitter);

//problem number 2
const mailArray = [
    'ghi@hotmail.com',
    'def@yahoo.com',
    'ghi@gmail.com',
    'abc@channelier.com',
    'abc@hotmail.com',
    'def@hotmail.com',
    'abc@gmail.com',
    'abc@yahoo.com',
    'def@channelier.com',
    'jkl@hotmail.com',
    'ghi@yahoo.com',
    'def@gmail.com'];

const userName = [];
mailArray.map(value => {
    const user = value.split('@');
    userName.push(user);
});
userName.sort((a, b) => a[0].localeCompare(b[0]))

const allUser = [];
userName.map(user => {
    const email = user.join('@');
    allUser.push(email);
});

const sendMail = () => {
    allUser.map(email => {
        console.log(`Email send to ${email}`);
    })
}
sendMail();


//problem number 3
const array = [1, 4, 3, 2];
const largeNumber = []
const smallerNumber = [];
const largestNumber = Math.max(...array);
array.map(element => {
    if (element >= largestNumber) {
        largeNumber.push(element)
    };
});
const smallestNumber = Math.min(...array);
array.map(element => {
    if (element <= smallestNumber) {
        smallerNumber.push(element)
    };
});

const combined = [...largeNumber, ...smallerNumber];
const divider = combined.length;
let totalCombined = 0;
combined.map(element => totalCombined = element + totalCombined);
const avarage = totalCombined / divider;
console.log(avarage);



