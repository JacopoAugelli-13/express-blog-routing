import express from 'express';

export const getAll = async (req, res) => {
  try {
    res.status(200).json({ message: "Lista articoli" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const newPost = async (req, res) => {
  try {
    res.status(201).json({ message: "Articolo creato" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const modify = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Articolo ${id} aggiornato` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const sobstitude = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Articolo ${id} sostituito` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleted = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Articolo ${id} eliminato` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};