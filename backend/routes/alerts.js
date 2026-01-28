const express = require('express');
const router = express.Router();
const { alerts } = require('../data/store');
const { v4: uuidv4 } = require('uuid');
const validateAlert = require('../middleware/validateAlert');

router.get('/', (req, res) => {
  const { country, status, page = 1, limit = 5 } = req.query;

  let filtered = alerts;
  if (country) filtered = filtered.filter(a => a.country === country);
  if (status) filtered = filtered.filter(a => a.status === status);

  const start = (page - 1) * limit;
  const end = start + parseInt(limit);

  res.json({
    total: filtered.length,
    page: Number(page),
    totalPages: Math.ceil(filtered.length / limit),
    data: filtered.slice(start, end)
  });
});

router.post('/', validateAlert, (req, res) => {
  const { country, city, visaType } = req.body;

  const newAlert = {
    id: uuidv4(),
    country,
    city,
    visaType,
    status: "Active",
    createdAt: new Date()
  };

  alerts.push(newAlert);
  res.status(201).json(newAlert);
});

router.put('/:id', (req, res) => {
  const alert = alerts.find(a => a.id === req.params.id);
  if (!alert) return res.status(404).json({ message: "Alert not found" });

  alert.status = req.body.status || alert.status;
  res.json(alert);
});

router.delete('/:id', (req, res) => {
  const index = alerts.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Alert not found" });

  alerts.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
