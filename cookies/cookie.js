// how to set a cookie
// document.cookie;
document.cookie =
  "college= nihareeka; expires= fri,27 feb 2026 12:00:00 UTC ;path=/";
//   access the cookie
console.log(document.cookie);
// update or modify the cookie
document.cookie = "college=TU ;expires= fri,27 feb 2026 12:00:00 UTC ;path=/";
console.log(document.cookie);

// delete the cookie
document.cookie =
  "college= nihareeka; expires= 24 feb 2026 12:00:00 UTC; path=/";