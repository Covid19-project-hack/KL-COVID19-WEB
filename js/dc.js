next = 0;
$(document).ready(function () {
  var firebaseConfig = (function () {
    var json = null;
    $.ajax({
      async: false,
      global: false,
      url: "json/fb_config.json",
      dataType: "json",
      success: function (data) {
        json = data;
      },
    });
    return json;
  })();
  firebase.initializeApp(firebaseConfig);
  console.log("init");

  firebase.auth().onAuthStateChanged((firebaseUser) => {
    if (firebaseUser) {
      console.log(firebaseUser.email);
    } else {
      console.log("not logged in");
      // window.location = "signinwithphno.html";
    }
  });
  var listgrp = document.getElementById("lstgrp");
  var testlabs = (function () {
    var json = null;
    $.ajax({
      async: false,
      global: false,
      url: "json/healthcares.json",
      dataType: "json",
      success: function (data) {
        json = data;
      },
    });
    return json;
  })();

  tollnums = testlabs.data;
  console.log(tollnums);
  tollnums = tollnums.slice(0, 100);
  console.log(tollnums);
  tollnums.forEach((element) => {
    listgrp.innerHTML += `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
  <div class="d-flex w-100 justify-content-between">
    <h5><b>${element.name}</b></h5>
  </div>
  <br>
  <p class="mb-1"><i class="fas fa-map-marker-alt" style="margin-right: 15px;"></i><span class="text-muted">Location : </span>${element.address}</p>
  <p class="mb-1"><i class="fas fa-briefcase" style="margin-right: 15px;"></i><span class="text-muted">Officer : </span>  ${element.officer}</p>
  <p class="mb-1"><i class="fas fa-tag" style="margin-right: 15px;"></i><span class="text-muted">Free/Paid : </span>  ${element.fp}</p>
  <p class="mb-1"><i class="fas fa-warehouse" style="margin-right: 15px;"></i><span class="text-muted">Capacity : </span>    ${element.cap}</p>
  </div>`;
  });
});
