const User = require('../models/UserModel');

module.exports = {
    index: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({message: error.message});
        }

        // res.send('This page index');
    },

    store: async (req, res) => {
        const user = new User(req.body);
        try {
            const store = await user.save();
            res.status(201).json(store);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    show: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    update: async (req, res) => {
        try {
            const update = await User.updateOne(
                {_id: req.params.id}, {$set:req.body}
            )
            res.status(200).json(update);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    delete: async (req, res) => {
        try {
            const deleteStudent = await User.deleteOne(
                {_id: req.params.id}
            );
            res.status(200).json(deleteStudent);
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    }
}