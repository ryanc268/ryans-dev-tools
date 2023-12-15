"use client";

import { useEffect, useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineRefresh } from "react-icons/md";
import { BsClipboard2, BsClipboard2Check } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import UuidRecord from "./UuidRecord";

const SingleUuidPage = () => {
  const [mainUuid, setMainUuid] = useState(crypto.randomUUID());
  const [isCopied, setIsCopied] = useState(false);
  const [isHistoryAsc, setIsHistoryAsc] = useState(false);
  const [uuidHistory, setUuidHistory] = useState<string[]>([]);

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

  const refreshUuid = () => {
    setUuidHistory((h) => (isHistoryAsc ? [...h, mainUuid] : [mainUuid, ...h]));
    setMainUuid(crypto.randomUUID());
    console.log("Refreshing");
  };

  const toggleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const clearHistory = () => {
    setUuidHistory([]);
  };

  const reOrderHistory = (isAsc: boolean) => {
    if (isHistoryAsc != isAsc) {
      setUuidHistory([...uuidHistory].reverse());
      setIsHistoryAsc(isAsc);
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mt-8 flex flex-col items-center md:w-3/4 md:flex-row 2xl:w-1/2">
        <h4 className="px-4 text-right md:w-2/3 md:px-8 md:text-xl">
          {mainUuid}
        </h4>
        <div className="my-2 flex w-1/2 items-center justify-center md:my-0 md:w-1/3 md:justify-start">
          <button
            className="mr-8 flex rounded-lg border p-1 text-lg hover:bg-zinc-700 md:mr-4 md:p-2 md:text-xl"
            onClick={() => refreshUuid()}
            onKeyDown={(e) => e.preventDefault()}
            ref={buttonRef}
          >
            <MdOutlineRefresh />
          </button>
          <CopyToClipboard text={mainUuid} onCopy={() => toggleCopy()}>
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
      </div>
      {uuidHistory.length > 0 && (
        <div className="flex w-full flex-col items-center justify-center px-4">
          <div className="mt-4 flex w-full items-center justify-between md:mb-4 md:mt-8 md:w-3/4 2xl:w-1/2">
            <div className="flex items-center">
              <h4 className="md:text-2xl">History</h4>
              <div className="ml-4 flex flex-col md:text-2xl">
                <button onClick={() => reOrderHistory(true)}>
                  <IoMdArrowDropup />
                </button>
                <button onClick={() => reOrderHistory(false)}>
                  <IoMdArrowDropdown />
                </button>
              </div>
            </div>
            <button
              className="rounded-lg border px-2 py-1 text-sm hover:bg-zinc-700 md:px-4 md:py-2 md:text-base"
              onClick={() => clearHistory()}
            >
              Clear History
            </button>
          </div>
          <hr className="my-2 w-full border-zinc-300 md:w-3/4 2xl:w-1/2" />
        </div>
      )}
      <div className="mx-4 flex h-[55vh] flex-col overflow-y-auto md:mx-0 md:h-[50vh] md:w-3/4 2xl:w-1/2">
        {uuidHistory.map((u, i) => (
          <>
            <UuidRecord
              key={i}
              order={isHistoryAsc ? i + 1 : uuidHistory.length - i}
              uuid={u}
            />
            {i != uuidHistory.length - 1 && (
              <hr className="mt-4 w-3/4 self-center border-dashed border-zinc-400 opacity-60" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default SingleUuidPage;
