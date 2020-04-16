const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static('pizzaIMG'));

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});

let menu = [
    {
        id: 0,
        name: "Cheese Pizza",
        price: 8.50,
        topping: "cheese",
        quantity: 0,
        image: "assets/cheese.jpg"
    },
    {
        id: 1,
        name: "Pepperoni Pizza",
        price: 10.50,
        topping: "pepperoni",
        quantity: 0,
        image: "assets/pepperoni.jpg"
    },
    {
        id: 2,
        name: "Pepperoni and Sausage Pizza",
        price: 12,
        topping: "pepperoni, sausage",
        quantity: 0,
        image: "assets/pepperoni_sausage.jpg"
    },
    {
        id: 3,
        name: "Supreme Pizza",
        price: 13.50,
        topping: "pepperoni, sausage, mushrooms, green pepper, onions, black olives",
        quantity: 0,
        image: "assets/supreme.jpg"
    },
    {
        id: 4,
        name: "Hawaiian Pizza",
        price: 11.50,
        topping: "ham, pineapple",
        quantity: 0,
        image: "assets/hawaiian.jpg"
    },
    {
        id: 5,
        name: "Margherita Pizza",
        price: 8,
        topping: "mozzarella cheese, basil",
        quantity: 0,
        image: "assets/margherita.jpg"
    },
    {
        id: 6,
        name: "Meat Lovers Pizza",
        price: 14.50,
        topping: "pepperoni, sausage, ham, bacon",
        quantity: 0,
        image: "assets/meat_lovers.jpg"
    },
    {
        id: 7,
        name: "Vegeterian Pizza",
        price: 13.50,
        topping: "banana pepper, green pepper, onions, mushrooms, red pepper, black olives",
        quantity: 0,
        image: "assets/veggie.png"
    },
    {
        id: 8,
        name: "BBQ Chicken Pizza",
        price: 12.50,
        topping: "chicken, red onion, parsley",
        quantity: 0,
        image: "assets/bbq.jpeg"
    },
    {
        id: 9,
        name: "Buffalo Chicken Pizza",
        price: 8,
        topping: "chicken",
        quantity: 0,
        image: "assets/buffalo.jpg"
    }
];

app.get('/pizza', (req, res) => {
    res.json(menu);
});

app.get('pizza/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const body = req.body.data.quantity;

    const update = menu.find(item => item.id === id);

    update.quantity = body;
    res.json("updated");
});