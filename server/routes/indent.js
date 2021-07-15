import express from 'express';
import indent from '../models/formdata.js';
const router = express.Router();

// POST request for Indent
router.post('/', (req, res) => {
    //res.json(req.body.patientid);
    const newindent = indent(
        {
            patientname: req.body.patientname,
            patientid: req.body.patientid,
            wardno: req.body.wardno,
            bedno: req.body.bedno,
            consultant: req.body.consultant,
            items: req.body.items,
        }
    );

    const data = req.body;
    const newdata = new indent(data);
    newdata.save((err) => {
        if (err) {
            res.status(500);
        } else {
            res.status(200).json({ message: 'data added' });
        }
    })
});

export default router;