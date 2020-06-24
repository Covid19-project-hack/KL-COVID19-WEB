$(document).ready(function () {
  const tablelist = document.getElementById("tbl");

  var testlabs = (function () {
    var json = null;
    $.ajax({
      async: false,
      global: false,
      url: "json/epass.json",
      dataType: "json",
      success: function (data) {
        json = data;
      },
    });
    return json;
  })();

  tollnums = testlabs.data;
  tollnums.forEach((element) => {
    tablelist.innerHTML += `<tr>
    <td><b>${element.name}</b></td>
    <td><a href= ${element.link} target="_blank"><button
                class="btn btn-primary">GO</button></a></td>
</tr>`;
  });
});
