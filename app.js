import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios'

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
   res.render('landingPage.ejs');
});

app.post("/generate", async(req, res) => {
    const numberOfPic = req.body.numberOfPicture;

    try{
        const APIdata = await axios.get(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=${numberOfPic}`);
        const result = APIdata.data;
        res.render("landingPage.ejs", {
            data: result
        });
      
    } catch (error){
        console.error("Failed to fetch the data due to:", error.message);
        res.render("landingPage.ejs", {
            error: error.message
        });
    }

});

app.listen(port, () => {
    console.log(`Server is running from port ${port}`);
});
