import { useEffect, useRef, useState } from "react";

export default function Input({ label, type = "text", ...props }) {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (show) {
      setInputType("text");
      inputRef.current.focus();
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show]);
  return (
    <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-500">
      <input
        ref={inputRef}
        type={inputType}
        required={true}
        className="border w-full h-[38px] rounded-sm cursor-text outline-none  px-2 text-xs peer valid:pt-[10px]"
        {...props}
      />

      <small className="absolute left-[10px] top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none transition-all peer-valid:text-[10px] peer-valid:top-2">
        {label}
      </small>

      {type === "password" && props?.value && (
        <button
          type="button"
          onClick={() => {
            setShow((show) => !show);
          }}
          className="h-full flex items-center text-sm font-semibold pr-2 pl-2"
        >
          {show ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}
