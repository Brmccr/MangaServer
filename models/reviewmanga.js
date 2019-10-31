module.exports = (sequelize, DataTypes) => {
    const ReviewManga = sequelize.define('reviewmanga', {
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        paragraph: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        manga_id: {
          type: DataTypes.UUID,
          allowNull: false
        }
        // Will need to be associated with MangaID on certain view 
    })
    return ReviewManga;
}