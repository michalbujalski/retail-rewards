export const formatDate = (rawDate) => {
  const date = new Date(rawDate);

  return date.toLocaleDateString('pl-PL', {
    month: '2-digit',
    year: 'numeric',
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit'
  });
};
