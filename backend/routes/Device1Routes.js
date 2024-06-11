const Router = require('express');
const { getDevice1, saveDevice1, updateDevice1, deleteDevice1 } = require('../controller/Device1Controller');
const router=Router();

router.get(`/:deviceId?/:date?`,getDevice1);
router.post('/:deviceId/:date/save',saveDevice1);
router.post('/:deviceId/:date/update',updateDevice1);
router.post('/:deviceId/delete', deleteDevice1 );

module.exports= router;