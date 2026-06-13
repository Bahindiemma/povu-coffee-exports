'use client';

// Interactive coffee export-flow map for the /export page. Adapted from the
// amCharts "Map Sankey: Global Coffee Supply Chain" pen, re-themed to POVU's
// espresso/gold palette and re-centred on Uganda (Kyegegwa) -> export markets.
// amCharts is imported inside the effect so it only loads on this page (client
// only) and never runs during SSR.

import { useLayoutEffect, useRef } from 'react';

// Uganda is the single origin; everything flows out to current + target markets.
const ORIGIN = { id: 'UG', name: 'Uganda · Kyegegwa' };
const MARKETS = [
  { id: 'DE', name: 'Germany', focus: 'Specialty roasters, direct trade', value: 100 },
  { id: 'NL', name: 'Netherlands', focus: 'Green bean importers, blenders', value: 85 },
  { id: 'SE', name: 'Scandinavia', focus: 'Nordic roast specialty market', value: 60 },
  { id: 'IT', name: 'Italy', focus: 'Espresso blenders', value: 55 },
  { id: 'AE', name: 'United Arab Emirates', focus: 'Wholesale and re-export hub', value: 70 },
  { id: 'KE', name: 'Kenya', focus: 'Regional specialty, cross-border', value: 50 },
];

