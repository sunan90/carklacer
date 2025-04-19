-- Buat database checklist_pegawai kalau belum ada
CREATE DATABASE IF NOT EXISTS checklist_pegawai;

-- Pakai database checklist_pegawai
USE checklist_pegawai;

-- Buat tabel pegawai_checklist
CREATE TABLE IF NOT EXISTS pegawai_checklist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    checklist VARCHAR(255) NOT NULL,
    status ENUM('done', 'not_done') NOT NULL DEFAULT 'not_done'
);
