import express from "express";
import controller from '../controllers/controller.js'

const router = express.Router()

/**
 * METHOD: GET
 * GET ALL TODO LIST ITEMS
 */
router.get('/', controller.findAllItems);

/**
 * METHOD: POST
 * ADDED NEW TODO LIST ITEM
 */
router.post('/addNewItem', controller.addNewToDoItem)

/**
 * METHOD: PUT
 * UPDATE ITEM VALUE
 */
router.put('/updateItem/:id', controller.updateItem);

/**
 * METHOD: DELETE
 * DELETE TODO LIST ITEM
 */
router.delete('/deleteItem/:id', controller.deleteToDoItem)

/**
 * METHOD: PUT
 * UPDATE ITEM IS COMPLETED OR NOT
 */
router.put('/completeToggleItem/:id', controller.completeToggleToDoItem);

export default router