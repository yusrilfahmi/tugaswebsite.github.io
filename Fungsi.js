// let mahasiswaArray = [];


document.addEventListener("DOMContentLoaded", function () {
  const cssStyle = `
      width: 300px;
      height: 500px;
      background-color: #f0f0f0;
      text-align: center;
      padding: 30px 30px;
      margin: 70px 0px 0px 70px;
      border-radius: 10px;
      float: left;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
  `;

  for (let index = 0; index < mahasiswaArray.length; index++) {
    createBiodata(mahasiswaArray[index]);

  }

  function createBiodata(data) {
    let biodataDiv = document.createElement("div");
    let nim = data.nim;
    biodataDiv.className = nim;
    biodataDiv.style.cssText = cssStyle; // Terapkan gaya CSS

    biodataDiv.innerHTML = `
          <img src="${data.foto}" style="width: 100px; height: 100px; border-radius: 50%;">
          <p><h3>${data.nama}</h3></p>
          <p><h3>${data.nim}</h3></p>
          <h4>Tanggal Lahir :</h4>
          <p>${data.ttl}</p>
          <h4>Alamat :</h4>
          <p>${data.alamat}</p>
          <h4>Pekerjaan</h4>
          <p>${data.pekerjaan}</p>
          <div id="cerita-${data.nim}"></div>
          <button style="margin-block: 1em;
              background-color: #c8c3c3; 
              border: none;
              color: white;
              margin-block: 1.5em;
              width: 200px;
              height: 40px;
              border-radius: 7px;
              color: black;"
              onclick="f${data.nim}()">
              
              <span>Cerita</span>
          </button>
      `;

    biodataDiv.style.transition = "background-color 0.3s, color 0.3s, transform 0.3s";
    biodataDiv.style.transform = "scale(1)";

    // Fungsi event listener untuk memberikan efek hover pada masing-masing kotak
    biodataDiv.addEventListener("mouseenter", function () {
      biodataDiv.style.backgroundColor = "#3b5999";
      biodataDiv.style.color = "white";
      biodataDiv.style.transform = "scale(1.1)";
    });

    biodataDiv.addEventListener("mouseleave", function () {
      biodataDiv.style.backgroundColor = "#f0f0f0";
      biodataDiv.style.color = "#4d4d4d";
      biodataDiv.style.transform = "scale(1)";
    });

    return biodataDiv;
  }

  // Tambahkan setiap biodata ke dalam container
  let container = document.getElementById("biodataContainer");
  mahasiswaArray.forEach(mahasiswa => {
    container.appendChild(createBiodata(mahasiswa));
  });
});

// for (let index = 0; index < mahasiswaArray.length; index++) {
//   createBiodata(mahasiswaArray[index]);
// }

// inputManual(
//   "Yusril Fahmi",
//   "220602014",
//   "23 November 2001",
//   "Cerme Gresik",
//   "Frepot Papua",
//   "assets/image/1.jpeg"
// );
// inputManual(
//   "Qomaruzzaman",
//   "220602006",
//   "14 Juni 2004",
//   "Akim Kayat Gresik",
//   "BUMN Pertamina",
//   "assets/image/2.jpeg"
// );
// inputManual(
//   "A. Azriel Friyansyah",
//   "220602043",
//   "25 Maret 2002",
//   "PPS Gresik",
//   "Petrokimia Gresik",
//   "assets/image/3.jpeg"
// );
// inputManual(
//   "Zaky Elmondo R.",
//   "220602002",
//   "12 Mei 2000",
//   "Suci Gresik",
//   "Karyawan BUMN BRI",
//   "assets/image/4.png"
// );
// inputManual(
//   "M. Ikfani Difangga",
//   "220602011",
//   "1 Agustus 2004",
//   "Tegulungan Gresik",
//   "Karyawan BUMN PLN",
//   "assets/image/5.jpeg"
// );
// inputManual(
//   "Dimas Achyar Trizyaputra",
//   "220602046",
//   "1 Januari 2001",
//   "Cerme Gresik",
//   "Karyawan BUMN Persero",
//   "assets/image/6.jpeg"
// );

// document.addEventListener("DOMContentLoaded", function () {
//   updateBiodataDisplay();
// });

