/*Desc = street ID*/

$(function() {
  var values = [
    { roadName: 'KINGSLEY', desc: '12572861', block: 'J', pav: 'http://www.umu.se', rate: '#' },
    { roadName: 'ABERDEEN', desc: '12581174', block: 'J', pav: 'http://www.umu.se', rate: '#' },
    { roadName: 'ACADEMY', desc: '12576512', block: 'J', pav: 'http://www.umu.se', rate: '#' },
    { roadName: 'ACADEMY', desc: '12571714', block: 'J', pav: 'http://www.umu.se', rate: '#' }

    ];








    var ul = jQuery('ul.list');
    jQuery.each( values, function( i, item ) {
      ul.append(
        "<li class='list-item'>" +
        "<span class='roadName'>" + item.roadName + "</span>" +
        "<span class='desc'>" + item.desc + "</span>" +
        "<span class='block'>" + item.block + "</span>" +
        "<a class ='img-link' href='" + item.link + "'><img src='" + item.rate + "' class='img'></a>" +
        "</li>" );
    });

    var options = {
      valueNames: [ 'roadName', 'desc', 'block' ]
    };

    var hackerList = new List('hackers', options);
    hackerList.on('updated', emptyListMsg);
});

function emptyListMsg() {
  if ($('ul.list').is(':empty')){
    $('ul.list').append('<p id="emptySearch">No Results</p>');
  } else {
    $('#emptySearch').remove();
  }
}
