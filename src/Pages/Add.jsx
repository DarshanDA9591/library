import React from "react";
import TopLabel from "../Components/TopLabel";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom"; // Import useNavigate


const Add = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigate = () => {
    navigate("/products"); // Navigate to the home page
  };
  const BasicInformation = [
    "Text Book Name",
    "Author",
    "Book ID",
    "Published Date",
  ];
  const ProductDetails = [
    "Book Category",
    "Book Sub-Category",
    "Features",
    "Description",
    "Published Date",
    "Tags",
    "Brief Description",
    "Book Images",
  ];

  return (
    <div className="flex flex-col items-start h-full overflow-auto box-border pr-[3%] pb-[3%] bg-[#F8F9FF] gap-3">
      <TopLabel
        label={"Add Books"}
        color="#211951"
        backgroundColor="white"
      />

      {/* Basic Information Section */}
      <TopLabel label={"Basic Information"} />
      <div className="grid-container">
        {BasicInformation.map((element, index) => (
          <div key={index} className="grid-item">
            <label className="input-label">{element}</label>
            <input
              type={element === "Published Date" ? "date" : "text"}
              placeholder={`Enter ${element}`}
              className="custom-input"
            />
          </div>
        ))}
      </div>

      {/* Book Details Section */}
      <TopLabel label={"Book Details"}
      color="#211951"
      backgroundColor="white" />
      <div className="grid-container">
        {ProductDetails.map((element, index) => {
          let inputType = "text";
          let placeholder = `Enter ${element}`;
          let accept = null;

          if (element === "Book Category" || element === "Book Sub-Category") {
            return (
              <div key={index} className="grid-item">
                <label className="input-label">{element}</label>
                <select className="custom-input">
                  <option value="">{`Select ${element}`}</option>
                  <option value="option1">Type 1</option>
                  <option value="option2">Type 2</option>
                  <option value="option3">Type 3</option>
                </select>
              </div>
            );
          } else if (element === "Published Date") {
            inputType = "date";
          } else if (element === "Brief Description") {
            inputType = "textarea";
          } else if (element === "Book Images") {
            inputType = "file";
            placeholder = "Drag or browse to upload Product Images";
            accept = "image/*";
          }

          return (
            <div key={index} className="grid-item">
              <label className="input-label">{element}</label>
              <input
                type={inputType}
                placeholder={placeholder}
                accept={accept}
                className="custom-input"
              />
            </div>
          );
        })}
      </div>

      {/* Add a continuously animating button */}
      <div className="mt-5">
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          style={{
            animation: "pulse 2s infinite",
            color: "white",
            border: "none",
          }}
          onClick={handleNavigate}
        >
          Send
        </Button>
        <style>{`
  @keyframes pulse {
    0% {
      background-color: green;
      transform: scale(1);
    }
    50% {
      background-color: limegreen;
      transform: scale(1.05);
    }
    100% {
      background-color: green;
      transform: scale(1);
    }
  }
  .button-container {
    display: flex;
    justify-content: flex-end; /* Align button to the right */
    margin-top: 20px; /* Add spacing from the content above */
    margin-left:50%
  }
  .custom-input {
    width: 100%;
    padding: 10px;
    border: 1px solid black;
    background-color: #D0E7FF;
    color: #333;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
  }
  .custom-input:focus {
    border: 2px solid #333;
  }
  textarea.custom-input {
    resize: none;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    width: 100%;
  }
  .grid-item {
    display: flex;
    flex-direction: column;
  }
  .input-label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }
`}</style>
      </div>
    </div>
  );
};

export default Add;
