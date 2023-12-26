import PropTypes from "prop-types";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useModalStore from "../../store/modalStore";
import emailjs from "@emailjs/browser";
import { ref, update } from "firebase/database";
import { database } from "../../firebase";
import useDbStore from "../../store/dbStore";

const RevertModal = ({ timestamp }) => {
  const [message, setMessage] = useState("");
  const [messageHeader, setMessageHeader] = useState("");
  const [messageFooter, setMessageFooter] = useState("");

  const isRevertOpen = useModalStore((state) => state.isRevertOpen);
  const setIsRevertOpen = useModalStore((state) => state.setIsRevertOpen);
  const contactName = useModalStore((state) => state.contactName);
  const contactEmail = useModalStore((state) => state.contactEmail);
  const data = useDbStore((state) => state.data);

  const dataArray = Object.values(data.contact);
  const filteredData = dataArray.filter(
    (contact) => contact.timestamp == timestamp
  );

  const cancelButtonRef = useRef(null);

  const messageUser = () => {
    update(ref(database, `unscrapMedia/contact/${timestamp}`), {
      ...filteredData[0],
      read: true,
    })
      .then(() => {
        console.log("Data updated successfully");
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });

    emailjs
      .send(
        "service_0zyslu8",
        "template_ya0qcz9",
        {
          to_name: contactName,
          to_email: contactEmail,
          message_header: messageHeader,
          message: message,
          message_footer: messageFooter,
        },
        "_lFuPk3VscEw-5oGu"
      )
      .then(() => {
        console.log("Message Sent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Transition.Root show={isRevertOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setIsRevertOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="flex items-center justify-center">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Revert Back
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          You are about the send a message to {contactName}.
                        </p>
                      </div>

                      <div className="mt-6">
                        <textarea
                          name="message"
                          id="message"
                          rows="1"
                          className="shadow-sm resize-none px-4 py-2 border-2 border-emerald-600/50 focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Message Header"
                          value={messageHeader}
                          onChange={(e) => setMessageHeader(e.target.value)}
                        ></textarea>
                      </div>

                      <div className="mt-2">
                        <textarea
                          name="message"
                          id="message"
                          rows="4"
                          className="shadow-sm px-4 py-2 border-2 border-emerald-600/50 focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>

                      <div className="mt-2">
                        <textarea
                          name="message"
                          id="message"
                          rows="1"
                          className="shadow-sm resize-none px-4 py-2 border-2 border-emerald-600/50 focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          placeholder="Message Footer"
                          value={messageFooter}
                          onChange={(e) => setMessageFooter(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      messageUser();
                      setIsRevertOpen(false);
                    }}
                  >
                    Send Message
                  </button>
                  <button
                    type="button"
                    className=" inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setIsRevertOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

RevertModal.propTypes = {
  timestamp: PropTypes.string.isRequired,
};

export default RevertModal;
