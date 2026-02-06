import React from "react";

function SignUpInput({lab, type, placeholder, id, htmlFor, onUpdate, value}) {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
          {lab}
        </label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          onChange={onUpdate}
          value={value}
        />
      </div>
    </div>
  );
}

export default SignUpInput;
