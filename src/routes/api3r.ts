import { Router } from 'express';
import { getAllApi3, addApi3 } from '../controllers/api3c';

const router = Router();

// Route pour ajouter un utilisateur
router.get('/add', addApi3);

// Route pour afficher tous les utilisateurs
router.get('/afficherAll3', getAllApi3);

export default router;
