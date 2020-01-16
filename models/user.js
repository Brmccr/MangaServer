  
module.exports = function(sequelize, DataTypes) {

    return sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updated_at:  DataTypes.DATE,
          deleted_at: DataTypes.DATE
        }, {
          underscored: true
    });
};