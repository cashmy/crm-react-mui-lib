import React, { useState } from "react";

interface TextOrSelectControlProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const TextOrSelectControl: React.FC<TextOrSelectControlProps> = ({
  value,
  onChange,
  options,
}) => {
  const [isCustom, setIsCustom] = useState(!options.includes(value));

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue === "custom") {
      setIsCustom(true);
      onChange(""); // Clear the value for custom input
    } else {
      setIsCustom(false);
      onChange(selectedValue);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {!isCustom ? (
        <select value={value} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
          <option value="custom">Custom</option>
        </select>
      ) : (
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Enter custom value"
        />
      )}
    </div>
  );
};

export default TextOrSelectControl;
