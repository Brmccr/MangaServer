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
    return Manga;
}