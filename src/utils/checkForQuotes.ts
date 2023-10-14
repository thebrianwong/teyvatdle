const checkForQuotes = (data: string) => {
  if (data.includes(`"`)) {
    return JSON.parse(data);
  } else {
    return data;
  }
};

export default checkForQuotes;
