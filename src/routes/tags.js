const { Tag } = require("../lib/sequelize")

const router = require("express").Router()

router.get("/",  async (req, res) => {
    try{
        const findTags = await Tag.findAll({
            where: {
                ...req.query
            }
        })

        return res.status(200).json({
            message: "Tags found",
            result: findTags
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
        const { tag_name } = req.body
        
        const newTag = await Tag.create({
            tag_name
        })

        return res.status(201).json({
            message: "Tag create",
            result: newTag
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
        const { id } = req.params
        
        const updateTag = await Tag.update(
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
            message: "Tag updated",
            result: updateTag
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
        const { id } = req.params
        
        const deleteTag = await Tag.destroy(
            {
                where: {
                    id
                }
            }
        )

        return res.status(201).json({
            message: "Tag deleted",
            result: deleteTag
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            message: "server error"
        });
    }
})

module.exports = router