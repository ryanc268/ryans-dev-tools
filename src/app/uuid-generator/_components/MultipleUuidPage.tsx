"use client";

import OptionSelect from "@/components/OptionSelect";
import { OptionSelectStyle, UuidCopyOptions } from "@/global/enums";
import { useEffect, useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BsClipboard2Check, BsClipboard2 } from "react-icons/bs";
import { MdOutlineRefresh } from "react-icons/md";

const MultipleUuidPage = () => {
  const [copyOption, setCopyOption] = useState<UuidCopyOptions>(
    UuidCopyOptions.REGULAR,
  );
  const [numToGenerate, setNumToGenerate] = useState<number | null>(1);
  const [uuidString, setUuidString] = useState<string>("");
  const [uuidStringSql, setUuidStringSql] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && buttonRef.current) {
        buttonRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const generateUuids = () => {
    if (!numToGenerate || numToGenerate < 1) return;
    let tempString = "";
    let tempStringSql = "(";
    for (let i = 0; i < numToGenerate; i++) {
      const uuid = crypto.randomUUID();
      tempString += uuid + "\n";
      tempStringSql += `\"${uuid}\"${i !== numToGenerate - 1 ? ", \n" : ""}`;
    }
    tempStringSql += ")";

    setUuidString(tempString);
    setUuidStringSql(tempStringSql);
  };

  const displayUuidString = () => {
    if (copyOption === UuidCopyOptions.SQL) return uuidStringSql;
    return uuidString;
  };

  const toggleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const validateNumber = (numString: string) => {
    if (!isNaN(Number(numString))) setNumToGenerate(Number(numString));
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-4 flex w-1/2 flex-col items-center">
        <h4 className="my-1 text-sm md:text-base 2xl:text-lg">
          Enter the amount to generate
        </h4>
        <div className="flex items-center justify-center">
          <input
            type="text"
            maxLength={3}
            className="w-1/2 rounded-lg border bg-transparent p-2 text-center md:w-1/4"
            value={numToGenerate || ""}
            onChange={(e) => validateNumber(e.target.value)}
          />
          <button
            className="ml-4 flex items-center rounded-lg border p-2 text-lg hover:bg-zinc-700 disabled:opacity-25 disabled:hover:bg-transparent md:text-xl"
            disabled={numToGenerate && numToGenerate > 0 ? false : true}
            onClick={() => generateUuids()}
            ref={buttonRef}
          >
            <MdOutlineRefresh />
          </button>
        </div>
      </div>
      <div className="flex w-2/3 flex-row justify-center md:w-1/3">
        <OptionSelect
          enum={UuidCopyOptions}
          state={[copyOption, setCopyOption]}
          style={OptionSelectStyle.GRAY}
        />
      </div>
      <textarea
        className="my-4 w-5/6 resize-none rounded-lg border bg-transparent p-2 text-sm md:mx-0 md:w-1/2 md:text-xl 2xl:w-1/4"
        readOnly
        rows={10}
        value={displayUuidString()}
      />
      <CopyToClipboard text={uuidString} onCopy={() => toggleCopy()}>
        <button
          className="flex items-center rounded-lg border px-2 py-1 text-sm hover:bg-zinc-700 md:px-4 md:py-2 md:text-base"
          onKeyDown={(e) => e.preventDefault()}
        >
          {isCopied ? (
            <>
              <p className="pr-1">Copied</p>
              <BsClipboard2Check />
            </>
          ) : (
            <>
              <p className="pr-1">Copy</p>
              <BsClipboard2 />
            </>
          )}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default MultipleUuidPage;
