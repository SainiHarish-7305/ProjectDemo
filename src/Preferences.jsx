import { useNavigate } from "react-router-dom";
import LocationDropdown from "./LocationDropdown";
import CheckboxComponent from "./NewsLetter";
const Preferences = ({ selectedCountry, setSelectedCountry,


  selectedState, setSelectedState,
  selectedCity, setSelectedCity, selectedPlan, setSelectedPlan, isNewsletterSubscribed, setIsNewsletterSubscribed }) => {

  const navigate = useNavigate();

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleNewsletterChange = (checked) => {
    setIsNewsletterSubscribed(checked);
  };

  const handleNext = () => {
    // You can pass data via route or global state here
    console.log('Selected Plan:', selectedPlan);
    console.log('Subscribed to Newsletter:', isNewsletterSubscribed);
    navigate('/summary');
  };

  return (

    <div className="subscription-container">
      <div className="location-section">
        <LocationDropdown
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity} />
      </div>

      <div className="subscription-section">
        <h3>Subscription Plan</h3>
        <form className="plan-form">
          <div className="plan-options">
            <label>
              <input
                type="radio"
                name="Plan"
                value="Basic"
                checked={selectedPlan === 'Basic'}
                onChange={handlePlanChange}
              /> Basic
            </label>
            <label>
              <input
                type="radio"
                name="Plan"
                value="Pro"
                checked={selectedPlan === 'Pro'}
                onChange={handlePlanChange}
              /> Pro
            </label>
            <label>
              <input
                type="radio"
                name="Plan"
                value="Enterprise"
                checked={selectedPlan === 'Enterprise'}
                onChange={handlePlanChange}
              /> Enterprise
            </label>
          </div>

          <div className="newsletter-container">
            <h3>Newsletter</h3>
            <CheckboxComponent
              checked={isNewsletterSubscribed}
              onChange={handleNewsletterChange}
            />
          </div>

          <button className="btn btn-primary" type="button" onClick={handleNext}>
            Next
          </button>
        </form>

        <style>{`
          .subscription-section {
            max-width: 600px;
            margin: 30px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-family: sans-serif;
          }

          .plan-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .plan-options {
            display: flex;
            gap: 30px;
          }

          .newsletter-container {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          label {
            display: flex;
            align-items: center;
            gap: 5px;
          }
        `}</style>
      </div>

      <style jsx>{`
        .subscription-container {
          max-width: 500px;
          margin: 40px auto;
          padding: 20px;
          background-color: #fefefe;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          font-family: sans-serif;
        }

        .location-section {
          margin-bottom: 20px;
        }

        .subscription-section h3 {
          margin-bottom: 10px;
          font-size: 1.2rem;
        }

        .plan-options {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .plan-options label {
          font-weight: 500;
          cursor: pointer;
        }

        .plan-options input {
          margin-right: 6px;
        }

        .newsletter-section h3 {
          margin-bottom: 8px;
          font-size: 1.1rem;
        }
      `}</style>
    </div>





  );
}
export default Preferences;