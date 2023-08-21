const hello = () => {
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    console.log("Time: "+ time + " Date: " + date)
    // console.log("Date: "+ date)
}
// module.exports = hello;



const hello1 = (name) => {
    const a=21
    console.log("My name is "+ name + " age " + a)
}

const operations = ()=> {
    const x=10
    const y=5
    // const c=x+y;
    // console.log(c)
    console.log(x+ " + " + y + "="+ (x+y))
    console.log(x+ " - " + y + "="+ (x-y))
    console.log(x+ " * " + y + "="+ (x*y))
    console.log(x+ " / " + y + "="+ (x/y))
}
module.exports ={hello, hello1,operations};

