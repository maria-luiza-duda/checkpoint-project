const { Model, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
    
    const Cliente = sequelize.define(
        'Cliente', {
            id_cliente: DataTypes.STRING,
            nome: DataTypes.STRING,
            razao_social: DataTypes.STRING,
            cpf_cnpj: DataTypes.STRING,
            rua: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            cep: DataTypes.STRING,
            uf: DataTypes.STRING,
            telefone: DataTypes.STRING,
            whatsapp: DataTypes.STRING,
            email: DataTypes.STRING,
            site: DataTypes.STRING
        }, {
            tableName: "cliente",
            timestamps: false
        }
    );

    Cliente.associate = (models) => {
        Cliente.hasMany(models.Produto, { as: "produtos", foreignKey: "id_produtos" });
    };

    return Cliente;

};