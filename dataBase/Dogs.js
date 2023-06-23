const { Sequelize, DataTypes} = require("sequelize");
const {DB_DATABASE, DB_USERNAME, DB_PASSWORD, HOST, DIALECT} = require('../configs/variables');

const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: HOST,
        dialect: DIALECT
    }
);

sequelize.authenticate().then(() => {
    console.log('Successful database connection.');

}).catch((error) => {
    console.error('Error connecting to the database: ', error);
});

const Dog = sequelize.define("dog", {
    name: {
        type: DataTypes.STRING,
        trim: true,
        unique: {
            args: true,
            msg: "This name is already registered"
        },
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        trim: true,
        required: true,
        allowNull: false
    },
    tail_length: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: 1,
                msg: "Your value should be from 1 to 35"
            },
            max: {
                args: 35,
                msg: "Your value should be from 1 to 35"
            }
        }
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: 1,
                msg: "Your value should be from 1 to 35"
            },
            max: {
                args: 35,
                msg: "Your value should be from 1 to 35"
            }
        }
    }
});
//Створення таблиці "Dog" в базі даних
// Dog.sync()
//     .then(() => {
//         console.log('Dog table created successfully.');
//     })
//     .catch((error) => {
//         console.error('Error creating Dog table: ', error);
//     });

module.exports = Dog;