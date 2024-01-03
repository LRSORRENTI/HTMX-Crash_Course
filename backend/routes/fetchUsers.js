import express from "express";

const router = express.Router();

// route to fetchUser 

router.get('/users', (req, res) => {
    // logic here:
    const users = [
        {   
            id: 1,
            name: "John Smith",
        },
        {   
            id: 2,
            name: "Bob Johnson",
        },
        {   
            id: 3,
            name: "Kary Jacobs",
        }
    ]
    res.send(`
        <h1 class="text 2xl font-bold my-4">Users</h1>
        <ul> 
        ${users.map((user) =>  `<li>${user.name}</li>`).join('')}
        </ul>
        `)

})

export default router;
