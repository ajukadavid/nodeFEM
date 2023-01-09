import { Router } from 'express'

const router = Router()

//PRODUCTS

router.get("/product", (req, res) => {
    res.json({ message: 'niceeee from vue' });
  });
router.get('/product/:id', () => {
    
})
router.put('/product/:id', () => {
    
})
router.post('/product', () => {
    
})

router.delete('/product/:id', () => {
    
})

//UPDATES

router.get('/update', () => {

})
router.get('/update/:id', () => {
    
})
router.put('/update/:id', () => {
    
})
router.post('/update', () => {
    
})

router.delete('/update/:id', () => {
    
})

//UPDATES

router.get('/updatepoint', () => {

})
router.get('/updatepoint/:id', () => {
    
})
router.put('/updatepoint/:id', () => {
    
})
router.post('/updatepoint', () => {
    
})

router.delete('/updatepoint/:id', () => {
    
})

export default router