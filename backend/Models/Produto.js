/* module.exports = (sequelize, DataTypes) =>{
    const Produto = sequelize.define(
        'Produto', {
            id_clientes: DataTypes.STRING,
            id_categorias: DataTypes.STRING,
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            ncm: DataTypes.STRING
        }, {
            tableName: "produtos",
            timestamps: false
        }
    );

    Produto.associate = (models) => {
        Produto.hasOne(models.Categoria, { as: "categorias", foreignKey: "id_categorias" });
    };

    return Produto;
}; */