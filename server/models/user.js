module.exports = function(sequelize, DataTypes){
    require("dotenv").config();
    let user = sequelize.define("user", {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        nickname: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            field: "password",
            type: DataTypes.STRING(255),
            allowNull: false
        },
    }, {
        timestamps: true,
        // created, updated를 자동적으로 생성 false가 default임
        underscored: true,
        // default인 false는 camelCase이지만, true면 snake_case로 됨
        freezeTableName: true,
        tableName: "user"
    });
    user.associate = function (models) {
        user.hasMany(models.post, {as: "post", targetKey:"id", foreignKey: "user_id"});
        user.hasMany(models.team, {as: "team", targetKey:"id", foreignKey: "user_id"});
        user.hasMany(models.applicant, {as: "applicant", targetKey:"id", foreignKey: "user_id"});
        user.hasMany(models.bookmark, {as: "bookmark", targetKey:"id", foreignKey: "user_id"});
        
    }

    return user;
}