-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 15, 2016 at 08:57 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `social`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `picture` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int(11) DEFAULT NULL,
  `firstName` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `registered` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `greeting` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `favoriteFruit` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `picture`, `age`, `firstName`, `lastName`, `gender`, `company`, `email`, `phone`, `address`, `about`, `registered`, `greeting`, `favoriteFruit`) VALUES
(126, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 32, 'Pamela', ' Keith', 'female', 'EMTRAK', 'pamelakeith@emtrak.com', '+1 (833) 480-3481', '700 Monitor Street, Savannah, Kansas, 644', 'Excepteur ea duis est dolore reprehenderit ullamco Lorem sint in. Nostrud Lorem velit pariatur sint quis ea ipsum dolore cillum duis laboris eiusmod. Tempor culpa laborum id ullamco magna. Enim esse aliquip id do minim minim sint proident ex. Non cupidatat', '2014-01-02 10:50:55', 'Hello, undefined! You have 1 unread messages.', 'banana'),
(127, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 36, 'Tessa', ' Burris', 'female', 'VENOFLEX', 'tessaburris@venoflex.com', '+1 (935) 452-3323', '592 Liberty Avenue, Nelson, Hawaii, 2877', 'Incididunt do enim adipisicing cillum quis consectetur ullamco reprehenderit cupidatat. Occaecat exercitation esse minim incididunt in velit nostrud. Eu anim veniam labore est labore officia Lorem excepteur velit enim dolor. Adipisicing sint nisi do irure ', '2014-10-27 16:54:17', 'Hello, undefined! You have 3 unread messages.', 'strawberry'),
(128, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 26, 'Camacho', ' Eaton', 'male', 'NETROPIC', 'camachoeaton@netropic.com', '+1 (884) 440-3738', '327 Little Street, Sutton, New York, 482', 'Consectetur qui sunt fugiat aute adipisicing quis cillum enim labore in nisi quis irure culpa. Laborum est et Lorem officia. Deserunt fugiat veniam ad mollit eiusmod et velit enim.', '2014-03-11 05:58:39', 'Hello, undefined! You have 2 unread messages.', 'apple'),
(129, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 23, 'Hardy', ' Heath', 'male', 'BLUEGRAIN', 'hardyheath@bluegrain.com', '+1 (969) 570-3665', '197 Lorraine Street, Bowden, Federated States Of Micronesia, 2724', 'Est do proident consectetur magna ea deserunt esse. Enim laboris ipsum consequat magna deserunt laboris culpa nisi enim ex enim. In exercitation nulla do Lorem ut tempor mollit ea irure adipisicing enim ea aliqua. Commodo nisi reprehenderit sunt dolor null', '2016-08-21 14:13:01', 'Hello, undefined! You have 3 unread messages.', 'apple'),
(130, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 24, 'Donna', ' Harris', 'female', 'ERSUM', 'donnaharris@ersum.com', '+1 (908) 476-3411', '130 Dahill Road, Kiskimere, North Dakota, 4622', 'Quis cillum nulla id ut dolore ullamco sint elit. Exercitation qui qui reprehenderit et sint sit. Do ullamco aute duis Lorem qui voluptate exercitation culpa magna fugiat anim elit. Duis do commodo deserunt anim dolore occaecat ullamco incididunt ad do. In', '2016-02-14 07:44:30', 'Hello, undefined! You have 10 unread messages.', 'strawberry'),
(131, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 32, 'Obrien', ' Byrd', 'male', 'SNORUS', 'obrienbyrd@snorus.com', '+1 (835) 572-2815', '113 Woodruff Avenue, Kraemer, Palau, 7970', 'Nostrud pariatur eu ad irure nulla id do nulla do adipisicing elit qui. Incididunt do quis ut officia cillum cillum exercitation in proident sunt amet tempor Lorem reprehenderit. Velit ut id laborum amet enim minim ullamco anim sit ipsum do laboris culpa e', '2016-01-08 07:44:02', 'Hello, undefined! You have 6 unread messages.', 'apple'),
(132, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 36, 'Laurel', ' Young', 'female', 'TALKOLA', 'laurelyoung@talkola.com', '+1 (969) 486-2028', '378 Emerson Place, Bourg, Georgia, 195', 'Id nisi voluptate sunt sit. Sint veniam adipisicing velit irure sunt commodo ea mollit dolore id amet minim dolor incididunt. Nulla dolor ex labore voluptate commodo ex et fugiat ut est. Veniam non ex velit officia excepteur. Dolore laborum dolor Lorem ex ', '2014-05-12 11:53:12', 'Hello, undefined! You have 9 unread messages.', 'strawberry'),
(133, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 36, 'Cox', ' Reeves', 'male', 'WATERBABY', 'coxreeves@waterbaby.com', '+1 (958) 516-3348', '155 Hendrickson Place, Hobucken, Virginia, 9410', 'Esse consectetur magna fugiat laboris est occaecat voluptate culpa minim tempor. Labore laboris voluptate fugiat fugiat labore. Esse labore eu aute laborum cupidatat incididunt.', '2014-05-07 14:48:42', 'Hello, undefined! You have 9 unread messages.', 'strawberry'),
(134, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 29, 'Shepard', ' West', 'male', 'ZILLACTIC', 'shepardwest@zillactic.com', '+1 (982) 530-3775', '500 Mill Lane, Mahtowa, Michigan, 1052', 'Aute non commodo dolor sunt. Ullamco Lorem esse consectetur labore. Velit aute qui anim Lorem id eu cillum Lorem. Nisi ipsum proident laboris nisi deserunt.', '2016-05-29 07:54:09', 'Hello, undefined! You have 6 unread messages.', 'apple'),
(135, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 21, 'Tanner', ' Cook', 'male', 'MANUFACT', 'tannercook@manufact.com', '+1 (845) 445-3969', '250 Colonial Road, Boomer, Washington, 9962', 'Tempor adipisicing aliqua consectetur ut ea ea. Quis nostrud excepteur qui consequat ullamco excepteur reprehenderit consequat anim. Sunt ipsum nulla labore eu dolore pariatur. Quis enim tempor sit excepteur ut sit amet mollit irure cillum. Lorem quis Lore', '2015-04-02 07:42:05', 'Hello, undefined! You have 8 unread messages.', 'strawberry'),
(136, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 29, 'Teri', ' Luna', 'female', 'EVEREST', 'teriluna@everest.com', '+1 (853) 503-2873', '449 Hubbard Place, Glidden, Northern Mariana Islands, 4124', 'Dolore culpa quis anim laborum adipisicing anim qui Lorem fugiat consequat est cillum. Dolore Lorem cupidatat exercitation dolore fugiat deserunt officia. In proident quis reprehenderit voluptate ex. Consequat culpa mollit fugiat id dolore aliquip velit co', '2015-10-05 13:37:14', 'Hello, undefined! You have 9 unread messages.', 'apple'),
(137, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 33, 'Maynard', ' Rosario', 'male', 'QUADEEBO', 'maynardrosario@quadeebo.com', '+1 (878) 484-2629', '731 Colby Court, Santel, South Carolina, 2153', 'Proident ipsum duis minim quis ea nulla ipsum quis dolore commodo ipsum dolore mollit ullamco. Fugiat sunt labore ullamco aute sunt laboris culpa Lorem ipsum deserunt id qui reprehenderit enim. Incididunt elit nostrud occaecat excepteur ut fugiat nisi cill', '2014-05-09 07:41:16', 'Hello, undefined! You have 10 unread messages.', 'strawberry'),
(138, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 38, 'Ellis', ' Velazquez', 'male', 'MYOPIUM', 'ellisvelazquez@myopium.com', '+1 (976) 551-2355', '942 Kane Street, Deercroft, Wyoming, 7912', 'Ut deserunt id irure eu. Quis amet ad dolore nulla dolore aliqua exercitation incididunt incididunt commodo. Et ut voluptate mollit esse qui. Ea esse labore eiusmod ad.', '2015-10-27 09:06:04', 'Hello, undefined! You have 5 unread messages.', 'apple'),
(139, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 36, 'Tia', ' Nguyen', 'female', 'CHILLIUM', 'tianguyen@chillium.com', '+1 (956) 599-3499', '870 Gold Street, Calverton, Vermont, 3173', 'In pariatur Lorem esse mollit occaecat. Pariatur qui Lorem voluptate consectetur. Et deserunt aute laborum minim veniam. Non sit adipisicing consectetur ea minim. Sint amet tempor aute ex sint mollit deserunt ea ea anim non esse.', '2014-08-02 07:53:41', 'Hello, undefined! You have 2 unread messages.', 'strawberry'),
(140, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 40, 'Brigitte', ' Cantrell', 'female', 'RECRISYS', 'brigittecantrell@recrisys.com', '+1 (810) 579-3673', '499 Irwin Street, Sehili, Missouri, 8408', 'Laboris occaecat proident aliquip tempor nisi excepteur dolore. Proident aliquip minim tempor consectetur consequat. Anim non sit esse dolore in aliqua veniam.', '2014-09-17 05:48:47', 'Hello, undefined! You have 2 unread messages.', 'apple'),
(141, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 29, 'Betsy', ' Vance', 'female', 'COMVEYOR', 'betsyvance@comveyor.com', '+1 (916) 405-2493', '886 Virginia Place, Ezel, Marshall Islands, 1362', 'Velit veniam veniam esse laboris adipisicing. Cupidatat fugiat eu nulla ad non ullamco dolore aute cillum. Occaecat nulla ipsum enim in esse. Nostrud consectetur duis labore nostrud velit sint sint non dolore quis sint enim veniam. Labore exercitation veni', '2015-08-12 09:56:32', 'Hello, undefined! You have 6 unread messages.', 'strawberry'),
(142, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 40, 'Sosa', ' Sherman', 'male', 'ARTIQ', 'sosasherman@artiq.com', '+1 (851) 416-3890', '706 Sapphire Street, Cannondale, Arkansas, 4849', 'Voluptate laborum excepteur ex qui sunt voluptate labore cillum consequat esse incididunt. Ut commodo sunt fugiat nulla eiusmod est Lorem nulla consequat Lorem deserunt veniam nulla. Eiusmod ea aliqua dolor id. Mollit sit amet velit est ipsum in id Lorem e', '2015-05-07 12:40:39', 'Hello, undefined! You have 10 unread messages.', 'banana'),
(143, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 31, 'Brock', ' Maddox', 'male', 'STELAECOR', 'brockmaddox@stelaecor.com', '+1 (979) 558-3315', '902 Dare Court, Shepardsville, Florida, 4943', 'Ullamco duis velit in aute culpa officia tempor proident consectetur ut anim incididunt aute. Ipsum cillum sint aliquip officia eu ut duis deserunt nisi qui dolor sint. Fugiat consectetur sit amet duis adipisicing enim sit eu pariatur aliquip irure eiusmod', '2015-10-24 13:01:44', 'Hello, undefined! You have 5 unread messages.', 'apple'),
(144, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 24, 'Rodriguez', ' Ayala', 'male', 'COMVEYER', 'rodriguezayala@comveyer.com', '+1 (963) 442-2715', '600 Linwood Street, Imperial, Oregon, 3054', 'Commodo adipisicing Lorem quis enim deserunt exercitation esse voluptate ea et ea ex. Esse reprehenderit nostrud aliquip cillum Lorem. Excepteur amet amet commodo laboris dolor cupidatat velit incididunt consectetur Lorem eiusmod commodo et dolore. Et magn', '2014-03-25 12:23:49', 'Hello, undefined! You have 7 unread messages.', 'apple'),
(145, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 25, 'Talley', ' Sanders', 'male', 'GEEKOLA', 'talleysanders@geekola.com', '+1 (817) 431-3094', '783 Preston Court, Watrous, Guam, 6649', 'Laborum eu dolore ad dolor eu reprehenderit. Quis cillum mollit exercitation enim tempor proident culpa cillum adipisicing veniam cupidatat occaecat esse et. Labore qui sint adipisicing aute fugiat ea duis nostrud sint duis. Consequat culpa proident elit o', '2015-01-26 09:30:01', 'Hello, undefined! You have 6 unread messages.', 'strawberry'),
(146, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 34, 'Ross', ' Jones', 'male', 'TEMORAK', 'rossjones@temorak.com', '+1 (878) 470-2250', '808 Vandam Street, Wheaton, Texas, 6499', 'Esse sunt consectetur ex ex culpa anim incididunt sunt sunt dolore incididunt ullamco nostrud est. Incididunt enim quis aute irure consequat nulla irure nisi sit dolor sint officia amet. Labore ea labore ullamco enim laboris est voluptate. Sint minim aute ', '2015-10-14 05:38:01', 'Hello, undefined! You have 3 unread messages.', 'apple'),
(147, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 26, 'Melisa', ' Watson', 'female', 'CYCLONICA', 'melisawatson@cyclonica.com', '+1 (985) 453-3849', '154 Boardwalk , Leland, Ohio, 9436', 'Reprehenderit mollit incididunt anim ut reprehenderit dolor aliquip labore. Minim eu deserunt reprehenderit sit. Occaecat non duis amet ad minim incididunt nisi incididunt quis ad. Anim mollit cillum aute anim ea sint. Ullamco ut deserunt voluptate cupidat', '2014-07-17 11:52:47', 'Hello, undefined! You have 7 unread messages.', 'apple'),
(148, 'http://web1.crafthub.me/assets/placeholder-50x50.png', 24, 'Angela', ' Sharp', 'female', 'COMTRAIL', 'angelasharp@comtrail.com', '+1 (821) 552-3898', '446 Putnam Avenue, Condon, Delaware, 1135', 'Ex irure nulla ipsum ea amet velit voluptate. Eu consectetur officia amet est esse irure in magna ex consectetur sint est cupidatat velit. Aute non aliqua anim ea elit deserunt.', '2015-02-10 15:06:01', 'Hello, undefined! You have 9 unread messages.', 'strawberry');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=149;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
