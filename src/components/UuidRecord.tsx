import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BsClipboard2, BsClipboard2Check } from "react-icons/bs";

interface UuidRecordProps {
  order: number;
  uuid: string;
}

const UuidRecord: React.FC<UuidRecordProps> = ({ order, uuid }) => {
  const [isCopied, setIsCopied] = useState(false);

  const toggleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="mt-4 flex w-full items-center justify-center">
      <p className="text-sm md:text-base">{order}</p>
      <h4 className="w-2/3 px-8 text-right text-sm md:text-lg">{uuid}</h4>
      <div className="flex w-1/3 justify-start">
        <CopyToClipboard text={uuid} onCopy={() => toggleCopy()}>
          <button className="flex items-center rounded-lg border px-2 py-1 text-sm hover:bg-zinc-700 md:px-4 md:py-2 md:text-base">
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
  );
};

export default UuidRecord;
