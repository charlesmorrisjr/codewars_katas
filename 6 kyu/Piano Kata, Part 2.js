function whichNote(keyPressCount) {
  const arr = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']

  return arr[((keyPressCount - 1) % 88) % 12];
}