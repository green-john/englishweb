import React from "react";

export default function InputWithLabel({label = '', fieldId = '', useTextArea = false, value = '', onChange}) {
    return <div className="col-span-6 sm:col-span-5 md:col-span-4">
        <label htmlFor="email-address" className="block">
            {label}
        </label>
        {!useTextArea &&
        <input
          type="text"
          name={fieldId}
          id={fieldId}
          autoComplete={fieldId}
          value={value}
          onChange={onChange}
          className="mt-1 border h-8 block w-full border-gray-400 rounded-md"
        />}
        {useTextArea &&
        <div className="mt-1">
            <textarea
              id={fieldId}
              name={fieldId}
              rows={3}
              className="mt-1 block w-full border border-gray-400 rounded-md"
              placeholder=""
              value={value}
              onChange={onChange}
            />
        </div>}
    </div>
}
