$("#toggleBtn").on("click", function () {
  $("#sidebar").toggleClass("hidden");
  $("#content").toggleClass("full");
});
function checkAuth() {
  let auth = localStorage.getItem("auth");
  console.log(auth);

  if (auth == "undefined" || auth == "" || auth == null || auth == false) {
    location.href = "login.html";
  }
}
checkAuth();
