const Item = require('./model.js');

// Create and Save a newItem
module.exports.create = (req, res) => {
    console.log(req.body);

    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Item content can not be empty"
    //     });
    // }

    // Create a new Item
    // const newItem = new Item({
    //     first: req.body.first, 
    //     middle: req.body.middle,
    //     last: req.body.last,
    //     age: req.body.age,
    //     month: req.body.month,
    //     day: req.body.day,
    //     year: req.body.year,
    //     gender: req.body.gender,
    //     street: req.body.street,
    //     city: req.body.city,
    //     state: req.body.state,
    //     country: req.body.country,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     grade: req.body.grade,

    // });
    const newItem = new Item(req.body);

    // Save Item in the database
    newItem.save()
        .then(data => {
            res.send(data);
            console.log(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Item."
            });
        });
};


// Retrieve and return all items from the database.
exports.findAll = (req, res) => {
    Item.find()
        .then(items => {
            console.log(items);

            res.send(items);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving items."
            });
        });
};

// Find a single item with a itemId
exports.findOne = (req, res, id) => {
    Item.findByIdAndUpdate(id)
        .then(items => {
            if (!items) {
                return res.status(404).send({
                    message: "Note not found with id " + id
                });
            }
            res.send(items);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + id
                });
            }
            return res.status(500).send({
                message: "Error retrieving item with id " + id
            });
        });
};

// Update a note identified by the noteId in the request
exports.update = (req, res, id) => {
    // Validate Request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }

    // Find note and update it with the request body
    Item.findByIdAndUpdate(id, {
        first: req.body.first,
        middle: req.body.middle,
        last: req.body.last,
        age: req.body.age,
        month: req.body.month,
        day: req.body.day,
        year: req.body.year,
        gender: req.body.gender,
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        email: req.body.email,
        phone: req.body.phone,
        grade: req.body.grade,

    }, { new: true })
        .then(items => {
            if (!items) {
                return res.status(404).send({
                    message: "Note not found with id " + id
                });
            }
            res.send(items);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + id
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + id
            });
        });
};

// Delete a items with the specified noteId in the request
exports.delete = (req, res, id) => {
    Item.findByIdAndRemove(id)
        .then(items => {
            if (!items) {
                return res.status(404).send({
                    message: "Note not found with id " + id
                });
            }
            res.send({ message: "Note deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + id
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + id
            });
        });
};


