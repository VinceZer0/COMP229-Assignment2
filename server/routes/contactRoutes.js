import express from 'express';
import { 
  getAllContacts, 
  getContactById, 
  addNewContact, 
  updateContactById, 
  deleteContactById, 
  deleteAllContacts 
} from '../controllers/contactControllers.js';

const router = express.Router();

router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', addNewContact);
router.put('/:id', updateContactById);
router.delete('/:id', deleteContactById);
router.delete('/', deleteAllContacts);

export default router;
