/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Image, Text, View, pdf } from "@react-pdf/renderer";
import { pdfContainers, pdfTypography } from "@/lib/pdfStyles";

export const YourDetailsPDF: React.FC<YourDetails> = ({
  yourEmail,
  yourName,
  yourAddress,
  yourCity,
  yourState,
  yourCountry,
  yourTaxId,
  yourZip,
}) => (
  <View style={pdfContainers.YourDetails}>
    <Text style={{ ...pdfTypography.title, marginBottom: 14 }}>From</Text>

    {yourName && <Text style={pdfTypography.text2xl}>{yourName}</Text>}
    {yourEmail && (
      <Text style={{ ...pdfTypography.description, marginBottom: 12 }}>
        {yourEmail}
      </Text>
    )}
    <View style={pdfTypography.description}>
      {yourAddress && <Text>{yourAddress}</Text>}
      {(yourCity || yourState || yourZip) && (
        <Text style={{ marginBottom: 2 }}>
          {yourCity}, {yourState} {yourZip}
        </Text>
      )}
      {yourCountry && <Text style={{ marginBottom: 4 }}>{yourCountry}</Text>}
      {yourTaxId && <Text>Tax ID:{yourTaxId}</Text>}
    </View>
  </View>
);