// function inputManual(
//   nama,
//   nim,
//   ttl,
//   alamat,
//   pekerjaan,
//   foto = "gambar/1.jpeg"
// ) {
//   let mahasiswa = {
//     nama: nama,
//     nim: nim,
//     ttl: ttl,
//     alamat: alamat,
//     pekerjaan: pekerjaan,
//     foto: foto,
//   };

//   mahasiswaArray.push(mahasiswa);
// }

// function tambahMahasiswa() {
//   let nama = document.getElementById("nama").value;
//   let nim = document.getElementById("nim").value;
//   let ttl = document.getElementById("ttl").value;
//   let alamat = document.getElementById("alamat").value;
//   let pekerjaan = document.getElementById("pekerjaan").value;
//   let fotoInput = document.getElementById("foto").files[0];

//   if (fotoInput) {
//     let reader = new FileReader();
//     reader.onload = function (e) {
//       let fotoURL = e.target.result;
//       let mahasiswa = {
//         nama: nama,
//         nim: nim,
//         ttl: ttl,
//         alamat: alamat,
//         pekerjaan: pekerjaan,
//         foto: fotoURL,
//       };

//       mahasiswaArray.push(mahasiswa);

//       var biodataElement = createBiodata(mahasiswa);
//       biodataContainer.appendChild(biodataElement);
//       alert("Data Mahasiswa Berhasil Ditambahkan!");
//       updateBiodataDisplay();

//       //Mengosongkan TextField
//       document.getElementById("nama").value = "";
//       document.getElementById("nim").value = "";
//       document.getElementById("ttl").value = "";
//       document.getElementById("alamat").value = "";
//       document.getElementById("pekerjaan").value = "";
//       document.getElementById("foto").value = "";
//     };
//     reader.readAsDataURL(fotoInput);
//   } else {
//     alert("Harap upload foto profil.");
//   }
// }

// function editMahasiswa() {
//   let nama = document.getElementById("nama").value;
//   let nim = document.getElementById("nim").value;
//   let ttl = document.getElementById("ttl").value;
//   let alamat = document.getElementById("alamat").value;
//   let pekerjaan = document.getElementById("pekerjaan").value;
//   let fotoInput = document.getElementById("foto").files[0];

//   let mahasiswa = {
//     nama: nama,
//     nim: nim,
//     ttl: ttl,
//     alamat: alamat,
//     pekerjaan: pekerjaan,
//   };

//   for (let index = 0; index < mahasiswaArray.length; index++) {
//     if (mahasiswaArray[index].nim == nim) {
//       mahasiswaArray[index].nama = mahasiswa.nama;
//       mahasiswaArray[index].nim = mahasiswa.nim;
//       mahasiswaArray[index].ttl = mahasiswa.ttl;
//       mahasiswaArray[index].alamat = mahasiswa.alamat;
//       mahasiswaArray[index].pekerjaan = mahasiswa.pekerjaan;

//       if (fotoInput) {
//         let reader = new FileReader();
//         reader.onload = function (e) {
//           mahasiswaArray[index].foto = e.target.result;
//           updateBiodataDisplay();
//           alert("Telah Terganti Sempurna!");

//           clearFormFields();
//         };
//         reader.readAsDataURL(fotoInput);
//       } else {
//         alert("Harap Upload Foto Profile");
//       }

//       return;
//     }
//   }

//   alert("Mahasiswa dengan NIM tersebut tidak ditemukan.");
// }

// const cssStyle = `
//     width: 300px;
//     height: 500px;
//     background-color: #f0f0f0;
//     text-align: center;
//     padding: 30px 30px;
//     margin: 70px 0px 0px 70px;
//     border-radius: 10px;
//     float: left;
//     box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); 
// `;

// function createBiodata(data) {
//   let biodataDiv = document.createElement("div");
//   let nim = data.nim;
//   biodataDiv.className = nim;
//   console.log(data.nim);
//   biodataDiv.style.cssText = cssStyle; // Terapkan gaya CSS

//   biodataDiv.innerHTML = `
//       <img src="${data.foto}" style="width: 100px; height: 100px; border-radius: 50%;">
//       <p><h3>${data.nama}</h3></p>
//       <p><h3>${data.nim}</h3></p>
//       <h4>Tanggal Lahir :</h4>
//       <p>${data.ttl}</p>
//       <h4>Alamat :</h4>
//       <p>${data.alamat}</p>
//       <h4>Pekerjaan</h4>
//       <p>${data.pekerjaan}</p>
//       <div id="cerita-${data.nim}"></div>
//       <button style="margin-block: 1em;
//           background-color: #c8c3c3; 
//           border: none;
//           color: white;
//           margin-block: 1.5em;
//           width: 200px;
//           height: 40px;
//           border-radius: 7px;
//           color: black;"
//           onclick="f${data.nim}()">

