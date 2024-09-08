import  multer from "multer";
import multerS3 from "multer-s3";
import  aws from "aws-sdk";
import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: "ap-south-1", // this is the region that selected in AWS account
});

const storage = multerS3({
    s3: s3,
    bucket: "sanins3bucket",
    acl: "public-read",
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically set the correct Content-Type
    contentDisposition: "inline", // Ensure the file is displayed inline
    key: function (req, file, cb) {
        cb(null, Date.now().toString() + "-" + file.originalname);
    },
});
// Initialize multer with disk storage
const upload = multer({ storage: storage });

export default upload;
