'use strict';

const Movie=(sequelize,DataTypes)=>sequelize.define('movie',{

    movie_name:{
        type: DataTypes.STRING,


    },
    employee_type:{
        type: DataTypes.STRING

    }

});


module.exports=Movie;
