'use strict';

// shape the data using constructe;

/* we will use the define method from sequilze to create a new table (new database);
the first params is the name of our db the second is our sechema 
*/

const Employee=(sequelize,DataTypes)=>sequelize.define('employee',{

    employee_name:{
        type: DataTypes.STRING,


    },
    employee_job:{
        type: DataTypes.STRING

    }

});

// now export it to send to index where its the root for models so we can pass to them sequelize and datatype instead of require them here again;

module.exports=Employee;




