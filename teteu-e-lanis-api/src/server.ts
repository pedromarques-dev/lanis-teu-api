import { randomUUID } from 'crypto';
import { NextFunction, Request, Response } from 'express';
import { UUID } from 'mongodb';

const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery",  true)

app.use(cors());
app.use(express.json())

// Models
const Gift = require('./entities/Gift');

app.get("/", async (req: Request, res: Response) => {
    res.send("Bem vindo a aplicação!")
})

app.get("/gifts", async (req: Request, res: Response) => {
    try {
        const query = await Gift.find();
        return res.status(200).json({
            msg: "Presentes listados com sucesso!",
            query
        })
    } catch (error) {
        return res.status(500).json({
            msg: "Nao foi possivel encontrar a lista de presentes!"
        })
    }
})

app.post("/gifts", async (req: Request, res: Response) => {

    const { name, url } = req.body;

    try {
        const gift = new Gift({
            name, 
            url
        })

        await Gift.create(gift)

        return res.status(200).json({
            msg: "Presente adicionado com sucesso!",
            gift
        })
    } catch (error: any) {
        console.log(error)
        return res.status(500).json({
            msg: "Nao foi possivel adicionar o presente a lista de presentes!"
        })
    }
})

app.put("/gifts/edit/:_id", async (req: Request, res: Response) => {
    const { _id } = req.params;
    const { name, url } = req.body

    const giftExists = await Gift.findOne({ _id }).exec()

    if (!giftExists) {
        res.status(404).json({
            msg: "Presente não encontrado"
        })
    }

   if (name === null || url === null) {
        res.status(401).json({
            msg: "Preencha todos os campos, por favor!"
        })
   }

    const updatedGift = new Gift({
        _id,
        name, 
        url
    })

    await Gift.updateOne(updatedGift)

    return res.send(updatedGift)
 })


const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const uri = `mongodb+srv://lanis-teu-api:D317E6x789Co1eC1@cluster0.mwxkz8x.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(uri)
    .then(() => {
        app.listen(3333)
        console.log("Conectou ao Banco!")
    })
    .catch((err: unknown) => console.log(err))

