<?php

include "database/database.php";

if (isset($_POST['tambahMahasiswa'])) {
    // Ambil informasi file yang diunggah
    $file_name = $_FILES['foto']['name'];
    $file_tmp = $_FILES['foto']['tmp_name'];
    $target_dir = "file/";
    $target_file = $target_dir . basename($file_name);

    // Pindahkan file yang diunggah ke direktori tujuan
    if (move_uploaded_file($file_tmp, $target_file)) {
        echo "File berhasil diupload.";

        // Ambil informasi lainnya dari formulir
        $nama = $_POST['nama'];
        $nim = $_POST['nim'];
        $ttl = $_POST['ttl'];
        $alamat = $_POST['alamat'];
        $pekerjaan = $_POST['pekerjaan'];

        // Simpan informasi file dan data lainnya ke database
        $sql = "INSERT INTO mahasiswa (foto, nama, nim, ttl, alamat, pekerjaan) VALUES ('$target_file', '$nama', '$nim', '$ttl', '$alamat', '$pekerjaan')";

        if ($db->query($sql)) {
            echo "Data berhasil disimpan ke database.";
        } else {
            echo "Kesalahan saat menyimpan data: " . $db->error;
        }

        // Alihkan kembali ke index.php
        header("Location: index.php");
        exit();
    } else {
        echo "Maaf, terjadi kesalahan saat mengunggah file Anda.";
    }
}
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
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['editMahasiswa'])) {
        $nim = $_POST['nim'];
        $nama = $_POST['nama'];
        $ttl = $_POST['ttl'];
        $alamat = $_POST['alamat'];
        $pekerjaan = $_POST['pekerjaan'];

        // Amankan input
        $nim = $db->real_escape_string($nim);
        $nama = $db->real_escape_string($nama);
        $ttl = $db->real_escape_string($ttl);
        $alamat = $db->real_escape_string($alamat);
        $pekerjaan = $db->real_escape_string($pekerjaan);

        // Cek jika ada file gambar baru yang diunggah
        $updateFoto = '';
        if (isset($_FILES['foto']) && $_FILES['foto']['error'] == UPLOAD_ERR_OK) {
            $target_dir = "file/";
            $target_file = $target_dir . basename($_FILES["foto"]["name"]);
            $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
            $valid_extensions = array("jpg", "jpeg", "png", "gif");

            // Validasi file gambar
            if (in_array($imageFileType, $valid_extensions)) {
                if (move_uploaded_file($_FILES["foto"]["tmp_name"], $target_file)) {
                    // Gambar berhasil diunggah
                    $foto = $db->real_escape_string($target_file);
                    $updateFoto = ", foto='$foto'";
                } else {
                    echo "Error mengunggah file.";
                }
            } else {
                echo "Format file tidak valid.";
            }
        }

        // Query untuk update data mahasiswa
        $sql = "UPDATE mahasiswa SET nama='$nama', ttl='$ttl', alamat='$alamat', pekerjaan='$pekerjaan' $updateFoto WHERE nim='$nim'";

        if ($db->query($sql) === TRUE) {
            echo "Data mahasiswa berhasil diupdate.";
        } else {
            echo "Error mengupdate data: " . $db->error;
        }
    }
    header("Location: index.php");
    exit();
}
