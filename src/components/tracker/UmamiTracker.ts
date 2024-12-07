// "use client";

// import { useEffect } from "react";
// import Script from "next/script";

// interface UmamiAnalyticsProps {
//   websiteId: string;
//   umamiUrl: string;
// }

// export function UmamiAnalytics({ websiteId, umamiUrl }: UmamiAnalyticsProps) {
//   useEffect(() => {
//     // This effect is used to manually init Umami if it hasn't loaded yet
//     if ((window as any).umami) {
//       (window as any).umami.trackView();
//     }
//   }, []);

//   return (
//     <Script
//       async
//       defer
//       data-website-id={websiteId}
//       src={`${umamiUrl}/script.js`}
//       onLoad={() => {
//         (window as any).umami.trackView();
//       }}
//     />
//   );
// }
