import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface Clinic {
  id: number;
  name: string;
  emergency: boolean;
  address: string;
  phone: string;
  hours: string;
  rating: number;
  services: string;
  distance: string;
  mapLat: number;
  mapLng: number;
  email: string;
  left: string;
  top: string;
}

const clinics: Clinic[] = [
  {
    id: 1,
    name: "City Veterinary Clinic",
    emergency: true,
    address: "123 Main Street, Downtown",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    rating: 4.8,
    services: "Microchipping, Vaccinations, Surgery",
    distance: "2.3km",
    mapLat: 25.2048,
    mapLng: 55.2708,
    email: "info@cityvet.com",
    left: "30%",
    top: "20%",
  },
  {
    id: 2,
    name: "Pet Care Center",
    emergency: true,
    address: "456 Oak Avenue, Suburbs",
    phone: "(555) 987-6543",
    hours: "Mon-Sun: 7AM-8PM",
    rating: 4.6,
    services: "Microchipping, Emergency Care, Grooming",
    distance: "2.3km",
    mapLat: 25.2648,
    mapLng: 55.3108,
    email: "contact@petcare.com",
    left: "45%",
    top: "40%",
  },
  {
    id: 3,
    name: "Animal Hospital Plus",
    emergency: false,
    address: "789 Pine Road, Medical District",
    phone: "(555) 456-7890",
    hours: "Mon-Fri: 7AM-7PM, Weekends: 8AM-5PM",
    rating: 4.9,
    services: "Microchipping, Dental Care, X-Ray",
    distance: "2.3km",
    mapLat: 25.1848,
    mapLng: 55.2508,
    email: "info@animalplus.com",
    left: "60%",
    top: "60%",
  },
  {
    id: 4,
    name: "Downtown Animal Clinic",
    emergency: false,
    address: "321 Central Ave, City Center",
    phone: "(555) 234-5678",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",
    rating: 4.7,
    services: "Microchipping, Vaccinations, Surgery, Boarding",
    distance: "2.3km",
    mapLat: 25.2248,
    mapLng: 55.2408,
    email: "help@downtownanimal.com",
    left: "75%",
    top: "80%",
  },
];

