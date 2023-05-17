$(document).ready(function () {
  $.get(
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
    function (res) {
      renderData(res);
    }
  );

  //rendering table data
  var dataBody = $("#data-body");

  function renderData(data) {
    for (let i = 0; i < data.length; i++) {
      let column1 = $("<td>").addClass("column1").text(data[i].id);
      let column2 = $("<td>").addClass("column2").text(data[i].firstName);
      let column3 = $("<td>").addClass("column3").text(data[i].lastName);
      let column4 = $("<td>").addClass("column4").text(data[i].email);
      let column5 = $("<td>").addClass("column5").text(data[i].phone);
      let tr = $("<tr>").addClass("data-row");
      tr.append(column1, column2, column3, column4, column5);
      tr.click(() => {
        $("#data-body tr.active").removeClass("active");
        tr.addClass("active");
        $("#info-content").show();
        $("#detailsName").text(`${data[i].firstName} ${data[i].lastName}`);
        $("#detailsdescription").text(data[i].description);
        address = data[i].address;
        $("#addressStreet").text(address.streetAddress);
        $("#addressCity").text(address.city);
        $("#addressState").text(address.state);
        $("#addressZip").text(address.zip);
      });
      dataBody.append(tr);
    }
  }

  //to get the data as per input
  var input = $("#search-box");
  input.on("keyup", (e) => {
    e.preventDefault();
    let search = e.target.value;
    let dataBody = document.getElementById("data-body");
    let tr = dataBody.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      let tdFn = tr[i].getElementsByTagName("td")[1].innerText;
      if (tdFn.toLowerCase().includes(search.toLowerCase())) {
        console.log(tdFn);
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  });
});
