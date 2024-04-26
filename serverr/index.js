const express = require("express");
const app = express();
const database = require("./config/database");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/User");
const contactRoutes = require("./routes/Contact");
const profileRoutes = require("./routes/Profile");
const prescriptionRoutes = require("./routes/Prescription");
const bookingRoutes = require("./routes/Booking");
const cors = require("cors");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 4000;

database.connect();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)

//cloudinary connection
cloudinaryConnect();

app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1",contactRoutes);
app.use("/api/v1/auth/prescription",prescriptionRoutes);
app.use("/api/v1",bookingRoutes);

app.get("/",(req,res) => {
    return res.json({
        success : true,
        message : "Your server is up and running..."
    });
});

app.listen(PORT,() => {
    console.log(`App is running at port no. ${PORT}`);
});