const ApiError = require("../utils/appError");
const CatchAsync = require("../Middlewares/asyncHandle");
const multer = require("multer");
const sharp = require("sharp");

const multerStores = multer.memoryStorage();

const multerFilters = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new ApiError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStores,
  fileFilter: multerFilters,
});

const uploadPostImage = upload.single("image");

const resizePostPhoto = CatchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.body.image = `products-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(700, 700)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/uploads/${req.body.image}`);
  next();
});

module.exports = {
  uploadPostImage,
  resizePostPhoto,
};