export default function CoffeeFlowMap() {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let root: any;

    (async () => {
      const am5 = await import('@amcharts/amcharts5');
      const am5map = await import('@amcharts/amcharts5/map');
      const am5geodata_worldLow = (await import('@amcharts/amcharts5-geodata/worldLow')).default;
      const am5themes_Animated = (await import('@amcharts/amcharts5/themes/Animated')).default;
      if (cancelled || !ref.current) return;

      // POVU palette
      const espresso = am5.color(0x0c0906);
      const surface = am5.color(0x171009);
      const land = am5.color(0x241a10);
      const gold = am5.color(0xc9913a);
      const goldLight = am5.color(0xdfb468);
      const cream = am5.color(0xf0e6cc);
      const kyegegwa = am5.color(0x2f6b48);

      root = am5.Root.new(ref.current);
      root._logo?.dispose();

      const povuTheme = am5.Theme.new(root);
      povuTheme.rule('InterfaceColors').setAll({
        primaryButton: gold,
        primaryButtonHover: goldLight,
        primaryButtonDown: am5.color(0x5c3a1e),
        primaryButtonActive: goldLight,
        primaryButtonText: espresso,
        secondaryButton: land,
        secondaryButtonHover: am5.color(0x3a2a17),
        secondaryButtonDown: gold,
        secondaryButtonText: cream,
        background: espresso,
        text: cream,
      });
      root.setThemes([am5themes_Animated.new(root), povuTheme]);

      const chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: 'rotateX',
          panY: 'rotateY',
          projection: am5map.geoOrthographic(),
          rotationX: -32,
          rotationY: -8,
          minZoomLevel: 0.5,
          zoomLevel: 0.95,
        })
      );

      // Globe sphere background
      const bgSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
      bgSeries.mapPolygons.template.setAll({ fill: surface, fillOpacity: 1, strokeOpacity: 0 });
      bgSeries.data.push({ geometry: am5map.getGeoRectangle(90, 180, -90, -180) });

      // Graticule (faint gold grid)
      const graticule = chart.series.push(am5map.GraticuleSeries.new(root, {}));
      graticule.mapLines.template.setAll({ stroke: gold, strokeOpacity: 0.08, strokeWidth: 0.5 });

      // Countries
      const polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, { geoJSON: am5geodata_worldLow })
      );
      polygonSeries.mapPolygons.template.setAll({
        fill: land,
        stroke: gold,
        strokeWidth: 0.5,
        strokeOpacity: 0.18,
      });

      const marketIds = MARKETS.map((m) => m.id);
      polygonSeries.events.on('datavalidated', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        am5.array.each(polygonSeries.dataItems, (di: any) => {
          const id = di.get('id');
          if (id === ORIGIN.id) {
            di.get('mapPolygon').setAll({ fill: kyegegwa, fillOpacity: 0.95 });
          } else if (id && marketIds.includes(id)) {
            di.get('mapPolygon').setAll({ fill: am5.color(0x6b4f22), fillOpacity: 0.9 });
          }
        });
      });

      // Sankey flow series (Uganda -> markets)
      const sankey = chart.series.push(
        am5map.MapSankeySeries.new(root, {
          polygonSeries,
          maxWidth: 2.2,
          controlPointDistance: 0.45,
          resolution: 60,
          nodePadding: 0.3,
        })
      );
      sankey.mapPolygons.template.setAll({
        fill: gold,
        fillOpacity: 0.5,
        strokeOpacity: 0,
        tooltipText: 'Kyegegwa → {targetNode.name}',
      });
      sankey.nodes.mapPolygons.template.setAll({
        fill: goldLight,
        stroke: espresso,
        strokeWidth: 1.5,
        fillOpacity: 0.95,
        strokeOpacity: 1,
        tooltipText: '{name}',
      });

      // Flowing coffee-bean bullets
      sankey.bullets.push(() =>
        am5.Bullet.new(root, {
          locationX: 0,
          autoRotate: true,
          sprite: am5.Graphics.new(root, {
            svgPath:
              'M-4,-2.5 C-4,-5 -1.5,-6.5 1,-6.5 C3.5,-6.5 5,-4.5 5,-2 C5,1 3,3.5 0.5,5 C-0.5,5.7 -1.5,5.7 -2.5,5 C-5,3.5 -6,1 -4,-2.5 Z M-1,-5 C-1,-1 -1,2 -0.5,4.5',
            fill: cream,
            stroke: gold,
            strokeWidth: 0.5,
            centerX: am5.p50,
            centerY: am5.p50,
            scale: 0.38,
            visible: false,
          }),
        })
      );

      sankey.data.setAll(
        MARKETS.map((m) => ({ sourceId: ORIGIN.id, targetId: m.id, value: m.value }))
      );

      const names: Record<string, string> = { [ORIGIN.id]: ORIGIN.name };
      MARKETS.forEach((m) => {
        names[m.id] = m.name;
      });

      sankey.events.on('datavalidated', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        am5.array.each(sankey.nodes.dataItems, (di: any) => {
          const id = di.get('id');
          if (id && names[id]) di.set('name', names[id]);
          if (id === ORIGIN.id) di.get('node')?.children?.values?.[0]?.setAll?.({ fill: kyegegwa });
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        am5.array.each(sankey.dataItems, (dataItem: any) => {
          (dataItem.bullets || []).forEach((bullet: { get: (k: string) => unknown; animate: (o: unknown) => void }) => {
            const dur = 3500 + Math.random() * 3500;
            setTimeout(() => {
              const sprite = bullet.get('sprite') as { set: (k: string, v: unknown) => void } | undefined;
              if (sprite) sprite.set('visible', true);
              bullet.animate({
                key: 'locationX',
                from: 0,
                to: 1,
                duration: dur,
                easing: am5.ease.linear,
                loops: Infinity,
              });
            }, Math.random() * dur);
          });
        });
      });

      // Title
      const titleCont = chart.children.push(
        am5.Container.new(root, {
          layout: root.verticalLayout,
          x: am5.p50,
          centerX: am5.p50,
          y: am5.p100,
          centerY: am5.p100,
          position: 'absolute',
          paddingBottom: 14,
        })
      );
      titleCont.children.push(
        am5.Label.new(root, {
          text: 'From Kyegegwa to the World',
          fontSize: 16,
          fontWeight: '600',
          fill: cream,
          fontFamily: 'Merienda, serif',
          x: am5.p50,
          centerX: am5.p50,
        })
      );
      titleCont.children.push(
        am5.Label.new(root, {
          text: 'POVU Robusta export destinations',
          fontSize: 11,
          fill: gold,
          x: am5.p50,
          centerX: am5.p50,
        })
      );

      // Globe / Map toggle
      const switchCont = chart.children.push(
        am5.Container.new(root, { layout: root.horizontalLayout, x: 20, y: 20 })
      );
      switchCont.children.push(
        am5.Label.new(root, { centerY: am5.p50, text: 'Globe', fill: cream, fontSize: 12 })
      );
      const switchButton = switchCont.children.push(
        am5.Button.new(root, {
          themeTags: ['switch'],
          centerY: am5.p50,
          icon: am5.Circle.new(root, { themeTags: ['icon'] }),
        })
      );
      switchCont.children.push(
        am5.Label.new(root, { centerY: am5.p50, text: 'Map', fill: cream, fontSize: 12 })
      );

      const easing = am5.ease.inOut(am5.ease.cubic);
      const dur = 1200;
      switchButton.events.on('click', () => {
        if (switchButton.get('active')) {
          chart.set('projection', am5map.geoMercator());
          chart.set('panX', 'translateX');
          chart.set('panY', 'translateY');
          chart.animate({ key: 'rotationX', to: 0, duration: dur, easing });
          chart.animate({ key: 'rotationY', to: 0, duration: dur, easing });
          bgSeries.mapPolygons.template.set('fillOpacity', 0);
          chart.set('minZoomLevel', 1);
          chart.animate({ key: 'zoomLevel', to: 1, duration: dur, easing });
        } else {
          chart.set('projection', am5map.geoOrthographic());
          chart.set('panX', 'rotateX');
          chart.set('panY', 'rotateY');
          chart.animate({ key: 'rotationX', to: -32, duration: dur, easing });
          chart.animate({ key: 'rotationY', to: -8, duration: dur, easing });
          bgSeries.mapPolygons.template.set('fillOpacity', 1);
          chart.set('minZoomLevel', 0.5);
          chart.animate({ key: 'zoomLevel', to: 0.95, duration: dur, easing });
        }
      });

      chart.appear(800, 100);
    })();

    return () => {
      cancelled = true;
      if (root) root.dispose();
    };
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Interactive map of POVU Coffee export flows from Kyegegwa, Uganda to Germany, Netherlands, Scandinavia, Italy, the UAE and Kenya"
      style={{ width: '100%', height: 'clamp(380px, 52vw, 560px)' }}
    />
  );
}
