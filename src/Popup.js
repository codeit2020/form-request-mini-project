import React, { useEffect, useState } from "react";
import "./Popup.css";

export default function Popup(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Automatically show the popup when the component mounts
    setIsVisible(true);
  }, []);

  const handleOverlayClick = () => {
    // Hide the popup when clicking on the overlay
    setIsVisible(false);
  };

  return (
    <div>
      <div>
        {isVisible &&
          (props.phoneNumber.length > 12 || props.phoneNumber.length < 10) && (
            <div className="popup" onClick={handleOverlayClick}>
              <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h2>Phone number problem</h2>
                <p>The phone number format is not correct</p>
              </div>
            </div>
          )}
      </div>

      <div>
        {isVisible && (props.age < 18 || props.age > 100) && (
          <div className="popup" onClick={handleOverlayClick}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h2>Age problem</h2>
              <p>The age is out of allowed range</p>
            </div>
          </div>
        )}
      </div>

      <div>
        {isVisible &&
          props.phoneNumber.length <= 12 &&
          props.phoneNumber.length >= 10 &&
          props.age >= 18 &&
          props.age <= 100 && (
            <div className="popup" onClick={handleOverlayClick}>
              <div
                className="popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h2>Success</h2>
                <p>Your request was successfully submitted </p>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
