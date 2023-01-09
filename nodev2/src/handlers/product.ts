import prisma from "../db"


//Get all products
export const getProducts = async (req, res) => {
    const user = await prisma.user.findUnique({ 
        where: {
            id: req.user.id
        },
        include: {
            product: true
        }
    })

    res.json({ data: user})
}

//Get one product

export const getOneProduct = async (req, res) => {
    const id = req.params.id
    const product = await prisma.product.findFirst({
        where: {
            id,
            belongsToId: req.user.id
        }
    })

    res.json({data: product})

}

//Create product

export const createProduct = async (req, res) => {
    const product = await prisma.product.create({
        data: {
            name: req.body.name,
            belongsToId: req.user.id
        }
    })

    res.json({data: product})
}