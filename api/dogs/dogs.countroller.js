const Dog = require('../../dataBase/Dogs'); // Імпортуємо модель Dog тут

module.exports = {
    createDog: async (req, res) => {
        try {
            const { name, color, tail_length, weight } = req.body;

            const dog = await Dog.create({ name, color, tail_length, weight });

            res.status(200).json(dog);
        } catch (error) {
            console.error('Error when creating a dog:', error);
            if (error.name === 'SequelizeValidationError') {
                const validationErrors = error.errors.map((err) => err.message);
                res.status(400).json({ errors: validationErrors });
            } else if (error.name === 'SequelizeUniqueConstraintError') {
                const validationErrors = error.errors.map((err) => err.message);
                res.status(400).json({ errors: validationErrors });
            } else {
                res.status(500).json({ error: 'Error when creating a dog' });
            }
        }
    },

    getAllDogs: async (req, res) => {
        try {
            // const { attribute, order, pageNumber, pageSize } = req.query;
            //
            // // Опції для сортування
            // const sortOptions = {
            //     order: [[attribute, order]],
            // };
            //
            // // Опції для пагінації
            // const paginationOptions = {
            //     offset: (pageNumber - 1) * pageSize,
            //     limit: pageSize,
            // };

            const dogs = await Dog.findAll({
                attributes: { exclude: ['id', 'createdAt', 'updatedAt'] }
            });

            res.status(200).json(dogs);
        } catch (error) {
            console.error('Error when receiving dogs:', error);

            res.status(500).json({error: 'Error when receiving dogs'});
        }
    }
}
