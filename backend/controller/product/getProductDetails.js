const productModule = require("../../models/productModel")

const getProductDetails = async(req,res) => {
    try{
        const { productId } = req.body

        const product = await productModule.findById(productId)

        res.json({
            data : product,
            message : "Ok", 
            error : true,
            success : false
        })

    }catch(err){
        res.json({
            message : err?.message || err, 
            error : true,
            success : false
        })
    }
}

module.exports = getProductDetails