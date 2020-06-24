$(document).ready(function () {
  const listgrp = document.getElementById("lstgrp");

  var tollfree = (function () {
    var json = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': "json/counselling.json",
      'dataType': "json",
      'success': function (data) {
        json = data;
      }
    });
    return json;
  })();

  tollnums = tollfree.data
  tollnums.forEach(element => {
    listgrp.innerHTML +=
      `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
    <div class="d-flex w-100 justify-content-between">
      <h5><b>${element.district}</b></h5>
    </div>
    <br>
    <p class="mb-1"><i class="fas fa-phone-alt" style="margin-right: 15px;"> </i>    Phone Number : ${element.phone_number}</p>
    </div>`;
  });
});