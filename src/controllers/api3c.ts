import { Request, Response } from 'express';
import Api3 from '../models/api3';

// Fonction pour récupérer toutes les entrées
export const getAllApi3 = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await Api3.find();
        res.json(data);
    } catch (error) {
        console.error('Erreur récupération Api3:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

// Fonction pour ajouter une entrée
export const addApi3 = async (req: Request, res: Response): Promise<void> => {
    try {
        // Définir les valeurs par défaut
        const nom = "Rahdi";
        const prenom = "Benafia";
        const id = "88";  // ID personnalisé

        // Créer une nouvelle entrée avec les valeurs définies
        const newEntry = new Api3({ id, nom, prenom });

        // Sauvegarder dans la base de données
        await newEntry.save();

        // Répondre avec succès
        res.status(201).json({ message: 'Ajout réussi', data: newEntry });
    } catch (error) {
        console.error('Erreur lors de l\'ajout:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};

