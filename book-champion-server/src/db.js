import { Sequelize } from "sequelize";

// En este archivo estamos instanciando nuestra base de datos
export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./bookChampionsDB.db"
});