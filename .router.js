function setRouter(app){ 
 var router = app; 

app.get('/loadmore', function(req, res) {
  var currentIndex = parseInt(req.query.index)
  var length = parseInt(req.query.length)
  var data = []
  setTimeout(function(){ 
    for(var i=0; i<length; i++){
    data.push('内容'+parseInt(currentIndex+i))           
    }
  res.end(JSON.stringify(data))},500)}) // 模拟加载

}
 module.exports.setRouter = setRouter