var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/manifest', function(request, response) {
  response.header("Content-Type", "text/cache-manifest");
  response.end(['CACHE MANIFEST','#v1','CACHE:','/img/text_tuto.png','/img/bu_avanti_on.png','/img/bu_avanti_off.png','/img/home.png','/img/tuto_1.png','/img/tuto_2.png','/img/tuto_3.png','/img/tuto_4.png','/img/tuto_5.png','/img/tuto_6.png','/img/bu_1_off.png','/img/bu_2_off.png','/img/bu_3_off.png','/img/bu_4_off.png','/img/bu_5_off.png','/img/bu_6_off.png','/img/bu_7_off.png','/img/bu_1_on.png','/img/bu_2_on.png','/img/bu_3_on.png','/img/bu_4_on.png','/img/bu_5_on.png','/img/bu_6_on.png','/img/bu_7_on.png','/img/bu_home.png\n','/img/bu_tutorial.png\n','/js/jquery.min.js','/js/jquery.touchSwipe.min.js','/video/video_0.mp4','/video/video_1.mp4','/video/video_2.mp4','/video/video_3.mp4','/video/video_4.mp4','/video/video_5.mp4','/video/video_6.mp4','/video/video_7.mp4','/','/index.html'].join('\n'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
