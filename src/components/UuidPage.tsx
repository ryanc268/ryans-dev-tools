"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineRefresh } from "react-icons/md";
import { BsClipboard2, BsClipboard2Check } from "react-icons/bs";
import UuidRecord from "./UuidRecord";

const UuidPage = () => {
  const [mainUuid, setMainUuid] = useState(crypto.randomUUID());
  const [isCopied, setIsCopied] = useState(false);

  const [uuidHistory, setUuidHistory] = useState<string[]>([]);

  const refreshUuid = () => {
    setUuidHistory((h) => [...h, mainUuid]);
    setMainUuid(crypto.randomUUID());
  };

  const toggleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center mt-8 md:w-3/4 2xl:w-1/2 md:flex-row flex-col">
        <h4 className="md:text-xl px-4 md:px-8 md:w-2/3 text-right">
          {mainUuid}
        </h4>
        <div className="w-1/2 md:w-1/3 flex items-center md:my-0 my-2 md:justify-start justify-center">
          <button
            className="p-1 md:p-2 text-lg md:text-xl border rounded-lg hover:bg-zinc-700 mr-2 md:mr-4 flex"
            onClick={() => refreshUuid()}
          >
            <MdOutlineRefresh />
          </button>
          <CopyToClipboard text={mainUuid} onCopy={() => toggleCopy()}>
            <button className="px-2 py-1 md:px-4 md:py-2 text-sm md:text-base border rounded-lg hover:bg-zinc-700 flex items-center">
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
        <div className="w-full flex flex-col items-center md:mt-12 mt-8 mb-4">
          <h4 className="md:text-2xl">UUID History</h4>
          <hr className="border-zinc-300 w-3/4 mt-2 md:w-1/3" />
        </div>
      )}
      <div className="overflow-y-auto mx-4 md:mx-0 md:w-3/4 2xl:w-1/2 flex flex-col h-[55vh]">
        {uuidHistory.toReversed().map((u, i) => (
          <>
            <UuidRecord key={i} order={uuidHistory.length - i} uuid={u} />
            {i != uuidHistory.length - 1 && (
              <hr className="border-zinc-400 opacity-60 w-3/4 self-center mt-4 border-dashed" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default UuidPage;
