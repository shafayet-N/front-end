import React, { useState, useEffect } from 'react';
import { Search, MapPin, AlertCircle, CheckCircle, Loader, ArrowRight, Wifi, Phone, Clock } from 'lucide-react';
import Header from "@/components/Header";
import RegisterHero from "@/components/RegisterHero";
import Footer from "@/components/Footer";

const GetPetMicrochipped = () => {
  const [step, setStep] = useState('input');
  const [microchipNumber, setMicrochipNumber] = useState('');
  const [petName, setPetName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyClinic, setNearbyClinic] = useState(null);
  const [error, setError] = useState('');
  const [verificationData, setVerificationData] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (err) => {
          console.log('Location access denied:', err);
        }
      );
    }
  }, []);

  const validateMicrochipFormat = (number) => {
    const cleanNumber = number.replace(/\D/g, '');
    return cleanNumber.length === 15;
  };

  const verifyMicrochip = async () => {
    if (!validateMicrochipFormat(microchipNumber)) {
      setError('Microchip number must be 15 digits');
      return;
    }

    if (!petName.trim()) {
      setError('Please enter your pet name');
      return;
    }

    setIsLoading(true);
    setError('');
    setStep('verifying');

    try {
      // Backend API integration - replace with your actual endpoint
      // const response = await fetch('/api/verify-microchip', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     microchipNumber: microchipNumber.replace(/\D/g, ''),
      //     petName,
      //     location: userLocation
      //   })
      // });
      // const data = await response.json();
      // const isVerified = data.verified;

      await new Promise(resolve => setTimeout(resolve, 2000));
      const isVerified = Math.random() > 0.1;

      if (isVerified) {
        setVerificationData({
          microchipNumber: microchipNumber.replace(/\D/g, ''),
          petName,
          registeredDate: new Date().toLocaleDateString(),
          status: 'active'
        });
        setStep('success');
        
        setTimeout(() => {
          handleProceed();
        }, 3000);
      } else {
        setStep('not-microchipped');
        fetchNearbyClinic();
      }
    } catch (err) {
      setError('Verification failed. Please try again.');
      setStep('error');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchNearbyClinic = async () => {
    if (!userLocation) return;

    try {
      // Backend API integration - replace with your actual endpoint
      // const response = await fetch('/api/nearby-clinics', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     lat: userLocation.lat,
      //     lng: userLocation.lng,
      //     radius: 5
      //   })
      // });
      // const clinics = await response.json();
      // setNearbyClinic(clinics[0]);

      setNearbyClinic({
        name: 'Paws & Care Veterinary Clinic',
        address: '123 Pet Street, Animal City',
        distance: '0.8 km away',
        phone: '+962-7-98-765432',
        rating: 4.8,
        hours: 'Open Now • 8:00 AM - 6:00 PM',
        lat: userLocation.lat + 0.01,
        lng: userLocation.lng + 0.01
      });
    } catch (err) {
      console.error('Failed to fetch nearby clinic:', err);
    }
  };

  const handleProceed = () => {
    window.location.href = '/registerpet';
  };

  const handleGoToClinic = () => {
    if (nearbyClinic) {
      window.open(`https://maps.google.com/?q=${nearbyClinic.lat},${nearbyClinic.lng}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
            <div className="flex-1 bg-white">
        <RegisterHero />
                          </div>
      <main className="flex-1 bg-white pt-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Wifi className="w-10 h-10 text-white animate-bounce" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Verify Pet Microchip
            </h1>
            <p className="text-gray-600 text-lg">Check if your pet is already microchipped and registered</p>
          </div>

          {/* Input Step */}
          {step === 'input' && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-6 animate-scale-in">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Pet Name</label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Enter your pet's name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Microchip Number</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      value={microchipNumber}
                      onChange={(e) => setMicrochipNumber(e.target.value.replace(/\D/g, '').slice(0, 15))}
                      placeholder="Enter 15-digit microchip number"
                      maxLength="15"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
                      {microchipNumber.length}/15
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Microchip numbers are typically 15 digits long and found on your veterinary records.
                  </p>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 flex items-start gap-3 animate-shake">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-red-700 text-sm">{error}</span>
                </div>
              )}

              <button
                onClick={verifyMicrochip}
                disabled={!microchipNumber || microchipNumber.length !== 15 || !petName.trim()}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                <Search className="w-5 h-5" />
                Verify Microchip
              </button>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100K+</div>
                  <div className="text-xs text-gray-600">Pets Registered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">24/7</div>
                  <div className="text-xs text-gray-600">Support</div>
                </div>
              </div>
            </div>
          )}

          {/* Verifying Step */}
          {step === 'verifying' && (
            <div className="bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center min-h-96 animate-scale-in">
              <div className="relative w-24 h-24 mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center" style={{animation: 'spin-slow 3s linear infinite'}}>
                  <Loader className="w-12 h-12 text-white animate-spin" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Verifying Microchip</h2>
              <p className="text-gray-600 text-center">Scanning database for microchip information...</p>
              <div className="w-full bg-gray-200 h-1 rounded-full mt-8 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-full" style={{animation: 'loading-bar 2s ease-in-out infinite'}}></div>
              </div>
            </div>
          )}

          {/* Success Step */}
          {step === 'success' && verificationData && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center" style={{animation: 'bounce-custom 1s infinite'}}>
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Great! Pet is Microchipped</h2>
                <p className="text-gray-600">Your pet's microchip has been successfully verified</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-8 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-green-200">
                  <span className="text-gray-700 font-medium">Pet Name</span>
                  <span className="text-gray-900 font-bold">{verificationData.petName}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-green-200">
                  <span className="text-gray-700 font-medium">Microchip ID</span>
                  <span className="text-gray-900 font-bold font-mono">{verificationData.microchipNumber}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-green-200">
                  <span className="text-gray-700 font-medium">Status</span>
                  <span className="text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full text-sm">
                    ✓ Active
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Verified Date</span>
                  <span className="text-gray-900 font-bold">{verificationData.registeredDate}</span>
                </div>
              </div>

              <p className="text-center text-gray-600 mb-6 text-sm">
                Redirecting to complete registration in a few seconds...
              </p>

              <button
                onClick={handleProceed}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                Continue to Registration
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Not Microchipped Step */}
          {step === 'not-microchipped' && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in space-y-8">
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-amber-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center" style={{animation: 'wiggle 0.5s ease-in-out infinite'}}>
                    <AlertCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Microchip Not Found</h2>
                <p className="text-gray-600">Don't worry! Let's get your pet microchipped at a nearby clinic</p>
              </div>

              {nearbyClinic && (
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Clinic Near You</h3>
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{nearbyClinic.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm text-gray-700">{nearbyClinic.rating} rating</span>
                        </div>
                      </div>
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {nearbyClinic.distance}
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-blue-200 pt-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{nearbyClinic.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <a href={`tel:${nearbyClinic.phone}`} className="text-blue-600 hover:underline">
                          {nearbyClinic.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{nearbyClinic.hours}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleGoToClinic}
                      className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-5 h-5" />
                      Get Directions
                    </button>
                  </div>
                </div>
              )}

              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-3">What's Next?</h4>
                <ol className="space-y-2 text-gray-700 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                    <span>Visit the recommended clinic</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                    <span>Get your pet microchipped (quick and painless)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                    <span>Register the microchip with us</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                    <span>Your pet is now protected!</span>
                  </li>
                </ol>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => {
                    setStep('input');
                    setMicrochipNumber('');
                    setPetName('');
                    setError('');
                  }}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Try Again
                </button>
                <button
                  onClick={handleGoToClinic}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Go to Clinic
                </button>
              </div>
            </div>
          )}

          {/* Error Step */}
          {step === 'error' && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-red-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Verification Error</h2>
                <p className="text-gray-600">We encountered an issue. Please try again.</p>
              </div>

              <button
                onClick={() => {
                  setStep('input');
                  setMicrochipNumber('');
                  setPetName('');
                  setError('');
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Floating support button */}
      <div className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 cursor-pointer z-40">
        <Phone className="w-6 h-6 text-white" />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes loading-bar {
          0% { width: 0; }
          50% { width: 100%; }
          100% { width: 100%; }
        }

        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .animate-fade-in { animation: fade-in 0.6s ease-out; }
        .animate-scale-in { animation: scale-in 0.5s ease-out; }
        .animate-shake { animation: shake 0.3s ease-in-out; }
      `}</style>
    </div>
  );
};

export default GetPetMicrochipped;   



