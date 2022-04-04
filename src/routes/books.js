const { Book } = require("../lib/sequelize")

const router = require("express").Router()

router.get("/",  async (req, res) => {
    try{
        const findBooks = await Book.findAll({
            where: {
                ...req.query
            }
        })

        return res.status(200).json({
            message: "Books found",
            result: findBooks
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "server error"
        });
    }
})
router.post("/", async (req, res) => {
    try{
        const { book_name, cover, tags_id, stock} = req.body
        
        const newBook = await Book.create({
            book_name,
            cover,
            tags_id,
            stock
        })

        return res.status(201).json({
            message: "Book create",
            result: newBook
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "server error"
        });
    }
})
router.patch("/:id", async (req, res) => {
    try{
        const { id} = req.params
        
        const updateBook = await Book.update(
            {
                ...req.body
            },
            {
                where: {
                    id
                }
            }
        )

        return res.status(201).json({
            message: "Book updated",
            result: updateBook
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "server error"
        });
    }
})
router.delete("/:id", async (req, res) => {
    try{
        const { id} = req.params
        
        const deleteBook = await Book.destroy(
            {
                where: {
                    id
                }
            }
        )

        return res.status(201).json({
            message: "Book deleted",
            result: deleteBook
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "server error"
        });
    }
})

module.exports = router