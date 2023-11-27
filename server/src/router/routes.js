const { Router } = require("express");
const mercadopago = require("mercadopago");
const dotenv = require("dotenv");
dotenv.config();

const Mercado_Pago = Router();

mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN || "",
})

Mercado_Pago.post("/", async (req, res) => {
    console.log("soy el req.body/cartList", req.body);
    const cartList = req.body

    try {
        const preference = {
            items: cartList.map((product) => ({
                title: product.title,
                currency_id: "ARS",
                unit_price: product.price,
                quantity: 1,
            })),

            back_urls: {
                success: "http://192.168.0.166:3000//success",
                failure: "http://192.168.0.166:3000//failure",
            },

            auto_return: "approved",
        };

        const response = await mercadopago.preferences.create(preference);
        console.log(response);
        res.status(200).json(response.response.init_point);
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error.message);
    }
});

module.exports = Mercado_Pago;

// const productsArray = req.body;

// const product = productsArray.map(item => {
//     return {
//       title: item.title,
//       currency_id: "ARS",
//       unit_price: item.price,
//       quantity: item.quantity,
//     };
// })
// item: productsArray