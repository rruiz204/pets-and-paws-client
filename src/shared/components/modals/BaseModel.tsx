import React from "react";

interface Props {
  title: string;
  message: string;
  children: React.ReactNode;
};

const BaseModal = ({ title, message, children }: Props): JSX.Element => {
  return (
    <div className="modal-overlay w-screen h-screen fixed z-50 top-0 right-0 bg-black bg-opacity-20">
      <div className="modal-content flex justify-center pt-16 text-cs-blue-300">

        <div className="bg-white rounded-md p-4">
          <div className="mb-6">
            <p className="text-2xl font-semibold">{title}</p>
            <hr />
            <p className="mt-2">{message}</p>
          </div>
          <div>
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default BaseModal;