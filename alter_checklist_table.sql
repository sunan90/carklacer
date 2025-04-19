-- Alter checklist table to match existing structure and add missing columns

ALTER TABLE checklist 
  CHANGE COLUMN tugas item VARCHAR(255),
  ADD COLUMN bulan VARCHAR(20),
  ADD COLUMN minggu INT,
  CHANGE COLUMN status status TINYINT(1) DEFAULT 0,
  ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- Add tanggal column if not exists (already added)
-- ALTER TABLE checklist ADD COLUMN tanggal DATE;
