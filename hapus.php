<!-- <?php
// Include file database.php yang berisi koneksi ke database
include "database/database.php";

// // Periksa apakah tombol hapusMahasiswa ditekan
// var_dump($_POST);
if (isset($_POST['hapusMahasiswa'])) {
    // Ambil NIM yang akan dihapus dari input nimHps
    $nimHapus = $_POST['NimHps'];

    // Query untuk menghapus mahasiswa dari database berdasarkan NIM
    $sql = "DELETE FROM mahasiswa WHERE nim = '$nimHapus'";

    // Eksekusi query penghapusan
    if ($db->query($sql)) {
        echo "Mahasiswa dengan NIM $nimHapus berhasil dihapus.";
    } else {
        echo "Gagal menghapus mahasiswa: " . $db->error;
    }

    // Redirect kembali ke halaman utama (index.php) setelah penghapusan
    header("Location: index.php");
    exit();
} -->
