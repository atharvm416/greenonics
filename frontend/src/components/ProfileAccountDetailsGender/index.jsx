import React from "react";
import { Radio, Text, RadioGroup } from "./..";

export default function ProfileAccountDetailsGender({ gender = "Gender", ...props }) {
  return (
    <RadioGroup {...props} name="gender">
      <Text as="p" className="!text-red-900 !font-poppins">
        {gender}
      </Text>
      <Radio value="male" label="Male" className="ml-3 pl-2 text-red-900 font-poppins font-light" />
      <Radio value="female" label="Female" className="ml-[13px] pl-2 gap-2 text-red-900 font-poppins font-light" />
      <Radio value="other" label="Other" className="ml-3.5 mr-[3px] pl-2 gap-2 text-red-900 font-poppins font-light" />
    </RadioGroup>
  );
}
