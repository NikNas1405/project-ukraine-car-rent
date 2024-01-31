export const formatPriceSelect = (string) => {
  return string.split('$')[1].toString();
};

export const formattedOptions = (options) => {
  return [...options.map((option) => ({ value: option, label: option }))];
};

export const formatNumber = (value) => {
  return Number(value).toLocaleString('en-US');
};

const generatePriceArr = () => {
  const options = [];
  for (let i = 10; i <= 990; i += 10) {
    options.push({ value: i, label: `${i}$` });
  }
  return options;
};

export const priceOptions = generatePriceArr();
