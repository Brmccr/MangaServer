module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('review', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        mangaId: {
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
        mangaTitle: {
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
        }
        // Will need to be associated with MangaID on certain view 
    })
    return Review;
}