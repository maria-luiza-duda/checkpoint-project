/* module.exports = (sequelize, DataTypes) =>{
    const Categoria = sequelize.define(
        'Categoria', {
            id_produtos: DataTypes.STRING,
            nome: DataTypes.STRING
        }, {
            tableName: "categorias",
            timestamps: false
        }
    );

    Categoria.associate = (models) => {
        Categoria.belongsTo(models.Produto, { as: "produtos", foreignKey: "id_produtos" });
    };

    return Categoria;
}; */