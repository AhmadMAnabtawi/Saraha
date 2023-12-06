import { signinSchema } from "../Modules/Auth/Auth.Validation";

// Middleware للتحقق من صحة البيانات
const validation = (Schema) => {
  return (req, res, next) => {
    const validationArray = [];

    // قم بالتحقق من صحة بيانات الجسم (body) في الطلب
    const validationResult = Schema.body.validate(req.body, { abortEarly: false });
    if (validationResult.error) {
      validationArray.push(validationResult.error.details);
    }

    // قم بالتحقق من صحة معلومات الاستعلام (query parameters) في الطلب
    const validationQueryResult = Schema.query.validate(req.query, { abortEarly: false });
    if (validationQueryResult.error) {
      validationArray.push(validationQueryResult.error.details);
    }

    // إذا كانت هناك أخطاء في التحقق من الصحة، قم بإرجاع استجابة JSON تحتوي على تفاصيل الأخطاء
    if (validationArray.length > 0) {
      return res.json({ message: "خطأ في التحقق من الصحة", validationArray });
    } else {
      // إذا لم تكن هناك أخطاء في التحقق من الصحة، قم بتمرير التحكم إلى middleware أو معالج الطريق التالي
      return next();
    }
  };
};

export default validation;
