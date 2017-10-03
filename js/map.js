'use strict';

ymaps.ready(initMap);

function initMap () {
    var mishkaMap = new ymaps.Map('mishka-map', {
      center: [59.938631, 30.323055],
      zoom: 17,
      controls: ['zoomControl']
    }),
    mishkaPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'Магазин "Мишка"'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-35, -90]
    });
    mishkaMap.behaviors.disable('scrollZoom');
    mishkaMap.geoObjects.add(mishkaPlacemark);
}
