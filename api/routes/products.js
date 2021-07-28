const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    response.status(200).json({
        message: 'Testing GET request for /products.'
    });
});
// save this
module.exports = router;