const starIcon = (filled: boolean, key: number) => (
  <svg
    key={key}
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

type ClinicListProps = {
  getDirections: (lat: number, lng: number) => void;
  focusOnClinic: (id: number) => void;
};

const ClinicList: React.FC<ClinicListProps> = ({ getDirections, focusOnClinic }) => {
  const { t } = useLanguage();

  return (
    <div className="lg:col-span-2">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {t('findMain.nearbyClinics')}
        </h2>
        <p className="text-gray-600">{t('findMain.subtitle')}</p>
      </div>

      <div className="space-y-6" id="clinics-list">
        {clinics.map((clinic) => (
          <div
            key={clinic.id}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow clinic-card"
            data-clinic-id={clinic.id}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-800 mr-3">{clinic.name}</h3>
                  {clinic.emergency && (
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                      {t('findMain.emergency')}
                    </span>
                  )}
                </div>

                <div className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                  <span className="text-gray-600">{clinic.address}</span>
                </div>

                <div className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                  </svg>
                  <span className="text-gray-600">{clinic.phone}</span>
                </div>

                <div className="flex items-center mb-2">
                  <svg
                    className="w-4 h-4 text-gray-500 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 text-sm">{clinic.hours}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 mr-2">
                    {[1, 2, 3, 4, 5].map((star) =>
                      star <= Math.floor(clinic.rating)
                        ? starIcon(true, star)
                        : starIcon(false, star)
                    )}
                  </div>
                  <span className="text-sm text-gray-600">{clinic.rating} rating</span>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700">Services: </span>
                  <span className="text-sm text-gray-600">{clinic.services}</span>
                </div>
              </div>

              <div className="ml-4 text-center">
                <div className="text-2xl font-bold text-pet-secondary mb-1 distance-display">
                  {clinic.distance}
                </div>
                <div className="text-sm text-gray-500">{t('findMain.away')}</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${clinic.phone}`}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                </svg>
                {t('findMain.call')}
              </a>

              <button
                onClick={() => getDirections(clinic.mapLat, clinic.mapLng)}
                className="bg-pet-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.71 11.29l-9-9a.996.996 0 00-1.41 0l-9 9a1.003 1.003 0 000 1.42l9 9c.39.39 1.02.39 1.41 0l9-9a.996.996 0 000-1.42zM14 14.5V12h-4v3H8V9h2V7.5L14 11v3.5z"></path>
                </svg>
                {t('findMain.directions')}
              </button>

              <a
                href={`mailto:${clinic.email}`}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                </svg>
                {t('findMain.email')}
              </a>

              <button
                onClick={() => focusOnClinic(clinic.id)}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
                {t('findMain.showOnMap')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

type InteractiveMapProps = {
  focusOnClinic: (id: number) => void;
  showEmergencyOnly: boolean;
  setShowEmergencyOnly: (show: boolean) => void;
};

const InteractiveMap: React.FC<InteractiveMapProps> = ({ focusOnClinic, showEmergencyOnly, setShowEmergencyOnly }) => {
  const { t } = useLanguage();
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 3));
  };

  const zoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 0.5));
  };

  const showAllClinics = () => {
    setShowEmergencyOnly(false);
  };

  const filterEmergencyClinics = () => {
    setShowEmergencyOnly(true);
  };

  const filteredClinics = showEmergencyOnly ? clinics.filter((c) => c.emergency) : clinics;

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">{t('findMain.interactiveMap')}</h3>
        <div id="map" className="w-full h-96 rounded-lg bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
            <div
              className="relative w-full h-full"
              id="interactive-map"
              style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
            >
              <div
                id="user-marker"
                className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ display: "none" }}
              >
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
              </div>

              {filteredClinics.map((clinic) => (
                <div
                  key={clinic.id}
                  className="absolute w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg cursor-pointer clinic-marker z-10"
                  style={{ left: clinic.left, top: clinic.top, transform: "translate(-50%, -50%) scale(1)" }}
                  data-clinic-id={clinic.id}
                  onClick={() => focusOnClinic(clinic.id)}
                  title={clinic.name}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                    {clinic.name}
                  </div>
                  <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              ))}

              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button onClick={zoomIn} className="bg-white shadow-lg p-2 rounded hover:bg-gray-50" aria-label="Zoom In">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                  </svg>
                </button>
                <button onClick={zoomOut} className="bg-white shadow-lg p-2 rounded hover:bg-gray-50" aria-label="Zoom Out">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 13H5v-2h14v2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-gray-600">{t('findMain.yourLocation')}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">{t('findMain.veterinaryClinics')}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500 text-center">{t('findMain.mapInstructions')}</div>
        </div>

        <div className="mt-4 space-y-2">
          <button
            onClick={showAllClinics}
            className="w-full bg-pet-secondary text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            {t('findMain.showAllClinics')}
          </button>
          <button
            onClick={filterEmergencyClinics}
            className="w-full bg-red-500 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-red-600 transition-colors"
          >
            {t('findMain.emergencyOnly')}
          </button>
        </div>
      </div>
    </div>
  );
};

const FindMain: React.FC = () => {
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);

  const getDirections = (lat: number, lng: number) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
  };

  const focusOnClinic = (id: number) => {
    // Placeholder: could scroll to clinic in list or highlight on map
    console.log(`Focus on clinic ${id}`);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <ClinicList getDirections={getDirections} focusOnClinic={focusOnClinic} />
      <InteractiveMap focusOnClinic={focusOnClinic} showEmergencyOnly={showEmergencyOnly} setShowEmergencyOnly={setShowEmergencyOnly} />
    </div>
  );
};

export default FindMain;
