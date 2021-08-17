Visualizar	￼ Estrutura	￼ Procurar	￼ Inserir	￼ Limpar	￼ Eliminar	0	InnoDB	utf8mb4_general_ci	48.0 KB	-
3 tabela(s)	Soma-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 15/08/2021 às 01:53
-- Versão do servidor: 10.4.20-MariaDB
-- Versão do PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `locadora`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `CUSTOMER`
--

CREATE TABLE `CUSTOMER` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `CPF` varchar(11) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `PHONE` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `GAME`
--

CREATE TABLE `GAME` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `GENRE` varchar(255) NOT NULL,
  `PLATFORM` enum('PS','XBOX','PC') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura para tabela `LEASE`
--

CREATE TABLE `LEASE` (
  `ID` int(11) NOT NULL,
  `ID_CUSTOMER` int(11) NOT NULL,
  `ID_GAME` int(11) NOT NULL,
  `LEASE_DT` varchar(10) NOT NULL,
  `RETURN_DT` varchar(10) NOT NULL,
  `LEASE_VALUE` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `CUSTOMER`
--
ALTER TABLE `CUSTOMER`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `GAME`
--
ALTER TABLE `GAME`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `LEASE`
--
ALTER TABLE `LEASE`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_CUSTOMER` (`ID_CUSTOMER`),
  ADD KEY `ID_GAME` (`ID_GAME`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `CUSTOMER`
--
ALTER TABLE `CUSTOMER`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `GAME`
--
ALTER TABLE `GAME`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `LEASE`
--
ALTER TABLE `LEASE`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `LEASE`
--
ALTER TABLE `LEASE`
  ADD CONSTRAINT `LEASE_ibfk_1` FOREIGN KEY (`ID_CUSTOMER`) REFERENCES `CUSTOMER` (`ID`),
  ADD CONSTRAINT `LEASE_ibfk_2` FOREIGN KEY (`ID_GAME`) REFERENCES `GAME` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
