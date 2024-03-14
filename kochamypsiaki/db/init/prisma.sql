-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: prisma
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `prisma`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `prisma` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `prisma`;

--
-- Table structure for table `dar`
--

DROP TABLE IF EXISTS `dar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dar` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dataDodania` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `typ` enum('KARMA_MOKRA','KARMA_SUCHA','SMACZKI','KOC','KOLDRA','PODUSZKA','POSCIEL','RECZNIK','POSLANIE','ZABAWKA','MISKA','SMYCZ_ITP','MEDYKAMENTY','INNE') COLLATE utf8mb4_unicode_ci NOT NULL,
  `innyTyp` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `waga` double DEFAULT NULL,
  `sztuki` int DEFAULT NULL,
  `zbiorkaId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Dar_zbiorkaId_fkey` (`zbiorkaId`),
  CONSTRAINT `Dar_zbiorkaId_fkey` FOREIGN KEY (`zbiorkaId`) REFERENCES `zbiorka` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dar`
--

LOCK TABLES `dar` WRITE;
/*!40000 ALTER TABLE `dar` DISABLE KEYS */;
INSERT INTO `dar` VALUES ('092d6522-ad03-42b3-a0f7-5176c091dce5','2024-04-11 09:00:28.253','ZABAWKA',NULL,NULL,84,'57166cc5-4063-45dd-aec5-279190910db3'),('10b95e5c-662c-4b45-ab0d-3f40677b3585','2024-04-11 09:10:55.061','INNE','MATERAC',NULL,1,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('17f9afc2-30df-48c3-89e0-cd538985763a','2024-04-11 09:05:25.840','KARMA_MOKRA',NULL,126,NULL,'d559487a-e6c6-4c85-b99b-cfbb26f0976f'),('1de6786c-c508-4687-8b8e-c119c8c0d698','2024-04-11 09:10:55.061','RECZNIK',NULL,NULL,209,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('258ee950-19a4-4c18-8835-9f10bab5671e','2024-04-11 09:10:55.061','INNE','PASZTET',NULL,35,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('2a24b6a0-3506-4638-9f80-50ad69884f0b','2024-04-11 09:10:55.061','INNE','KAWA_I_HERBATA',NULL,2,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('33379a79-5fcd-410e-8137-dda0e8ed49a8','2024-04-11 08:56:38.981','INNE','SIATKA_ZACIENIAJACA',NULL,1,'57166cc5-4063-45dd-aec5-279190910db3'),('39e0fb7f-f398-4151-b545-b7ba99ace04c','2024-04-11 09:00:28.253','INNE','GRZEBIEN',NULL,6,'57166cc5-4063-45dd-aec5-279190910db3'),('3b1d27a0-510a-4bd4-9a0d-bf21ccb4bca8','2024-04-11 09:00:28.253','PODUSZKA',NULL,NULL,6,'57166cc5-4063-45dd-aec5-279190910db3'),('40fc6b4e-3fe0-483d-abbc-50873f118ccf','2024-04-11 09:00:28.253','SMYCZ_ITP',NULL,NULL,32,'57166cc5-4063-45dd-aec5-279190910db3'),('47bd63fc-4440-4650-9a10-1aecb8bf918b','2024-04-11 09:00:28.253','INNE','MATA',NULL,1,'57166cc5-4063-45dd-aec5-279190910db3'),('4c6751bf-7939-4801-8aa3-8a0c87845d5e','2024-04-11 08:56:38.981','SMACZKI',NULL,NULL,40,'57166cc5-4063-45dd-aec5-279190910db3'),('4ecf9982-586b-4754-b8eb-9de3fa1867ae','2024-04-11 09:10:55.061','KOLDRA',NULL,NULL,4,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('4fd3070f-0827-4a88-afbd-45df71835cc7','2024-04-11 09:05:25.840','KARMA_SUCHA',NULL,163,NULL,'d559487a-e6c6-4c85-b99b-cfbb26f0976f'),('5121bfdb-9578-4bf3-b7f9-26b32ffa287e','2024-04-11 08:56:38.981','KOC',NULL,NULL,31,'57166cc5-4063-45dd-aec5-279190910db3'),('5ae0f7ee-1cff-4988-aaf7-166002c23fce','2024-04-11 09:00:28.253','INNE','UBRANIE',NULL,3,'57166cc5-4063-45dd-aec5-279190910db3'),('5bee70ba-5d3d-4d31-8d78-48a9c0a0d279','2024-04-11 09:00:28.253','RECZNIK',NULL,NULL,130,'57166cc5-4063-45dd-aec5-279190910db3'),('5f1bd566-6c51-4924-bf09-cca5a10111d3','2024-04-11 09:10:55.061','KARMA_SUCHA',NULL,300,NULL,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('607092ba-b9f5-4481-96b8-bd4858e09aa8','2024-04-11 09:00:28.253','MEDYKAMENTY',NULL,NULL,12,'57166cc5-4063-45dd-aec5-279190910db3'),('6b9def39-e20e-452c-98da-42ee8ec807a7','2024-04-11 09:10:55.061','KOC',NULL,NULL,119,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('732e224f-23bd-42bf-a64c-8018b52d16d5','2024-04-11 09:10:55.061','POSCIEL',NULL,NULL,106,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('7ad41b76-a2e9-44e9-9083-a8c5038b4ed6','2024-04-11 09:10:55.061','KARMA_MOKRA',NULL,200,NULL,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('7e943e16-42a8-4c7b-963a-ba336da3f4ee','2024-04-11 09:10:55.061','MEDYKAMENTY',NULL,NULL,10,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('7e9fb14f-0eb1-42f7-ba46-b53de61a1013','2024-04-11 08:56:38.981','INNE','KURTYNY_WODNE',NULL,3,'57166cc5-4063-45dd-aec5-279190910db3'),('82f60f4f-d867-4437-ac9b-d05b196208c4','2024-04-11 08:56:38.981','KARMA_SUCHA',NULL,80,NULL,'57166cc5-4063-45dd-aec5-279190910db3'),('8bf43c3c-1788-4546-8871-62b25a5aece6','2024-04-11 09:05:25.840','KOC',NULL,NULL,56,'d559487a-e6c6-4c85-b99b-cfbb26f0976f'),('91c437e9-92a5-4d79-b07d-306d2a980b44','2024-04-11 09:00:28.253','KOLDRA',NULL,NULL,6,'57166cc5-4063-45dd-aec5-279190910db3'),('961661b8-2e1f-4b15-9547-4bc3732c56dc','2024-04-11 09:10:55.061','SMACZKI',NULL,NULL,4,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('b3a43390-8070-4809-9744-30be502a7bba','2024-04-11 09:05:25.840','RECZNIK',NULL,NULL,111,NULL),('bbf423dc-d320-44d2-8246-5a4a93847f4d','2024-04-11 09:10:55.061','ZABAWKA',NULL,NULL,20,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('bf8f4c51-995b-47f2-a69c-2d7b253c1e43','2024-04-11 08:56:38.981','KARMA_MOKRA',NULL,80,NULL,'57166cc5-4063-45dd-aec5-279190910db3'),('d129ebaa-b47e-4e09-bde2-61145fd5bdf0','2024-04-11 09:00:28.253','POSCIEL',NULL,NULL,117,'57166cc5-4063-45dd-aec5-279190910db3'),('d5be75ac-7f21-4410-800c-47249c1bda70','2024-04-11 09:00:28.253','MISKA',NULL,NULL,34,'57166cc5-4063-45dd-aec5-279190910db3'),('e0a932c1-b21b-42e1-b479-2e569b1fddad','2024-04-11 09:10:55.061','MISKA',NULL,NULL,58,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('e3671426-ebab-4f3c-9b30-2de951a4f56c','2024-04-11 08:56:38.981','POSLANIE',NULL,NULL,17,'57166cc5-4063-45dd-aec5-279190910db3'),('e3e4cc33-dff1-47c9-a8eb-c9914c3ac04c','2024-04-11 09:10:55.061','INNE','KENNEL',NULL,1,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('e9bf7e9b-3793-41c7-b88f-56fa7303d011','2024-04-11 09:10:55.061','POSLANIE',NULL,NULL,32,'40125f03-060f-4dcd-9b0c-a0955bed2344'),('f3e28eb1-1171-4953-930d-76717164ec02','2024-04-11 09:10:55.061','KARMA_MOKRA',NULL,NULL,NULL,'40125f03-060f-4dcd-9b0c-a0955bed2344');
/*!40000 ALTER TABLE `dar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zbiorka`
--

DROP TABLE IF EXISTS `zbiorka`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zbiorka` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `aktywna` tinyint(1) NOT NULL DEFAULT '0',
  `tytulKrotki` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tytulDlugi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `href` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `opis` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dataDodania` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zbiorka`
--

LOCK TABLES `zbiorka` WRITE;
/*!40000 ALTER TABLE `zbiorka` DISABLE KEYS */;
INSERT INTO `zbiorka` VALUES ('40125f03-060f-4dcd-9b0c-a0955bed2344',0,'Październik 2023','Październik 2023','pazdziernik-2023','Jesienna zbiórka dla Sompolna. Tym razem udało nam się zdobyć dla schroniska również małą lodówkę oraz kuchenkę gazową, której brakowało w placówce','2023-10-01 08:36:48.529'),('57166cc5-4063-45dd-aec5-279190910db3',0,'Maj 2022','Maj 2022','maj-2022','Pierwsza zbiórka zaplanowana i zorganizowana na rzecz schroniska w Sompolnie, z którego pochodzi nasz pierwszy psiak - Luna','2022-05-01 08:38:19.309'),('bad4b035-3a6e-4ba2-a499-5a94bc961138',0,'Kwiecień 2022','Kwiecień 2022','kwiecien-2022','Spontaniczna, dwudniowa zbiórka, zorganizowana przy okazji zaplanowanej wizyty adopcyjnej w Stowarzyszeniu Wioskowomi. Do naszej rodziny dołączyła malutka Buffy','2022-04-01 08:38:50.669'),('d559487a-e6c6-4c85-b99b-cfbb26f0976f',0,'Październik 2022','Październik 2022','pazdziernik-2022','Druga zbiórka zorganizowana dla podopiecznych schroniska w Sompolnie. Tym razem naszym głównym celem było zabezpieczenie psiaków przed nadchodzącą zimą','2022-10-01 08:37:45.671'),('fd29e43b-ca3c-43d9-bd7d-009cd3328666',0,'Grudzień 2023','Grudzień 2023','grudzien-2023','Za pośrednictwem serwisu Pomagam.pl zebraliśmy kwotę 2050zł, którą przekazaliśmy jako prezent Gwiazdkowy dla psiaków','2023-12-01 08:36:11.072');
/*!40000 ALTER TABLE `zbiorka` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-22 11:08:13
