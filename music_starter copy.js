function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20);

  var pointsize = 10;
  var vocalheight = map(vocal, 0, 100, height / 2, height / 2 - 200 );
  var bassheight = map(bass, 0, 100, height / 2, height / 2 + 200 );

  // Drawing a large even cross
  stroke(127, 255, 212); // hospital green
  line(width / 2 - 200, height / 2, width / 2 + 200, height / 2); // Horizontal line
  line(width / 2, height / 2 - 200, width / 2, height / 2 + 200); // Vertical line

  //DRUM variable for oscilloscope LEFT
  fill(127, 255, 212); // hospital green
  var drumX1 = width / 2 - drum;
  var drumY1 = height / 2 - drum;
  ellipse(drumX1, drumY1, pointsize);

  //DRUM variable for oscilloscope RIGHT
  var drumX2 = width / 2 + drum;
  var drumY2 = height / 2 - drum;
  ellipse(drumX2, drumY1, pointsize);
  line(drumX1, drumY1, drumX2, drumY2);

  //VOCAL variable for oscilloscope
  fill(127, 255, 212); // hospital green
  ellipse(width / 2, vocalheight, pointsize);
  line(width / 2, vocalheight, drumX1, drumY1);

  //BASS variable for oscilloscope CENTER
  fill(127, 255, 212); // hospital green
  ellipse(width / 2, bassheight, pointsize);

  //BASS variable for oscilloscope LEFT
  var bassX1 = width / 2 - bass;
  var bassY1 = height / 2 + bass;
  fill(127, 255, 212); // hospital green
  ellipse(bassX1, bassY1, pointsize);
  line(width / 2, bassheight, bassX1, bassY1);

  //BASS variable for oscilloscope RIGHT
  var bassX2 = width / 2 + bass;
  var bassY2 = height / 2 + bass;
  fill(127, 255, 212); // hospital green
  ellipse(bassX2, bassY2, pointsize);
  line(width / 2, bassheight, bassX2, bassY2);
}
