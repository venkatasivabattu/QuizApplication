-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2023 at 05:42 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quizdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `options`
--

CREATE TABLE `options` (
  `opid` int(11) NOT NULL,
  `option` text NOT NULL,
  `qsid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `options`
--

INSERT INTO `options` (`opid`, `option`, `qsid`) VALUES
(1, 'programming language', 16),
(2, 'scripting language', 16),
(3, 'dynamic language', 16),
(4, 'people language', 16),
(5, 'programming language', 17),
(6, 'scripting language', 17),
(7, 'dynamic language', 17),
(8, 'people language', 17),
(9, 'programming language', 18),
(10, 'scripting language', 18),
(11, 'dynamic language', 18),
(12, 'people language', 18),
(13, 'programming language', 19),
(14, 'scripting language', 19),
(15, 'dynamic language', 19),
(16, 'people language', 19),
(17, 'programming language', 20),
(18, 'scripting language', 20),
(19, 'dynamic language', 20),
(20, 'people language', 20),
(21, 'programming language', 21),
(22, 'scripting language', 21),
(23, 'dynamic language', 21),
(24, 'people language', 21),
(29, 'programming language', 22),
(30, 'scripting language', 22),
(31, 'dynamic language', 22),
(32, 'people language', 22),
(33, 'programming language', 23),
(34, 'scripting language', 23),
(35, 'dynamic language', 23),
(36, 'people language', 23),
(37, 'programming language', 24),
(38, 'scripting language', 24),
(39, 'dynamic language', 24),
(40, 'people language', 24),
(41, 'programming language', 25),
(42, 'scripting language', 25),
(43, 'dynamic language', 25),
(44, 'people language', 25),
(45, 'programming language', 26),
(46, 'scripting language', 26),
(47, 'dynamic language', 27),
(48, 'people language', 27),
(49, 'programming language', 28),
(50, 'scripting language', 28),
(51, 'dynamic language', 28),
(52, 'people language', 29),
(53, 'programming language', 29),
(54, 'Scripting language', 30),
(55, 'programming language', 30),
(56, 'hello world', 31),
(57, 'hello', 31),
(58, 'world', 31),
(59, 'hiii', 31),
(60, '8', 32),
(61, '1', 32);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `qsid` int(40) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `qid` int(11) NOT NULL,
  `sid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`qsid`, `question`, `answer`, `qid`, `sid`) VALUES
(16, 'what is output?\r\n\r\n#include<stdio.h>\r\nint main()\r\n{\r\n   printf(\"hello\");\r\n}', 'programming language', 1, 3),
(17, 'what is c', 'programming language', 1, 3),
(18, 'what is c', 'programming language', 1, 3),
(19, 'what is c', 'programming language', 1, 3),
(20, 'what is c', 'programming language', 1, 3),
(21, 'what is c', 'programming language', 1, 3),
(22, 'what is c', 'programming language', 1, 3),
(23, 'what is c', 'programming language', 1, 3),
(24, 'what is c', 'programming language', 1, 3),
(25, 'what is c', 'programming language', 1, 3),
(26, 'what is c', 'programming language', 1, 3),
(27, 'what is c', 'programming language', 1, 3),
(28, 'what is c', 'programming language', 1, 3),
(29, 'what is c', 'programming language', 1, 3),
(30, 'Python is ____?', 'programming language', 2, 4),
(31, 'what is output?\r\nprint(\'hello world\');', 'hello world', 2, 4),
(32, 'what is output?\r\nprint(1**8)', '1', 2, 4);

-- --------------------------------------------------------

--
-- Table structure for table `quizes`
--

