"use client";

import { useState } from "react";
import SingleUuidPage from "./SingleUuidPage";
import { UuidOptions } from "@/global/enums";
import MultipleUuidPage from "./MultipleUuidPage";
import OptionSelect from "@/components/OptionSelect";

const UuidPageWrapper = () => {
  const [uuidOption, setUuidOption] = useState<UuidOptions>(UuidOptions.SINGLE);
  return (
    <div className="flex w-full flex-col items-center">
      <div className="my-2 w-full md:w-1/2">
        <OptionSelect enum={UuidOptions} state={[uuidOption, setUuidOption]} />
      </div>
      {uuidOption === UuidOptions.SINGLE && <SingleUuidPage />}
      {uuidOption === UuidOptions.MULTIPLE && <MultipleUuidPage />}
    </div>
  );
};

export default UuidPageWrapper;
