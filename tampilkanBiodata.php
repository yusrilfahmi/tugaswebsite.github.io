<?php

include "database/database.php";

$sql = "SELECT * FROM mahasiswa";

$result = $db->query($sql);

if ($result->num_rows > 0) {
    while ($data = $result->fetch_assoc()) {
        $mahasiswaArray[] = array(
            "foto" => $data["foto"],
            "nama" => $data["nama"],
            "nim" => $data["nim"],
            "ttl" => $data["ttl"],
            "alamat" => $data["alamat"],
            "pekerjaan" => $data["pekerjaan"]
        );
    }
} else {
    echo "tidak ada";
}

$jsonMahasiswa = json_encode($mahasiswaArray);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css\main.css">


</head>

<body>
    <script>
        let mahasiswaArray = <?php echo $jsonMahasiswa; ?>;
        console.log(mahasiswaArray);
    </script>

</body>

</html>