CREATE TABLE `quizes` (
  `qid` int(10) NOT NULL,
  `qname` varchar(200) NOT NULL,
  `sid` int(10) NOT NULL,
  `questions` int(100) NOT NULL,
  `passlimit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quizes`
--

INSERT INTO `quizes` (`qid`, `qname`, `sid`, `questions`, `passlimit`) VALUES
(1, 'Basics', 3, 10, 5),
(2, 'Quiz-1', 4, 3, 2),
(3, 'Pointers', 3, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `quizhistory`
--

CREATE TABLE `quizhistory` (
  `qhid` int(100) NOT NULL,
  `qid` int(100) NOT NULL,
  `uname` varchar(100) NOT NULL,
  `date` datetime NOT NULL,
  `marks` int(100) NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quizhistory`
--

INSERT INTO `quizhistory` (`qhid`, `qid`, `uname`, `date`, `marks`, `status`) VALUES
(1, 2, 'a', '2023-06-06 13:45:09', 2, 'p'),
(2, 1, 'a', '2023-06-06 17:52:19', 3, 'f');

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `sid` int(11) NOT NULL,
  `sname` varchar(100) NOT NULL,
  `feild` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subjects`
--

INSERT INTO `subjects` (`sid`, `sname`, `feild`) VALUES
(1, 'Mathematics', 'm'),
(2, 'Physical Science', 'g'),
(3, 'C Programming', 'c'),
(4, 'Python', 'c'),
(5, 'java', 'c'),
(6, 'DBMS', 'c'),
(7, 'Operating System', 'c'),
(8, 'Social', 'g');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `name` varchar(1000) NOT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(30) NOT NULL,
  `education` varchar(100) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `uname` varchar(100) NOT NULL,
  `pw` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`name`, `dob`, `gender`, `education`, `address`, `mobile`, `email`, `uname`, `pw`) VALUES
('rama rao', '2013-05-05', 'male', 'pg', 'nvg gvg', '0', '', 'a', '1'),
('yeruva anjali', '2005-01-27', 'female', 'ssc', 'moddulapalli', '9010664549', 'venkatasivaanjali@gmail.com', 'b', 'b'),
('hstfatxsfdxts', '0005-05-05', '', '', '', '0', '', 'bhgh', '1'),
('lucky', '2005-05-09', 'female', 'pg', 'npeta', '8989909890', 'fbbhfhb@jkl.bnm', 'luckylucky', '12345678'),
('jtghtfbgv', '0065-05-06', 'female', 'pg', 'erfgrhfr', '0', '', 'mkmkmkmk', '12345678'),
('nagesh yeruva', '2001-01-01', 'male', 'ug', 'vadimadugu', '1234567890', 'yrf@hg.nj', 'nageshnagesh', 'nageshnage'),
('juh', '0004-04-04', 'male', 'pg', 'jn', '88', 'jjj', 'oooppplll', '09090909'),
('lbkmmkb', '0001-11-11', 'male', 'pg', '', '0', '', 'ujmkilmnkh', '12345678'),
('hstfatxsfdxts', '0005-05-05', '', '', '', '0', '', 'zxcvbnml4', 'zxcvbnml'),
('hstfatxsfdxts', '0005-05-05', '', '', '', '0', '', 'zxcvbnml42', 'zxcvbnml'),
('yqtesgftwqfdxtewq', '0022-02-22', '', '', '', '0', '', 'zxcvbnmlkj', 'zxcvbnml');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `options`
--
ALTER TABLE `options`
  ADD PRIMARY KEY (`opid`),
  ADD KEY `qsid` (`qsid`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`qsid`),
  ADD KEY `qid` (`qid`),
  ADD KEY `sid` (`sid`);

--
-- Indexes for table `quizes`
--
ALTER TABLE `quizes`
  ADD PRIMARY KEY (`qid`),
  ADD KEY `sid` (`sid`);

--
-- Indexes for table `quizhistory`
--
ALTER TABLE `quizhistory`
  ADD PRIMARY KEY (`qhid`),
  ADD KEY `qid` (`qid`),
  ADD KEY `uname` (`uname`);

--
-- Indexes for table `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uname`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `options`
--
ALTER TABLE `options`
  MODIFY `opid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `qsid` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `quizes`
--
ALTER TABLE `quizes`
  MODIFY `qid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `quizhistory`
--
ALTER TABLE `quizhistory`
  MODIFY `qhid` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subjects`
--
ALTER TABLE `subjects`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `options`
--
ALTER TABLE `options`
  ADD CONSTRAINT `options_ibfk_1` FOREIGN KEY (`qsid`) REFERENCES `questions` (`qsid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`qid`) REFERENCES `quizes` (`qid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `questions_ibfk_2` FOREIGN KEY (`sid`) REFERENCES `subjects` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quizes`
--
ALTER TABLE `quizes`
  ADD CONSTRAINT `quizes_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `subjects` (`sid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `quizhistory`
--
ALTER TABLE `quizhistory`
  ADD CONSTRAINT `quizhistory_ibfk_1` FOREIGN KEY (`qid`) REFERENCES `quizes` (`qid`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quizhistory_ibfk_2` FOREIGN KEY (`uname`) REFERENCES `users` (`uname`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
