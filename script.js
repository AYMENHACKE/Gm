function navigateTo(page) {
  var sections = ['homeSection', 'registerSection', 'loginSection', 'contactSection'];
  for (var i = 0; i < sections.length; i++) {
    if (sections[i] === page + 'Section') {
      document.getElementById(sections[i]).style.display = 'block';
    } else {
      document.getElementById(sections[i]).style.display = 'none';
    }
  }
}    
function login() {
  // احصل على قيمة حقل البريد الإلكتروني لتسجيل الدخول
  var loginEmail = document.getElementById("loginEmail").value;

  // احصل على قيمة حقل كلمة المرور لتسجيل الدخول
  var loginPassword = document.getElementById("loginPassword").value;

  // أدخل هنا الرمز الخاص بتنفيذ عملية تسجيل الدخول
  // يمكنك هنا فحص صحة بيانات تسجيل الدخول وتنفيذ الإجراءات المناسبة
  // مثل إرسال البيانات إلى الخادم أو عرض رسالة نجاح/فشل

  // للتجربة، يمكنك استخدام الأوامر التالية لعرض رسالة بنجاح تسجيل الدخول
  alert("تم تسجيل الدخول بنجاح");
}

function register() {
  // احصل على قيمة حقول تسجيل الحساب
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // أدخل هنا الرمز الخاص بتنفيذ عملية إنشاء الحساب
  // يمكنك هنا فحص صحة بيانات تسجيل الحساب وتنفيذ الإجراءات المناسبة
  // مثل إرسال البيانات إلى الخادم أو عرض رسالة نجاح/فشل

  // للتجربة، يمكنك استخدام الأوامر التالية لعرض رسالة بنجاح إنشاء الحساب
  alert("تم إنشاء الحساب بنجاح");
}

