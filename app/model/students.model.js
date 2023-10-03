module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("students", {
        studentsName: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        university: {
            type: Sequelize.STRING
        },
        finishStudying: {
            type: Sequelize.BOOLEAN
        },
    });

    return Students;
};