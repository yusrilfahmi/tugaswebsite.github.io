<?php

include "database/database.php";
include "tampilkanBiodata.php";
include "upload.php";

if (isset($_POST['editMahasiswa'])) {
  echo "sip";
}
?>

<!doctype html>
<html>

<head>
  <title>Tugas Web 1</title>
  <link rel="stylesheet" href="css/main.css">

</head>

<body>
  <!-- Ini Navigasi Home -->
  <?php include "layout/header.html" ?>

  <!-- Ini Banner Home -->
  <?php include "layout/banner.html" ?>

  <!-- Custom Biodata -->
  <?php include "layout/formBiodata.html" ?>

  <!-- Biodata -->
  <?php include "layout/biodata.html" ?>

  <!-- Pengalaman -->
  <?php include "layout/pengalaman.html" ?>

  <!-- Hobby -->
  <?php include "layout/hobby.html" ?>

  <!-- Kontak -->
  <?php include "layout/kontak.html" ?>

  <!-- Footer -->
  <?php include "layout/footer.html" ?>

  <script src="Fungsi.js"></script>
</body>

</html>