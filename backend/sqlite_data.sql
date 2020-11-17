PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE compressor(
  "TIMESTAMP" TEXT,
  "MOTOR CURRENT" INTEGER,
  "BRG STG1 TEMP A" INTEGER,
  "BRG STG2 TEMP A" INTEGER,
  "BRG STG3 TEMP A" INTEGER,
  "BRG STG4 TEMP A" INTEGER,
  "BG AXIAL DISP A" INTEGER,
  "BG AXIAL DISP B" INTEGER,
  "STG1 VIB X" INTEGER,
  "STG1 VIB Y" INTEGER,
  "STG2 VIB X" INTEGER,
  "STG2 VIB Y" INTEGER,
  "STG3 VIB X" INTEGER,
  "STG3 VIB Y" INTEGER,
  "STG4 VIB X" INTEGER,
  "STG4 VIB Y" INTEGER,
  "OIL DISCH TEMP" INTEGER
);
INSERT INTO compressor VALUES('2018-01-01 00:00:00',902.33374023437499999,83.399986267089801115,91.399978637695298289,79.199981689453096576,75.599983215332002828,-0.046250011771917301506,-0.12000001221895199854,4.625,6.75,7.875,8.5,7.1192708015441903413,5.0114583969116202055,7.375,7.3692708015441903413,44.399990081787102267);
INSERT INTO compressor VALUES('2018-01-01 00:10:00',902.33374023437499999,83.399986267089801115,91.199981689453082367,78.999984741210909078,75.399986267089801118,-0.046250011771917301506,-0.12000001221895199854,4.625,6.75,7.875,8.6000003814697301152,7.0682291984558096586,5.125,7.3289475440979003906,7.3371529579162597656,44.399990081787102267);
INSERT INTO compressor VALUES('2018-01-01 00:20:00',902.33374023437499999,83.59998321533200283,91.199981689453082367,79.199981689453096576,75.399986267089801118,-0.046250011771917301506,-0.12000001221895199854,4.625,6.75,7.875,8.5,7.0227084159851100864,5.0227084159851100864,7.1833333969116202055,7.3466143608093297245,44.599990844726598027);
INSERT INTO compressor VALUES('2018-01-01 00:30:00',902.33374023437499999,83.59998321533200283,91.399978637695298289,79.199981689453096576,75.599983215332002828,-0.046250011771917301506,-0.12000001221895199854,4.625,6.75,7.875,8.5,7.125,5.125,7.2791666984558096586,7.3295140266418492558,44.599990844726598027);
COMMIT;