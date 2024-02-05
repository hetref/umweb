// import { createClient } from "contentful";

// const useContentful = () => {
//   const client = createClient({
//     space: "92fzewabgp6w",
//     accessToken: "NmfUKul8Fug62_HcPQdCEBbPG14T2r4gIiEMRQ6bTRs",
//   });

//   const getContentfulEntries = async () => {
//     try {
//       const entries = await client.getEntry({
//         content_type: "unscrapMediaCaseStudies",
//         select: "fields",
//       });
//       return entries;
//     } catch (error) {
//       console.log(`ERROR while fetching data: ${error}`);
//     }
//   };

//   return { getContentfulEntries };
// };

// export default useContentful;

import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "92fzewabgp6w",
  accessToken: "NmfUKul8Fug62_HcPQdCEBbPG14T2r4gIiEMRQ6bTRs",
});
