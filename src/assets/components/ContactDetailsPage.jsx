import { useParams } from "react-router-dom";
import useDbStore from "../../store/dbStore";
import RevertModal from "./RevertModal";
import useModalStore from "../../store/modalStore";

const ContactDetailsPage = () => {
  const { timestamp } = useParams();
  const data = useDbStore((state) => state.data);

  const dataArray = Object.values(data.contact);
  const filteredData = dataArray.filter(
    (contact) => contact.storedTimestamp == timestamp
  );

  const isRevertOpen = useModalStore((state) => state.isRevertOpen);
  const setIsRevertOpen = useModalStore((state) => state.setIsRevertOpen);
  const setContactName = useModalStore((state) => state.setContactName);
  const setContactEmail = useModalStore((state) => state.setContactEmail);

  console.log(isRevertOpen);

  console.log(filteredData[0]);

  const revertback = () => {
    setContactName(filteredData[0].name);
    setContactEmail(filteredData[0].email);
    setIsRevertOpen(true);
  };

  return (
    <div>
      <div className="w-full max-w-[36rem] min-w-[10rem]  mx-auto bg-gray-100 rounded-xl shadow-2xl">
        <div className="flex items-center p-3 border-b-2">
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
          </div>
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
          </div>
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
          </div>
        </div>
        <div className="p-4">
          <span>{filteredData[0].name}</span>
          <br />
          <span>{filteredData[0].phoneNo}</span>
          <br />
          <span>{filteredData[0].email}</span>
          <br />
          <span>{filteredData[0].message}</span>
          <div className="mt-4">
            <button
              onClick={revertback}
              className="bg-emerald-600 text-white px-4 py-2 rounded"
            >
              Revert Back
            </button>
          </div>
        </div>
      </div>

      <RevertModal timestamp={timestamp} />
    </div>
  );
};

export default ContactDetailsPage;
