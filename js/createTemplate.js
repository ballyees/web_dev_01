let table = document.createElement('table')
    // table.id = "head-table"
table.className = "table table-bordered template-table"
table.align = "center"
var inhtml = '<thead>' +
    '<tr align="center" style="background-color: rgba(92, 91, 87, 0.2)">' +
    '<th scope="col"><a href="index.html">Home</a></th>' +
    '<th scope="col"><a href="gallery.html">Gallery</a></th>' +
    '<th scope="col" ><a href="contact.html">Contact</a></th>' +
    '</tr>' +
    '</thead>';
table.innerHTML = inhtml
console.log(inhtml)
document.body.appendChild(document.createElement('br'))
document.body.appendChild(table)
    // table2
document.body.appendChild(document.createElement('br'))
table = document.createElement('table')
table.className = "table table-bordered template-table"
table.align = "center"
inhtml = '<thead>' +
    '<tr>' +
    '<th id="th-about" scope="col" style="width: 70%;">' +
    '<h4><b>Kittinan Prompao</b></h4>' +
    '<h5>Software Developer</h5>' +
    '<u style="color: blue;">Kittinan_prompao@elearning.cmu.ac.th</u>' +
    '<h6>082-306-7532</h6>' +
    '</th>' +
    '<th scope="col" style="width: 30%;">' +
    '<center>' +
    // '<picture>' +
    '<img src="img/profile.jpg" class="img-fluid mx-auto img-profile" alt="Responsive image">' +
    // '</picture>' +
    '</center>' +
    '</th>' +
    '</tr>' +
    '</thead>';
table.innerHTML = inhtml
document.body.appendChild(table)
document.body.appendChild(document.createElement('br'))