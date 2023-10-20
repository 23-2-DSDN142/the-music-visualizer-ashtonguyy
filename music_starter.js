function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20);

  var pointsize = 10;
  var vocalheight = map(vocal, 0, 100, height / 2, height / 2 - 200 )
  var bassheight = map(bass, 0, 100, height / 2, height / 2 + 200 )
  var drumwidthL = map(drum, 0, 100, width / 2, width / 2 + 200)
  // Drawing a large even cross
  stroke(127, 255, 212); // hospital green
  line(width / 2 - 200, height / 2, width / 2 + 200, height / 2); // Horizontal line
  line(width / 2, height / 2 - 200, width / 2, height / 2 + 200); // Vertical line

  //DRUM variable for oscilloscope LEFT
  fill(127, 255, 212); //hospital green
  ellipse(height / 2, drumwidthL, pointsize);

  //DRUM variable for oscilloscope RIGHT
  fill(127, 255, 212); //hospital green
  ellipse(width / 2 + drum, height / 2 - drum, pointsize);

  //VOCAL variable for oscilloscope
  fill(127, 255, 212); //hospital green
  ellipse(width/2, vocalheight, pointsize);

  //BASS variable for oscilloscope CENTER
  fill(127, 255, 212); //hospital green
  ellipse(width / 2, bassheight, pointsize)

  //BASS variable for oscilloscope LEFT
  fill(127, 255, 212); //hospital green
  ellipse(width / 2 - bass, height / 2 + bass, pointsize)

  //BASS variable for oscilloscope RIGHT
  fill(127, 255, 212); //hospital green
  ellipse(width / 2 + bass, height / 2 + bass, pointsize)

}
