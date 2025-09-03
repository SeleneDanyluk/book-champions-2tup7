import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

//Aqui modelizamos la entidad Book que luego sequelize traducira 
export const Book = sequelize.define("Book", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
    },
    pageCount: {
        type: DataTypes.INTEGER,
    },
    summary: {
        type: DataTypes.TEXT,

    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}, { timestamps: false });