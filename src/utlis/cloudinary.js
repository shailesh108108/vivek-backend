import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

(async function () {

    // Configuration
    cloudinary.config({
        cloud_name: 'dxy4uspzw',
        api_key: '922979649925791',
        api_secret: 'U5jSm2qHHVxTfB3xCoXzS1ZS-5o' // Click 'View API Keys' above to copy your API secret
    });

})();

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            console.log("local path not found")
            return null
        }
        const response = await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: "auto",
            })
        //file has been uploaded successfully
        console.log("file ;uploaded  on  cloudinary successfully", response.url);
        return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath) // removes locally saved temp file as the upload operation fails
        return null;
    }
}

export { uploadOnCloudinary }