const formatBirthday = (birthday: string | null) => {
  if (!birthday) {
    return birthday;
  } else {
    const birthdayDateObject = new Date(birthday);
    const rawBirthdayMonth = birthdayDateObject.getUTCMonth();
    const rawBirthdayDay = birthdayDateObject.getUTCDate();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedBirthdayMonth = months[rawBirthdayMonth];

    const endInSt = [1, 21, 31];
    const endInNd = [2, 22];
    const endInRd = [3, 23];

    let formattedBirthdayDay: string;
    if (endInSt.includes(rawBirthdayDay)) {
      formattedBirthdayDay = rawBirthdayDay.toString() + "st";
    } else if (endInNd.includes(rawBirthdayDay)) {
      formattedBirthdayDay = rawBirthdayDay.toString() + "nd";
    } else if (endInRd.includes(rawBirthdayDay)) {
      formattedBirthdayDay = rawBirthdayDay.toString() + "rd";
    } else {
      formattedBirthdayDay = rawBirthdayDay.toString() + "th";
    }
    const formattedBirthday = `${formattedBirthdayMonth} ${formattedBirthdayDay}`;
    return formattedBirthday;
  }
};

export default formatBirthday;
