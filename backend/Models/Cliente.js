module.exports = (sequelize, DataTypes) =>{
    
    const Cliente = sequelize.define(
        'Cliente', {
            id_clientes: DataTypes.STRING,
            nome_fantasia: DataTypes.STRING,
            razao_social: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            empresa_matriz: DataTypes.STRING,
            logradouro: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            uf: DataTypes.STRING,
            cep: DataTypes.STRING,
            telefone: DataTypes.STRING,
            whatsapp: DataTypes.STRING,
            email: DataTypes.STRING,
            site: DataTypes.STRING
        }, {
            tableName: "clientes",
            timestamps: false
        }
    );

    Cliente.associate = (models) => {
        Cliente.hasMany(models.Produto, { as: "produtos", foreignKey: "id_produtos" });
    };

    return Cliente;

};