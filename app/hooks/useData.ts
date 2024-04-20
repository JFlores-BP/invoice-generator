import useItemParams from "@/app/hooks/useItemsParams";
import { useGetValue } from "@/app/hooks/useGetValue";

export const useData = () => {
  const yourEmail = useGetValue("yourEmail");
  const yourName = useGetValue("yourName");
  const yourAddress = useGetValue("yourAddress");
  const yourCity = useGetValue("yourCity");
  const yourState = useGetValue("yourState");
  const yourCountry = useGetValue("yourCountry");
  const yourLogo = useGetValue("yourLogo");
  const yourTaxId = useGetValue("yourTaxId");
  const yourZip = useGetValue("yourZip");

  const email = useGetValue("email");
  const companyName = useGetValue("companyName");
  const companyAddress = useGetValue("companyAddress");
  const companyCity = useGetValue("companyCity");
  const companyState = useGetValue("companyState");
  const companyCountry = useGetValue("companyCountry");
  const companyLogo = useGetValue("companyLogo");
  const companyTaxId = useGetValue("companyTaxId");
  const companyZip = useGetValue("companyZip");

  const note = useGetValue("note");
  const discount = useGetValue("discount");
  const taxRate = useGetValue("tax");
  const { items } = useItemParams();

  const bankName = useGetValue("bankName");
  const accountNumber = useGetValue("accountNumber");
  const accountName = useGetValue("accountName");
  const routingCode = useGetValue("routingCode");
  const swiftCode = useGetValue("swiftCode");
  const ifscCode = useGetValue("ifscCode");

  const invoiceNumber = useGetValue("invoiceNo");
  const issueDate = useGetValue("issueDate");
  const dueDate = useGetValue("dueDate");

  const currencyType = useGetValue("currency") || "INR";

  const invoiceTerms = {
    invoiceNumber,
    issueDate,
    dueDate,
  };

  const invoiceDetails = {
    note,
    discount,
    taxRate,
    items,
    currencyType,
  };

  const paymentDetails = {
    bankName: bankName,
    accountNumber: accountNumber,
    accountName: accountName,
    routingCode: routingCode,
    swiftCode: swiftCode,
    ifscCode: ifscCode,
  };

  const yourDetails = {
    yourName,
    yourAddress,
    yourCity,
    yourState,
    yourCountry,
    yourLogo,
    yourEmail,
    yourTaxId,
    yourZip,
  };

  const companyDetails = {
    companyName,
    companyAddress,
    companyCity,
    companyState,
    companyCountry,
    companyLogo,
    companyTaxId,
    companyZip,
    email,
  };

  return {
    companyDetails,
    yourDetails,
    paymentDetails,
    invoiceTerms,
    invoiceDetails,
  };
};
