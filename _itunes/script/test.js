  {
    console.log(item)
    console.log(i)
    $(` <div class = "carousel-item" >
              <video controls="controls" poster = "${clip.artworkUrl100}">
                <source src = "${clip.previewUrl}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                <a href = "${clip.previewUrl}> Скачайте видео</a>. 
              </video>
            < /div>`).attr('data-id', clip.trackName)
      .appendTo($clipList);
  }

  {
    console.log(item)
    console.log(i)
    if (i == 0) {
      console.log("i=0 true")
    } else {
      console.log("i=0 false")
    }

    $(` <div class = "carousel-item" >
              <video controls="controls" poster = "${clip.artworkUrl100}">
                <source src = "${clip.previewUrl}" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                <a href = "${clip.previewUrl}> Скачайте видео</a>. 
              </video>
            < /div>`).attr('data-id', clip.trackName)
      .appendTo($clipList);
  }