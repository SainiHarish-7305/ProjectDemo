import 'bootstrap/dist/css/bootstrap.min.css'
import ProfessinalDetails from './ProfessionalDetails';
// import Preferences from './Preferences';
import PersonalDetails from './PersonalInfo';
import Preferences from './Preferences';
import { Routes, Route, Link } from 'react-router-dom';
import Summary from './Summary';
import { useState } from 'react';
function App() {

  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [customGender, setCustomGender] = useState('');

  const [profession, setProfession] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');



  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('Basic');
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(true);

  return (

    <div>
      <Routes>
        <Route path="/" element={<PersonalDetails username={username} setUsername={setUsername} currentPassword={currentPassword} setCurrentPassword={setCurrentPassword} newPassword={newPassword} setNewPassword={setNewPassword} customGender={customGender} setCustomGender={setCustomGender} />} />
        <Route path="/professionaldetails" element={<ProfessinalDetails profession={profession} setProfession={setProfession} companyName={companyName} setCompanyName={setCompanyName} address={address} setAddress={setAddress} />} />
        <Route path="/preferences" element={<Preferences
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} isNewsletterSubscribed={isNewsletterSubscribed} setIsNewsletterSubscribed={setIsNewsletterSubscribed} />} />
        <Route path="/summary" element={<Summary

          username={username}
          currentPassword={currentPassword}
          newPassword={newPassword}
          profession={profession}
          gender={customGender}
          companyName={companyName}
          address={address}
          country={selectedCountry}
          state={selectedState}
          city={selectedCity}
          subscriptionPlan={selectedPlan}
          newsletter={isNewsletterSubscribed}
        />} />
      </Routes>
    </div>
  );
}

export default App;
