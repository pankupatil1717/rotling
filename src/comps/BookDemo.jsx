import React from "react";

export default function BookDemo() {
    return (
        <div className=" mt-0">
            <div className="container ">
                <div className="form-container">
                    <h2 className="text-center mb-4">Free Demo Request</h2>
                    <p className="text-center mb-4">
                        Please provide additional details to proceed
                    </p>
                    <form>
                        <div className="mb-3">
                            <label for="name" className="form-label">
                                Name*
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="pincode" className="form-label">
                                Pin Code*
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="pincode"
                                placeholder="Pin code"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="mobile" className="form-label">
                                Mobile Number*
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="mobile"
                                placeholder="Mobile"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">
                                Email Address*
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label for="waterPurifier" className="form-label">
                                Please select the water purifier*
                            </label>
                            <select className="form-select" id="waterPurifier" required>
                                <option value="">Select</option>
                                <option value="purifier1">Purifier 1</option>
                                <option value="purifier2">Purifier 2</option>
                                <option value="purifier3">Purifier 3</option>
                            </select>
                        </div>
                        <div className="form-check mb-3">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="marketingConsent"
                            />
                            <label className="form-check-label" for="marketingConsent">
                                I agree to receiving marketing communications from the Trusted
                                Unilever Brands.
                            </label>
                        </div>
                        <div className="info-text mb-4">
                            By proceeding, I agree to the HUL T&C & Privacy Notice.
                        </div>
                        <div className="form-footer">
                            <button type="button" className="btn btn-custom w-100 me-2">
                                Home Consultation
                            </button>
                            <button type="button" className="btn btn-custom w-100">
                                Video Consultation
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
