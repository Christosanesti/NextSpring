import { FloatingLabel } from "flowbite-react";
import { Input } from "postcss";

export default function SearchInput() {
  return (
    <>
      <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel
          variant="standard"
          label="جستجو"
          sizing="sm"
          theme={{
            label: {
              default: {
                standard: {
                  sm: "absolute top-3 right-0 -z-10 -translate-y-6 scale-75 text-xs text-black-600 transition-transform duration-300 peer-placeholder-shown:translate-y-0 ease-in-out peer-placeholder-shown:scale-100 peer-focus:right-0 peer-focus:-translate-y-6 peer-focus:scale-75 dark:text-green-500",
                },
              },
            },
          }}
        />
      </div>
    </>
  );
}
