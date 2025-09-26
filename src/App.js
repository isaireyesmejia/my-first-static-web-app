// src/App.jsx
import { useEffect, useRef } from "react";
import * as atlas from "azure-maps-control";

export default function App() {
  const mapRef = useRef(null);

  // 🚗 Datos simulados de vehículos
  const vehicles = [
    { id: "TRUCK001", lat: 20.6736, lng: -103.344, status: "En ruta" },
    { id: "TRUCK002", lat: 20.6800, lng: -103.350, status: "Cargando" },
    { id: "TRUCK003", lat: 20.6705, lng: -103.360, status: "Descargando" },
  ];

  useEffect(() => {
    // 🔑 Clave de Azure Maps (sáquela desde Azure Portal)
    const subscriptionKey = "TU_AZURE_MAPS_KEY";

    // Inicializar el mapa
    const map = new atlas.Map(mapRef.current, {
      center: [-103.344, 20.6736], // Centro en Guadalajara
      zoom: 12,
      language: "es-ES",
      view: "Auto",
      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey,
      },
    });

    map.events.add("ready", () => {
      const dataSource = new atlas.source.DataSource();
      map.sources.add(dataSource);

      // Añadir marcadores de los vehículos
      vehicles.forEach((v) => {
        const point = new atlas.data.Point([v.lng, v.lat]);
        const feature = new atlas.data.Feature(point, { id: v.id, status: v.status });
        dataSource.add(feature);
      });

      // Capa de símbolos (íconos en el mapa)
      map.layers.add(
        new atlas.layer.SymbolLayer(dataSource, null, {
          iconOptions: { image: "pin-round-blue", size: 0.8 },
          textOptions: { textField: ["get", "id"], offset: [0, -2] },
        })
      );
    });

    return () => map.dispose();
  }, []);

  return (
    <div className="h-screen w-screen">
      <h1 className="text-center text-2xl font-bold p-2 bg-gray-100 shadow">
        🚚 Seguimiento de Vehículos en Tiempo Real
      </h1>
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
}
