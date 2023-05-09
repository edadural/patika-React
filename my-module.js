const hello = (name) => {
    // console.log("hello " + name);
    console.log(`hello ${name}`);

}

const topla = (a,b) => a+b;
const cikar = (a,b) => a-b;

const text = 'Text';

const user = {
    name: "Eda",
    surname: "Dural",
}
 
const users = [
    {
        name: 'Asaf',
        surname: 'dssa',
    },
    {
        name: 'Esra',
        surname: 'fsdf',
    },
];

export{ topla, cikar, text, user, users };

export default hello;