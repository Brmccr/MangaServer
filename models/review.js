module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('review', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        manga_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        reviewer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        mangatitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paragraph: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false
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
    return Review;
}