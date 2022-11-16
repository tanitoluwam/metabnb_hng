import React from "react";
import metaMaskLogo from "../../assets/images/metaMaskModal.png";
import walletConnectLogo from "../../assets/images/walletConnect.png";
import arrow from "../../assets/images/Arrow.png";

export const Modal = () => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              class="modal-title fs-5"
              id="exampleModalLabel"
              className="fs-5"
            >
              Connect Wallet
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p className="mt-2">Choose your preferred wallet:</p>
            <div className="d-flex justify-content-between align-items-center py-1 px-1 mb-2 active_modal rounded mt-2">
              <img src={metaMaskLogo} alt="" />
              <img src={arrow} alt="" />
            </div>
            <div className="d-flex justify-content-between align-items-center py-1 px-1 rounded">
              <img src={walletConnectLogo} alt="" />
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
