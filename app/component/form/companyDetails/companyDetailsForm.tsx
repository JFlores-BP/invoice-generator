import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const CompanyDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">BP Details</p>
    <CustomTextInput
      label="Email"
      placeholder="e.g. leonardo@big.partners"
      variableName="email"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Company name"
      placeholder="Big Partners LLC"
      variableName="companyName"
    />
    <CustomTextInput
      label="Address"
      placeholder="Gascon 1409"
      variableName="companyAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="CABA"
      variableName="companyCity"
    />
    <CustomTextInput
      label="State"
      placeholder="Buenos Aires"
      variableName="companyState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder="1111"
      variableName="companyZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="Argentina  "
      variableName="companyCountry"
    />
  </div>
);
