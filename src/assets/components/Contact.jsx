import { useNavigate } from "react-router-dom";
import useDbStore from "../../store/dbStore";

const Contact = () => {
  const data = useDbStore((state) => state.data);
  const navigate = useNavigate();

  const redirectTo = (timestamp) => {
    navigate(`/um-dashboard/contact/${timestamp}`);
  };

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {Object.values(data.contact).map((person) => (
          <li
            key={person.email}
            className="flex justify-between gap-x-6 py-5"
            onClick={() => redirectTo(person.storedTimestamp)}
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person?.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {new Date(person.timestamp).toLocaleDateString()}
              </p>
              {person.read ? (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-gray-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">
                    {new Date(person.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">
                    {new Date(person.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
