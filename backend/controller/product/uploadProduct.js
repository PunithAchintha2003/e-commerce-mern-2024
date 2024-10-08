const uploadProductPermission = require("../../helpers/permission")
const productModule = require("../../models/productModel")


async function UploadProductController(req,res){
    try{
        const sessionUserId = req.userId

        if(!uploadProductPermission(sessionUserId)){
            throw new Error("Permission Denied")
        }

        const UploadProduct = new productModule(req.body)
        const saveProduct = await UploadProduct.save()

        res.status(201).json({
            message : "Product upload successfully",
            error : false,
            success : true,
            data : saveProduct
        })

    }catch(err){
        res.status(400).json({
            message : err.message || err, 
            error : true,
            success : false
        })
    }
}

module.exports = UploadProductController