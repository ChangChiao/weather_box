export const addZero = (num) => {
  const str = num.toString();
  if (str.length === 1) {
    return `0${num}`;
  }
  return num;
};

export const transStatus = (str) => {
  switch (true) {
    case str.includes("雨"):
      return "rain";
    case str.includes("陰"):
      return "cloudy";
    case str.includes("晴") && str.includes("雲"):
      return "clear";
    case str.includes("晴"):
      return "sunny";
    default:
      return "sunny";
  }
};
