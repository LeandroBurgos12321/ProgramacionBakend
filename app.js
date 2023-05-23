import express from 'express'

const equipos = [
    { id: 1, name: 'BocaJr',player: 'Merentiel', price: 50000 },
    { id: 2, name: 'River', player: 'Barco', price: 300000 },
    { id: 3, name: 'Racing', player: 'Auche', price: 80000 },
    { id: 4, name: 'Independiente', player: 'Brey', price: 10000 },
]

const user = {
    name: 'Totti',
    title: 'Title 1'
}

const users = [
    { id: 1, name: 'Pablo Perez', age: 32 },
    { id: 2, name: 'Colo Barco', age: 18 },
    { id: 3, name: 'Cauteruchio', age: 35 },
]

const app = express()

//implementación de la ruta RAIZ (http://localhost:8080/)
app.get('/', (request, response) => {
    //html onwire! (vistas)
    response.send('<h1>Hola Mundo!!!</h1><hr><div style="background-color: red">Soy un div</div>')
})

//implementación de la otra ruta (http://localhost:8080/cursos)
app.get('/equipos', (request, response) => {
    response.send({equipos}) //data onwire!
})

app.get('/equipos/:id', (request, response) => {
    const id = request.params.id
    const equipo = equipos.find(item => item.id == id)
    if (!equipo) return response.send({ error: 'El equipo no existe' })
    response.send(equipo)
})

app.get('/user', (request, response) => {
    response.send({ user })
})

app.get('/users', (request, response) => {
    const id = request.query.id
    if (!id) {
        response.send({users}) //data onwire!
    } else {
        const user = users.find(item => item.id == id)
        if (!user) return response.send({ error: 'El user no existe' })
        response.send(user)
    }
})



app.listen(8080, () => console.log('Server Up'))