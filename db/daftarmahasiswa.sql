-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2024 at 04:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `daftarmahasiswa`
--

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id` int(11) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `nim` varchar(255) NOT NULL,
  `ttl` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `pekerjaan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`id`, `foto`, `nama`, `nim`, `ttl`, `alamat`, `pekerjaan`) VALUES
(1, 'file/Mas Yusril.jpeg', 'Yusril Fahmi', '220602014', '23 November 2001', 'Cerme Gresik', 'Freport Papua'),
(32, 'file/Azriel.jpg', 'A. Azriel Friyansyah', '220602043', '25 Maret 2002', 'PPS Gresik', 'Petrokimia Gresik'),
(33, 'file/Izzam.jpeg', 'Qomaruzzaman', '220602006', '14 Juni 2004', 'Akim Kayat Gresik', 'BUMN Pertamina'),
(34, 'file/Mas El.jpeg', 'Zaky Elmondo R.', '220602002', '12 Mei 2000', 'Suci Gresik', 'Karyawan BUMN BRI'),
(35, 'file/Fafan.jpeg', 'M. Ikfani Difangga', '220602011', '1 Agustus 2004', 'Tegulungan Gresik', 'Karyawan BUMN PLN'),
(36, 'file/Dimas.jpeg', 'Dimas Achyar Trizyaputra', '220602046', '3 Maret 2004', 'Lamongan', 'Karyawan BUMN Persero');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nim` (`nim`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
