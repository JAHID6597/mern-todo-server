import items from './../models/items.js';

// GET ALL TODO LIST ITEMS
const findAllItems = async (req, res) => {
  const allItems = await items.find().sort({ 'createdAt': -1 });

  res.json(allItems);
};

// ADDED NEW TODO LIST ITEM
const addNewToDoItem = async (req, res) => {
  const newItem = new items({ text: req.body.text });
  await newItem.save();

  res.json(newItem);
};

//  UPDATE ITEM VALUE
const updateItem = async (req, res) => {
  const itemId = req.params.id;
  const text = req.body.text;

  const item = await items.findById(itemId);
  item.text = text;

  await item.save();
  res.json(item);
};

// DELETE TODO LIST ITEM
const deleteToDoItem = async (req, res) => {
  const deleteItemId = req.params.id;

  const item = await items.findByIdAndDelete(deleteItemId);
  res.json(item);
};

// UPDATE ITEM IS COMPLETED OR NOT
const completeToggleToDoItem = async (req, res) => {
  const completeToggleItemId = req.params.id;

  const item = await items.findById(completeToggleItemId);
  item.complete = !item.complete;
  await item.save();

  res.json(item);
};

export default {
  findAllItems,
  addNewToDoItem,
  updateItem,
  deleteToDoItem,
  completeToggleToDoItem,
};
