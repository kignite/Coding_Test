import React from "react";

export default function AuthInput({
  title,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="input-wrapper">
      <span>
        <span> {title} </span>
        <input
          type={type}
          placeholder={placeholder}
          value={value || ""}
          onChange={(e) => {
            onChange?.(e.target.value);
          }}
        />
      </span>
    </div>
  );
}
