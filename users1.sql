-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Авг 12 2023 г., 18:45
-- Версия сервера: 5.7.21-20-beget-5.7.21-20-1-log
-- Версия PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `sarapu4h_backend`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--
-- Создание: Авг 12 2023 г., 11:25
-- Последнее обновление: Авг 12 2023 г., 11:25
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'temporary_value',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `phone_number`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(21, 'moderator', '$2y$10$1fAIRrz2qzPU1j10I1.khO.gVKkNPSsNLixKxsYfmZAsQI3OH1I3.', 'admin@gmail.com', '89001112233', '2023-07-27 06:13:37', 'TMYJogG5Gy', '2023-07-16 05:43:45', '2023-07-16 05:43:45'),
(22, 'vova', '$2y$10$2RRI/tFRDbMQFWaDbniC9e0y0vPM7LaWuFQITRkANAMDCb.xmg4YW', 'vova@mail.ru', '89002223344', '2023-07-27 06:23:37', 'TMYRogG5JK', '2023-07-16 05:46:10', '2023-07-16 05:46:10'),
(23, 'Prof. Conner Stroman IV', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'phoebe94@example.org', '89003334055', '2023-07-27 06:23:47', 'TMYJogG5JK', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(24, 'Lew Barrows', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'zgorczany@example.net', '89004445566', '2023-07-27 06:23:47', 'wC6qHgp163', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(25, 'Douglas Leuschke', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'murray.freida@example.com', '89005556677', '2023-07-27 06:23:47', 'gRPc6NmPAQ', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(26, 'Sigrid Miller', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'fernando46@example.org', '89006667788', '2023-07-27 06:23:47', '1E7NUDFj2N', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(27, 'Wilburn Robel', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'aaliyah.hagenes@example.org', '89007778899', '2023-07-27 06:23:47', 'fKPBDf95xT', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(28, 'Ahmed Lind', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'abdiel.bergstrom@example.com', '89008889910', '2023-07-27 06:23:47', '5GJmd3wmWw', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(29, 'Dr. Molly Zemlak', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'usmith@example.net', '89009991011', '2023-07-27 06:23:47', '51C0VqaRXD', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(30, 'Mr. Milford O\'Hara II', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'dwight69@example.net', '89001011213', '2023-07-27 06:23:47', 'Rc4TYKwy5P', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(31, 'Demetrius Gottlieb', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'junius84@example.org', '89001011215', '2023-07-27 06:23:47', 'BgvAKNQeRo', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(32, 'Allene Corwin IV', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'everett05@example.net', '89001011611', '2023-07-27 06:23:47', 'ZeqNxr3Ny2', '2023-07-27 06:23:47', '2023-07-27 06:23:47'),
(33, 'Леон Скотт Кеннеди', '$2y$10$7Wz0nxmrCIHz1JqY.3d5X.enzUef7dG76PuxMHs9Cs.hS7iM2dUwu', 'kim_lev212@mail.ru', '89001314213', '2023-07-27 09:23:47', 'TMYJoUG5JK', '2023-07-27 08:49:27', '2023-07-27 08:49:27'),
(34, 'testing', '$2y$10$qKWJvkOZiDEnxEhf6WnydOx.xc1zz.VjJjI3dPZkfBPfMwDyzZRmO', 'testing@gmail.com', '89001011254', '2023-03-27 06:23:47', NULL, '2023-08-10 17:02:47', '2023-08-10 17:02:47'),
(35, NULL, '$2y$10$ZbEgsOdAdBuI5A2pGxh5P.3pHWilBeQ6V.JNxa7kPSLkHPNDMFomK', NULL, 'temporary_value', NULL, NULL, '2023-08-11 16:06:24', '2023-08-11 16:06:24');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_id_unique` (`id`),
  ADD UNIQUE KEY `users_phone_number_unique` (`phone_number`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
