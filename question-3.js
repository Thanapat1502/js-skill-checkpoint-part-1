// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  let result = "";
  if (userPassword.length < 6) {
    result = "Weak";
  } else if (userPassword.length >= 6 && userPassword.length <= 10) {
    result = "Medium";
  } else if (userPassword.length > 10) {
    result = "Strong";
  }
  console.log(result);
  return result;
}

checkPasswordStrength("123456789101");
