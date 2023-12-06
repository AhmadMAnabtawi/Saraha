// استيراد مكتبة Cloudinary لرفع الصور
import cloudinary from 'cloudinary';

// تكوين بيانات الوصول إلى حساب Cloudinary باستخدام المتغيرات البيئية
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
});

// تصدير واجهة برمجة التطبيق (API) الخاصة بـ Cloudinary للاستخدام في مكان آخر
export default cloudinary.v2;
