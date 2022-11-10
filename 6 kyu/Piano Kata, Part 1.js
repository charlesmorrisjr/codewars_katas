function blackOrWhiteKey(keyPressCount) {
  const arr = ['white', 'black', 'white', 'white', 'black', 'white', 'black', 'white', 'white', 'black', 'white', 'black']

  return arr[((keyPressCount - 1) % 88) % 12];
}