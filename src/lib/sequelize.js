const { Sequelize } = require("sequelize");
const mysqlConfig = require("../configs/database");

const sequelize = new Sequelize({
  username: mysqlConfig.MYSQL_USERNAME,
  password: mysqlConfig.MYSQL_PASSWORD,
  database: mysqlConfig.MYSQL_DB_NAME,
  port: 3306,
  dialect: "mysql",
 
})

const Book = require("../models/book")(sequelize);
const Tag = require("../models/tag")(sequelize);
const BookTag = require("../models/book_tag")(sequelize)

Book.belongsToMany(Tag, { through: BookTag, foreignKey: "book_id" })
Tag.belongsToMany(Book, { through: BookTag, foreignKey: "tag_id" })


module.exports = {
  sequelize,
  Book,
  Tag
}