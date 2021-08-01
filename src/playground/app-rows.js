const generateRows = () => {
  const rows = [];
  for (let index = 0; index < 180; index += 1) {
    rows.push({
      id: index,
      firstname: `Vorname${index + 1}`,
      lastname: `Nachname${index + 1}`,
      email: `Email${index + 1}`,
      active: true,
    });
  }
  return rows;
};
export default generateRows();
