import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const YourDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Your Details</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. jose@big.partners"
      variableName="yourEmail"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Your Name"
      placeholder="Jose"
      variableName="yourName"
    />
    <CustomTextInput
      label="Address"
      placeholder="Gascon 1409"
      variableName="yourAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="CABA"
      variableName="yourCity"
    />
    <CustomTextInput
      label="State"
      placeholder="Buenos Aires"
      variableName="yourState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder="1111"
      variableName="yourZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="Argentina"
      variableName="yourCountry"
    />
  </div>
);
