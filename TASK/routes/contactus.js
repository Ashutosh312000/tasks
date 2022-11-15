const path = require('path');

const express = require('express');


const contactuscontroller=require('../controller/contactusC');

const router = express.Router();

router.get('/contactus',contactuscontroller.contactusroute );

module.exports = router;
