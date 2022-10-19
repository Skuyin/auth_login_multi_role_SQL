import express from 'express';
import {
  getProducts,
  getProductsById,
  createProducts,
  updateProducts,
  deleteProducts,
} from '../controllers/Products.js';

import { verifyUser } from '../middleware/AuthUser.js';

const router = express.Router();

router.get('/Products', verifyUser, getProducts);
router.get('/Products/:id', verifyUser, getProductsById);
router.post('/Products', verifyUser, createProducts);
router.patch('/Products/:id', verifyUser, updateProducts);
router.delete('/Products/:id', verifyUser, deleteProducts);

export default router;
