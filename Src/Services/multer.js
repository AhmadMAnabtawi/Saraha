import multer from 'multer';

function fileUpload() {
  const storage = multer.diskStorage({});
  
  function fileFilter(req, file, cb) {
    if (['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid format"), false);
    }
  }

  const upload = multer({ storage, fileFilter });
  return upload;
}

export default fileUpload;
