export function formatPhoneNumber(phoneNumber) {
  // Удалите все непечатаемые символы из номера
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Разбейте номер на части и разместите их в соответствии с форматом
  const parts = [
    "+" + cleanedPhoneNumber.slice(0, 1), // "+7"
    "(" + cleanedPhoneNumber.slice(1, 4) + ")", // Код города
    cleanedPhoneNumber.slice(4, 7), // Первые три цифры
    cleanedPhoneNumber.slice(7) // Последние четыре цифры
  ];

  // Соберите части в одну строку с пробелами
  const formattedString = parts.join(' ');

  return formattedString;
}