//           <span>Cerita</span>
//       </button>
//   `;

//   biodataDiv.style.transition = "background-color 0.3s, color 0.3s, transform 0.3s";
//   biodataDiv.style.transform = "scale(1)";

//   // Fungsi event listener untuk membrikan efek hover pada masing-masing kotak
//   biodataDiv.addEventListener("mouseenter", function () {
//     biodataDiv.style.backgroundColor = "#3b5999";
//     biodataDiv.style.color = "white";
//     biodataDiv.style.transform = "scale(1.1)";
//   });

//   biodataDiv.addEventListener("mouseleave", function () {
//     biodataDiv.style.backgroundColor = "#f0f0f0";
//     biodataDiv.style.color = "#4d4d4d";
//     biodataDiv.style.transform = "scale(1)";
//   });

//   return biodataDiv;
// }

// // Tambahkan setiap biodata ke dalam container
// let container = document.getElementById("biodataContainer");
// mahasiswaArray.forEach(mahasiswa => {
//   container.appendChild(createBiodata(mahasiswa));
// });

// function clearFormFields() {
//   document.getElementById("nama").value = "";
//   document.getElementById("nim").value = "";
//   document.getElementById("ttl").value = "";
//   document.getElementById("alamat").value = "";
//   document.getElementById("pekerjaan").value = "";
//   document.getElementById("foto").value = "";
// }

// //Fungsi Hapus Mahasiswa
// function hapusMahasiswa() {
//   let nim = document.getElementById("NimHps").value;
//   let indexToRemove = mahasiswaArray.findIndex(
//     (mahasiswaArray) => mahasiswaArray.nim === nim
//   );

//   if (indexToRemove !== -1) {
//     // Hapus mahasiswa dari array
//     mahasiswaArray.splice(indexToRemove, 1);

//     // Hapus elemen dari DOM
//     let biodataDiv = document.getElementById(nim);
//     biodataDiv.remove();

//     alert("Data Mahasiswa NIM " + nim + " Telah Terhapus!");
//     updateBiodataDisplay();
//     // Perbarui DOM dengan elemen-elemen yang tersisa
//   } else {
//     alert("Mahasiswa dengan NIM tersebut tidak ditemukan.");
//   }

//   document.getElementById("NimHps").value = "";
// }

// function updateBiodataDisplay() {
//   // Bersihkan kontainer
//   let biodataContainer = document.getElementById("biodataContainer");
//   biodataContainer.innerHTML = "";

//   mahasiswaArray.forEach((mahasiswa) => {
//     let biodataDiv = createBiodata(mahasiswa);
//     biodataDiv.id = mahasiswa.nim;
//     biodataContainer.appendChild(biodataDiv);
//   });

//   //Mengosongkan TextField
//   document.getElementById("NimHps").value = "";
// }

// Sebuah fungsi untuk smooth bahavior
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.menu ul li a');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});


function f220602014() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("tampilkan").innerHTML = this.responseText;
  }
  xhttp.open("GET", "yusril.txt", true);
  xhttp.send();
}

function f220602006() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("tampilkan").innerHTML = this.responseText;
  }
  xhttp.open("GET", "izzam.txt", true);
  xhttp.send();
}

function f220602043() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("tampilkan").innerHTML = this.responseText;
  }
  xhttp.open("GET", "azriel.txt", true);
  xhttp.send();
}

function f220602046() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("tampilkan").innerHTML = this.responseText;
  }
  xhttp.open("GET", "pam.txt", true);
  xhttp.send();
}

function f220602002() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("tampilkan").innerHTML = this.responseText;
  }
  xhttp.open("GET", "el.txt", true);
  xhttp.send();
}

function f220602011() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("tampilkan").innerHTML = this.responseText;
  }
  xhttp.open("GET", "fafan.txt", true);
  xhttp.send();
}

function displayStory() {
  $.ajax({
    type: 'POST',
    url: 'story.php',
    data: {
      res: 1
    },
    success: function (data) {
      $('#tampilkan').html(data)
    }
  });
}