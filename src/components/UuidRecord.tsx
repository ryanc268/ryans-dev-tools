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
    <div className="flex items-center mt-4 w-full justify-center">
      <p className="text-sm md:text-base">{order}</p>
      <h4 className="text-sm md:text-lg px-8 w-2/3 text-right">{uuid}</h4>
      <div className="w-1/3 flex justify-start">
        <CopyToClipboard text={uuid} onCopy={() => toggleCopy()}>
          <button className="px-2 py-1 md:text-base text-sm md:px-4 md:py-2 border rounded-lg hover:bg-zinc-700 flex items-center">
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
