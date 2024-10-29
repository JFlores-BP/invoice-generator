/* eslint-disable @next/next/no-img-element */
import React from "react";

export const YourDetailsPreview: React.FC<YourDetails> = ({
  yourEmail,
  yourName,
  yourAddress,
  yourCity,
  yourState,
  yourCountry,
  yourTaxId,
  yourZip,
}) => (
  <div>
    <p className="text-[11px] text-neutral-400 font-semibold uppercase pb-3.5">
      From
    </p>
    {yourName ? (
      <p className="text-2xl font-medium">{yourName}</p>
    ) : (
      <div className="rounded-md bg-neutral-100 h-5 w-5/6  animate-pulse mb-4" />
    )}
    {yourEmail ? (
      <p className="text-neutral-500/90 text-sm mb-3">{yourEmail}</p>
    ) : (
      <div className="rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-2" />
    )}
    <div className="text-xs text-neutral-500/80">
      {yourAddress ? (
        <p>{yourAddress}</p>
      ) : (
        <div className="rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2" />
      )}
      {yourAddress || yourState || yourZip ? (
        <p className="mb-0.5">
          {yourCity}, {yourState} {yourZip}
        </p>
      ) : (
        <div className="rounded-md bg-neutral-100 h-4 w-4/6 animate-pulse my-3" />
      )}
      {yourCountry ? (
        <p className="mb-1">{yourCountry}</p>
      ) : (
        <div className="rounded-md bg-neutral-100 h-4 w-3/6 animate-pulse my-2" />
      )}
    </div>
  </div>
);
