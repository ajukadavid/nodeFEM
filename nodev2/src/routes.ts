import { Router } from 'express'
import { body, oneOf, validationResult } from "express-validator";
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product';
import { getUpdates } from './handlers/updates';
import { handleInputErrors } from './modules/middleware';
 
const router = Router()

//PRODUCTS

router.get("/product", getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors,  (req, res) => {
  
})
router.post('/product', body('name').isString(), handleInputErrors, createProduct)

router.delete('/product/:id', deleteProduct)

//UPDATES

router.get('/update',
body('title').exists().isString(),
body('body').exists().isString(),
body('productId').exists().isString()
,
)
router.get('/update/:id', () => {
    
})
router.put('/update/:id',
 body('title').optional(),
 body('body').optional(),
 body('status').isIn(['IN_PROGRESS', 'SHIPPED','DEPRECATED']),
 body('version').optional(), () => {
    
})


router.post('/update',
body('title').exists().isString(),
body('body').exists().isString(), () => {
   
})

router.delete('/update/:id', () => {
    
})

//UPDATES

router.get('/updatepoint', () => {

})
router.get('/updatepoint/:id', () => {
    
})
router.put('/updatepoint/:id',
 body('name').optional().isString(),
 body('description').optional().isString(),
() => {
    
})
router.post('/updatepoint',
body('name').isString(),
body('description').isString(),
body('updateId').exists().isString(),
() => {
    
})

router.delete('/updatepoint/:id', () => {
    
})

export default router