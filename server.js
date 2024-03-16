const express = require('express');
const app = express();
const port = 3009;
const fs = require('fs');

const imageupload = require('express-fileupload');

app.use(imageupload());

app.get("/home", (req, res) => {
    res.send("image upload successfully");
});

app.post("/uploadImage", (req, res) => {
    if (req.files) {
        console.log(req.files);
        //console.log(req.files);
         const {image} = req.files;
         console.log("req", image);

       
        fs.writeFile(image.name,image.data, function (err) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log('File saved!');
        });
        res.json(image)
    }
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
