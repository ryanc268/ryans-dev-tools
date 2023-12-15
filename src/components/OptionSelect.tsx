"use client";

import { OptionSelectStyle } from "@/global/enums";
import { RadioGroup } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface OptionSelectProps<T> {
  enum: T;
  state: [T[keyof T], React.Dispatch<React.SetStateAction<T[keyof T]>>];
  style?: OptionSelectStyle;
}

const OptionSelect = <T extends { [id: string]: string | number }>({
  enum: enumType,
  state,
  style,
}: OptionSelectProps<T>) => {
  const [activeOption, setActiveOption] = state;

  const styles = (active: boolean, checked: boolean) => {
    switch (style) {
      case OptionSelectStyle.CYAN:
        return classNames(
          active ? "ring-2 ring-cyan-600 ring-offset-2" : "",
          checked
            ? "border-transparent bg-cyan-custom hover:bg-cyan-500"
            : "bg-tr border-gray-200 hover:bg-cyan-500",
          "flex items-center justify-center rounded-md border p-2 text-xs md:text-sm 2xl:text-base font-medium uppercase flex-1",
        );
      case OptionSelectStyle.GRAY:
        return classNames(
          active ? "ring-2 ring-zinc-500 ring-offset-2" : "",
          checked
            ? "border-transparent bg-zinc-600 hover:bg-zinc-700"
            : "bg-tr border-gray-200 hover:bg-zinc-700",
          "flex items-center justify-center rounded-md border p-2 text-xs md:text-sm 2xl:text-base font-medium uppercase flex-1",
        );
      case OptionSelectStyle.INDIGO:
      default:
        return classNames(
          active ? "ring-2 ring-indigo-500 ring-offset-2" : "",
          checked
            ? "border-transparent bg-indigo-600 hover:bg-indigo-700"
            : "bg-tr border-gray-200 hover:bg-indigo-700",
          "flex items-center justify-center rounded-md border p-2 text-xs md:text-sm 2xl:text-base font-medium uppercase flex-1",
        );
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <RadioGroup
        value={activeOption}
        onChange={(e) => setActiveOption(e)}
        className="w-full"
      >
        <div className="flex flex-row items-center justify-center gap-2 md:gap-4 scale-90 md:scale-100">
          {Object.values(enumType).map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ active, checked }) => styles(active, checked)}
            >
              <RadioGroup.Label as="span">{option}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default OptionSelect;
