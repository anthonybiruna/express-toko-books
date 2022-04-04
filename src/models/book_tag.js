const { DataTypes } = require("sequelize");

const BookTag = (sequelize) => {
  return sequelize.define(
    "Booktag",
    {
      BookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Books",
            key: "id"
        }
      },
      TagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Tags",
            key: "id"
        },
      }
    }
  )
}

module.exports = BookTag;