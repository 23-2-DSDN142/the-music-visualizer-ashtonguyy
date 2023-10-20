let points = [];
let lineTimer = 0;
let lineFadeDuration = 1;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20);

  let pointsize = 2;
  let vocalheight = map(vocal, 0, 100, height / 2, height / 2 - 200 );
  let bassheight = map(bass, 0, 100, height / 2, height / 2 + 200 );
  let drumwidthL = map(drum, 0, 100, width / 2, width / 2 - 200);
  let drumwidthR = map(drum, 0, 100, width / 2, width / 2 + 200);

  // Drawing a large even cross
  stroke(127, 255, 212); // hospital green
  line(width / 2 - 200, height / 2, width / 2 + 200, height / 2); // Horizontal line
  line(width / 2, height / 2 - 200, width / 2, height / 2 + 200); // Vertical line

  //DRUM variable for oscilloscope LEFT
  fill(127, 255, 212); // hospital green
  ellipse(drumwidthL, height / 2, pointsize);

  //DRUM variable for oscilloscope RIGHT
  fill(127, 255, 212); // hospital green
  ellipse(drumwidthR, height / 2, pointsize);

  //VOCAL variable for oscilloscope
  fill(127, 255, 212); // hospital green
  ellipse(width / 2, vocalheight, pointsize);

  //BASS variable for oscilloscope CENTER
  fill(127, 255, 212); // hospital green
  ellipse(width / 2, bassheight, pointsize);

  //BASS variable for oscilloscope LEFT
  fill(127, 255, 212); // hospital green
  ellipse(width / 2 - bass, height / 2 + bass, pointsize);

  //BASS variable for oscilloscope RIGHT
  fill(127, 255, 212); // hospital green
  ellipse(width / 2 + bass, height / 2 + bass, pointsize);


  // Store points for drawing lines
  points.push({
    x: drumwidthR,
    y: height / 2
  });
  points.push({
    x: width / 2 + bass,
    y: height / 2 + bass
  });
  points.push({
    x: width / 2,
    y: bassheight
  });
  points.push({
    x: drumwidthL,
    y: height / 2
  });
  points.push({
    x: width / 2,
    y: vocalheight
  })

  // Draw lines on after the other 
  for (let i = 0; i < points.length; i++) {
    let nextIndex = (i + 1) % points.length;
    line(points[i].x, points[i].y, points[nextIndex].x, points[nextIndex].y);
  }

    // Control line disappearance after a certain time
   if (lineTimer > lineFadeDuration) {
     points.splice(0, 1); 
  } else {
     lineTimer += 1; // Increment the timer
  }
}

