"use client";
import userSwr from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());

export default function ModelSelection() {
  const { data: models, isLoading } = userSwr("models", fetchModels);

  const { data: model, mutate: setModel } = userSwr("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div className="justify-center">
      <Select
        className="mt-2"
        options={models?.modelOptions }
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654] ",
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}
