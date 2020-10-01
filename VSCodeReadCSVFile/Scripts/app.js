const csv = require('csv') //installed the CSV node module using command from the cmd
const obj = csv() //accessing csv function object

function Employee(ename,etitle,esal) {
 
    this.EmpName = ename;
    this.EmpTitle = etitle;
    this.EmpSalary = esal;
}

let emp = [] //contains data from csv file

obj.from.path('../datafile/data.csv').to.array(function (data) {
    for (let index = 0; index < data.length; index++) {
        Employees.push(new Employee(data[index][0], data[index][1], data[index][2]));
    }
    console.log(Employees);
})

let http = require('http')

let server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(Employees));
})

server.listen(1234);


//open cmd and typed node app.
//in browser in localhost:1234 you wil get the content in data.csv
