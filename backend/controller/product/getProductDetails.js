const productModule = require("../../models/productModel")

const getProductDetails = async(req,res) => {
    try{
        const { productId } = req.body

        const product = await productModule.findById(productId)

        if(!product){
            return res.status(404).json({
                message : "Product not found", 
                error : true,
                success : false
            })
        }

        res.status(200).json({
            data : product,
            message : "Ok", 
            error : false,
            success : true
        })

    }catch(err){
        res.status(400).json({
            message : err?.message || err, 
            error : true,
            success : false
        })
    }
}

module.exports = getProductDetails