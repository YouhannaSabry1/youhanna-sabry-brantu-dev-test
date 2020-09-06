import { Router } from 'express';

const router = Router();

router.get('/', async(req, res) => {
    const products = await req.context.models.Product.find();
    return res.send(products);
});

router.get('/:productId', async(req, res) => {
    const product = await req.context.models.Product.findById(
        req.params.productId,
    );
    return res.send(product);
});

router.get('/name/:productName', async(req, res) => {
    const product = await req.context.models.Product.find({ name: { $regex: req.params.productName, $options: 'i' } });
    return res.send(product);
});

router.post('/', async(req, res) => {
    const product = await req.context.models.Product.create({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        category: {
            id: req.body.category.id,
            name: req.body.category.name,
        },
        brand: req.body.brand,
    });

    return res.send(product);
});

router.delete('/:productId', async(req, res) => {
    const product = await req.context.models.Product.findById(
        req.params.productId,
    );

    let result = null;
    if (product) {
        result = await product.remove();
    }

    return res.send(result);
});

export default router;