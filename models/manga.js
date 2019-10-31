module.exports = (sequelize, DataTypes) => {
    const Manga = sequelize.define('manga', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Manga;
}