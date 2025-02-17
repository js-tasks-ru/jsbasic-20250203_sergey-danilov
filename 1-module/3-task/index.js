function ucFirst(str) {
  if (!str) {
    return '';
  } else if (str.lenth == 1) {
    return str.toUpperCase();
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
}


