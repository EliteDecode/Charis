function useHiddenNumbers(number, visibleLength) {
  const numAsString = String(number); // Convert number to string

  const visiblePart = numAsString.slice(-visibleLength);
  const hiddenPart = "*".repeat(numAsString.length - visibleLength);
  const result = hiddenPart + visiblePart;
  //   return Number(result); // Convert back to number
  return result;
}

export default useHiddenNumbers;
