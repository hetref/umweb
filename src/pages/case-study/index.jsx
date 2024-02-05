import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { client } from "../../hooks/useContentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const CaseStudy = () => {
  const [singleData, setSingleData] = useState();
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const getContentfulEntries = async () => {
      try {
        await client.getEntry(id).then((entry) => {
          console.log(entry);
          setSingleData(entry);
        });

        // console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getContentfulEntries();
  }, [id]);

  const handleClick = () => {
    console.log(singleData);
  };

  return (
    <div className="flex justify-center">
      {/* <Navbar /> */}

      <div className="flex max-w-[72rem]">
        <div className="flex-1">
          <button onClick={handleClick}>HELO</button>
          <h1>{singleData?.fields?.title}Hello</h1>
          <p>{documentToReactComponents(singleData?.fields?.description)}</p>
        </div>
        <div className="flex-1">
          {singleData?.fields?.supportedImages?.map((url) => (
            // console.log("IMAGE", url.fields.file.url);
            <img
              src={url.fields.file.url}
              alt={url.fields.file.fileName}
              key={url.sys.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
