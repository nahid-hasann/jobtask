const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001; 

app.use(cors());
app.use(express.json());


let items = [
  { id: 1, name: "Wireless Headphone", description: "High quality noise cancelling headphones.", price: 120, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
  { id: 2, name: "Smart Watch", description: "Track your fitness and health.", price: 80, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
  { id: 3, name: "Gaming Mouse", description: "RGB gaming mouse with high DPI.", price: 45, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60" }
];

// ১. সব আইটেম পাওয়ার রুট
app.get('/api/items', (req, res) => {
  res.json(items);
});

// ২. নির্দিষ্ট আইটেম পাওয়ার রুট (তোমার ফাইলে এই অংশটা মিসিং ছিল)
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// ৩. নতুন আইটেম অ্যাড করার রুট
app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image || "https://via.placeholder.com/150"
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// সার্ভার স্টার্ট
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
});