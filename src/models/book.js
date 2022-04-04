const { DataTypes } = require("sequelize");

const Book = (sequelize) => {
  return sequelize.define(
    "Book",
    {
      book_name: {
        type: DataTypes.STRING,
      },
      cover: {
        type: DataTypes.STRING
      },
      tags_id: {
        type: DataTypes.INTEGER
      },
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    }
  )
}

module.exports = Book;