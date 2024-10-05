import multer from "multer";
import {GridFsStorage} from 'multer-gridfs-storage'



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // File destination
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // File name
    }
});

const upload = multer({ storage: storage });

const UploadFile = upload.single('file'); // 'file' should be the name of the file input field in your form

export default UploadFile;



// const storage = new GridFsStorage({
//     url: 'mongodb+srv://u03076699182:mark1122@cluster0.zzpqmqq.mongodb.net/?retryWrites=true&w=majority',
//     file: (request , file)=>{
//         const match = ["image/png" , "image/jpg"];

//         if(match.indexOf(file.mimeType) === -1){
//             return `${Date.now()}-file-${file.orignalname}`
//         }

//         return {
//             bucketName: 'photos',
//             filename: `${Date.now()}-file-${file.orignalname}`
//         }
//     }
// })

// export default multer({ storage })
