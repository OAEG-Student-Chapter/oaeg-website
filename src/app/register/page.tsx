import React from "react";

const Register = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url("/images/exco2024.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "contain",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 z-10 bg-black opacity-70"></div>
      <div className="relative max-w-3xl mx-auto my-24 p-6 bg-white rounded-lg shadow-md z-10 overflow-y-auto opacity-90">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
          Old Anandian Engineers’ Guild: Members Registration Form
        </h1>
        <p className="text-gray-600 mb-4">
          Application for the Registration of Corporate Members of OAEG (Life
          Membership)
        </p>
        <p className="font-semibold mb-2">
          Please arrange photos or PDFs of the following:
        </p>
        <ul className="list-disc pl-5 text-gray-700 mb-4">
          <li>
            The “Degree Certificate” or the “University Transcript” or “IESL
            Membership Card”
          </li>
          <li>
            Payment Confirmation or Bank Slip for LKR 5000 to the following Bank
            account:
          </li>
        </ul>
        <div className="bg-gray-100 p-4 rounded mb-6">
          <p className="text-gray-800 font-medium">
            Bank: <span className="font-bold">Sampath Bank</span>
          </p>
          <p className="text-gray-800 font-medium">
            Bank Account No.: <span className="font-bold">017560000707</span>
          </p>
          <p className="text-gray-800 font-medium">
            Branch:{" "}
            <span className="font-bold">Sampath Super Branch - Town Hall</span>
          </p>
          <p className="text-gray-800 font-medium">
            Account Name:{" "}
            <span className="font-bold">Old Anandian Engineers’ Guild</span>
          </p>
        </div>

        <form className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Personal Details
          </h2>
          <div>
            <label
              htmlFor="full-name"
              className="block text-gray-700 font-medium mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none  bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="name-initials"
              className="block text-gray-700 font-medium mb-1"
            >
              Name with Initials
            </label>
            <input
              type="text"
              id="name-initials"
              name="nameWithInitials"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none  bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="nickname"
              className="block text-gray-700 font-medium mb-1"
            >
              Nickname
            </label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none  bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-gray-700 font-medium mb-1"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dateOfBirth"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="mobile-phone"
              className="block text-gray-700 font-medium mb-1"
            >
              Mobile Phone
            </label>
            <input
              type="tel"
              id="mobile-phone"
              name="mobilePhone"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="home-phone"
              className="block text-gray-700 font-medium mb-1"
            >
              Home Phone (Landline)
            </label>
            <input
              type="tel"
              id="home-phone"
              name="homePhone"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="postal-address"
              className="block text-gray-700 font-medium mb-1"
            >
              Postal Address
            </label>
            <textarea
              id="postal-address"
              name="postalAddress"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            ></textarea>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            School Details
          </h2>

          <div>
            <label
              htmlFor="year-al"
              className="block text-gray-700 font-medium mb-1"
            >
              Year of First Sitting for A/L
            </label>
            <input
              type="number"
              id="year-al"
              name="yearAL"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="oba-member"
              className="block text-gray-700 font-medium mb-1"
            >
              Are you an OBA Member?
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="oba-yes"
                  name="obaMember"
                  value="yes"
                  className="form-radio text-black"
                  required
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="oba-no"
                  name="obaMember"
                  value="no"
                  className="form-radio text-black"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="oba-membership"
              className="block text-gray-700 font-medium mb-1"
            >
              OBA Membership Number (If Available)
            </label>
            <input
              type="text"
              id="oba-membership"
              name="obaMembership"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
            />
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            University Details
          </h2>

          <div>
            <label
              htmlFor="university"
              className="block text-gray-700 font-medium mb-1"
            >
              University / Institution
            </label>
            <input
              type="text"
              id="university"
              name="university"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="faculty"
              className="block text-gray-700 font-medium mb-1"
            >
              Faculty
            </label>
            <input
              type="text"
              id="faculty"
              name="faculty"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="degree"
              className="block text-gray-700 font-medium mb-1"
            >
              Degree Awarded
            </label>
            <input
              type="text"
              id="degree"
              name="degree"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="specialization"
              className="block text-gray-700 font-medium mb-1"
            >
              Field of Specialization
            </label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="graduation-year"
              className="block text-gray-700 font-medium mb-1"
            >
              Year of Graduation
            </label>
            <input
              type="number"
              id="graduation-year"
              name="graduationYear"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            IESL Membership Details
          </h2>

          <div>
            <label
              htmlFor="iesl-membership"
              className="block text-gray-700 font-medium mb-1"
            >
              IESL Membership Type
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="student"
                  name="ieslMembership"
                  value="student"
                  className="form-radio text-black"
                  required
                />
                <span>Student</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="associate-member"
                  name="ieslMembership"
                  value="associateMember"
                  className="form-radio text-black"
                />
                <span>Associate Member</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="corporate-member"
                  name="ieslMembership"
                  value="corporateMember"
                  className="form-radio text-black"
                />
                <span>Corporate Member</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="fellow-member"
                  name="ieslMembership"
                  value="fellowMember"
                  className="form-radio text-black"
                />
                <span>Fellow Member</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="not-a-member"
                  name="ieslMembership"
                  value="notAMember"
                  className="form-radio text-black"
                />
                <span>Not A Member</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="other"
                  name="ieslMembership"
                  value="other"
                  className="form-radio text-black"
                />
                <span>Other:</span>
                <input
                  type="text"
                  name="ieslOther"
                  className="w-full px-4 py-1 border border-gray-500 rounded-md focus:outline-none text-black bg-transparent"
                />
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="iesl-membership-no"
              className="block text-gray-700 font-medium mb-1"
            >
              IESL Membership Number (If Available)
            </label>
            <input
              type="text"
              id="iesl-membership-no"
              name="ieslMembershipNumber"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="expertise"
              className="block text-gray-700 font-medium mb-1"
            >
              Area of Expertise
            </label>
            <textarea
              id="expertise"
              name="expertise"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            ></textarea>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Work Details
          </h2>

          <div>
            <label
              htmlFor="workplace"
              className="block text-gray-700 font-medium mb-1"
            >
              Workplace Name
            </label>
            <input
              type="text"
              id="workplace"
              name="workplace"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="workplace-address"
              className="block text-gray-700 font-medium mb-1"
            >
              Workplace Address / Nearest Town
            </label>
            <textarea
              id="workplace-address"
              name="workplaceAddress"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="designation"
              className="block text-gray-700 font-medium mb-1"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              className="w-full px-4 py-2 border border-gray-500 rounded-md focus:outline-none bg-transparent"
              required
            />
          </div>

          <div>
            <label
              htmlFor="degree-file"
              className="block text-gray-700 font-medium mb-4"
            >
              Upload Degree Certificate or University Transcript or IESL
              Membership Card
            </label>
            <label className="cursor-pointer w-full px-4 py-2 my-2 border border-gray-500 rounded-md bg-transparent text-grey-500 text-center ">
              Choose File
              <input
                type="file"
                id="degree-file"
                name="degreeFile"
                className="hidden"
                required
              />
            </label>
            <p className="text-sm text-gray-500 mt-3">
              Upload up to 5 supported files. Max 10 MB per file.
            </p>
          </div>

          <div>
            <label
              htmlFor="payment-file"
              className="block text-gray-700 font-medium mb-1"
            >
              Upload Payment Slip or Online Payment Proof (LKR 5000)
            </label>
            <div className="bg-gray-100 p-4 rounded mb-4">
              <p className="text-gray-800 font-medium">
                Bank: <span className="font-bold">Sampath Bank</span>
              </p>
              <p className="text-gray-800 font-medium">
                Bank Account No.:{" "}
                <span className="font-bold">017560000707</span>
              </p>
              <p className="text-gray-800 font-medium">
                Branch:{" "}
                <span className="font-bold">
                  Sampath Super Branch - Town Hall
                </span>
              </p>
              <p className="text-gray-800 font-medium">
                Account Name:{" "}
                <span className="font-bold">Old Anandian Engineers’ Guild</span>
              </p>
            </div>
            <label className="cursor-pointer w-full px-4 py-2 my-2 border border-gray-500 rounded-md bg-transparent text-grey-500 text-center ">
              Choose File
              <input
                type="file"
                id="payment-file"
                name="paymentFile"
                className="hidden"
                required
              />
            </label>
            <p className="text-sm text-gray-500 mt-3">
              Upload 1 supported file. Max 10 MB.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-theme-yellow text-black font-bold rounded-md "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
