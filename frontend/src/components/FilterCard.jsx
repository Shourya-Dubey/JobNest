import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSeachedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Banglore", "Hydrabad", "Pune", "Mumbar"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developoer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40K", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {

  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState("");

  const changeHandler = (value) => {
    setSelectedValue(value);
  }

  useEffect(()=>{
    dispatch(setSeachedQuery(selectedValue));
  },[selectedValue])

  return (
    <div className="w-full bg-white p-5 rounded-md">
      <h1 className="font-semibold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup 
        value={selectedValue}
        onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-semibold text-lg">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index-idx}` // to generate unique id
              return (
                <div key={idx}
                 className="flex items-center space-x-2 my-2">
                  <RadioGroupItem 
                   id={itemId}
                   value={item} />
                  <Label htmlFor={itemId}>
                   {item}
                  </Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
