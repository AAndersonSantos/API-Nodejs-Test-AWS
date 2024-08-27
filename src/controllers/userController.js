exports.returnUsers = function(req, res){

    const users = [
        { id: 1, name: 'Anderson Santos' },
        { id: 2, name: 'Jhon Doe' },
        { id: 3, name: 'Batman' }
    ];

    try {
        res.status(200).json({ users});

    } catch (error) {
        res.status(500).send("Houve um erro: " + error);
        
    }
}