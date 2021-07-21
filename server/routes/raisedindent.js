import express from 'express';
import issuedindent from '../models/raisedindents.js';
const router = express.Router();

// POST request for raisedindent
router.post('/issue', (req, res) => {
    //res.json(req.body.patientid);
    const newindent = issuedindent(
        {
            wardsisterid: req.body.wardsisterid,
            wardsistername: req.body.wardsistername,
            patientid: req.body.patientid,
            patientname: req.body.patientname,
            wardno: req.body.wardno,
            bedno: req.body.bedno,
            consultant: req.body.consultant,
            items: req.body.items,
        }
    );

    const data = req.body;
    const newdata = new issuedindent(data);
    newdata.save((err) => {
        if (err) {
            res.status(500);
        } else {
            res.status(200).json({ message: 'data added' });
        }
    })
});

//GET REQUEST FOR ISSUED INDENTS
router.get('/issueall', (req, res) => {

    issuedindent.find({}, (err, issuedindents) => {
        if (err)
            console.error(err);

        res.json(issuedindents);

    })
});

export default router;
