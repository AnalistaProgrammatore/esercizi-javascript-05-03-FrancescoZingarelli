let user = {};

user.name = "Mario";

Object.defineProperty(user, 'surname', {
    value: "Rossi",
    writable: false,
    configurable: false
});

user.name = "Marco";

delete user.name;

console.log(Object.getOwnPropertyDescriptors(user))
