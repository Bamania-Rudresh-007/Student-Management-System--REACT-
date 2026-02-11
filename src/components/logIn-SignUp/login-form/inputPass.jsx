import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function EyeButton({ passType, setPassType }) {
  const [hide, setHide] = useState(false);

  const handleShow = () => {
    if (passType === "password") {
      setPassType("text");
      setHide(true);
    } else {
      setPassType("password");
      setHide(false);
    }
  };

  return (
    <div className="pr-3.5">
      <button className="cursor-pointer" onClick={handleShow}>
        {hide ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

function InputPass({
  lab,
  htmlFor,
  id,
  type,
  onUpdate,
  placeholder,
  passType,
  setPassType,
  value,
}) {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
          {lab}
        </label>
        <div className="flex items-center border rounded-md">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="mt-1 px-3 py-2  focus:outline-none  w-5/5"
            onChange={onUpdate}
            value={value}
          />
          <EyeButton setPassType={setPassType} passType={passType} />
        </div>
      </div>
    </div>
  );
}

export default InputPass;
