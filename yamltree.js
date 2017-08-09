var showPath = function(e) {
  document.getElementById('path').innerHTML = e.target.dataset.path;
}

var render = function(doc, path) {
  var sep = ' :: ';
  var ret = ''
  if (Array.isArray(doc)) {
    ret += '<ul data-path="' + path.join(sep) + '">';
    for (var i=0; i<doc.length; ++i) {
      if (doc.length > 0 && typeof doc[0] === 'object' && 'name' in doc[0]) {
        path.push('[' + i + '](name:' + doc[0]['name'] + ')');
      } else {
        path.push('[' + i + ']');
      }
      ret += '<li data-path="' + path.join(sep) + '">' + render(doc[i], path) + '</li>';
      path.pop();
    }
    ret += '</ul>'
  } else if (typeof doc === 'object') {
    ret += '<dl data-path="' + path.join(sep) + '">';
    for (var key in doc) {
      path.push(key);
      ret += '<dt data-path="' + path.join(sep) + '">' + key + ':</dt>';
      ret += '<dd data-path="' + path.join(sep) + '">' + render(doc[key], path) + '</dd>';
      path.pop()
    }
    ret += '</dl>';
  } else {
    ret += '<p data-path="' + path.join(sep) + '">' + doc + '</p>';
  }
  return ret;
}

var loadYaml = function(event) {
  var input = event.target;
  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    var node = document.getElementById('output');
    var doc = jsyaml.load(text);
    output = render(doc, []);
    document.getElementById('output').innerHTML = output;
    tags = ['li', 'dt', 'dd', 'p']
    document.getElementById('output').innerHTML = output;
    document.addEventListener('click', showPath, false);
  };
  reader.readAsText(input.files[0]);
};
