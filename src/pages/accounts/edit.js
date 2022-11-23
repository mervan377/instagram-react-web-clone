import { getUserInfo, setUserFirestore } from "firebase.js";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form, Formik, Field } from "formik";
import { NavLink } from "react-router-dom";
import { EditSchema } from "validation";
import { useSelector } from "react-redux";

export default function Edit() {
  const [user, setUser] = useState(null);
  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    getUserInfo(currentUser.username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);

  const submitHandle = (e) => {
    setUserFirestore(e);
  };

  return (
    user && (
      <div className="px-6 flex w-[696px] items-center flex-col py-8">
        <Formik
          initialValues={{
            fullName: user.fullName,
            username: user.username,
            website: user.website,
            bio: user.bio,
            email: user.email,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
          }}
          validationSchema={EditSchema}
          onSubmit={submitHandle}
        >
          {({ isSubmitting, isValid, dirty, values, errors, touched }) => (
            <Form className="flex flex-col gap-y-8">
              <div className="flex">
                <div className="flex w-[194px] items-end justify-end">
                  <img
                    src="https://pbs.twimg.com/profile_images/1502055692471087125/MadX2ZVE_400x400.jpg"
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />
                </div>
                <div className="w-[502px] pl-4">
                  <p className="text-[20px] leading-6">{user.username}</p>
                  <p className="text-[14px] text-brand font-semibold">
                    <NavLink to={"edit"}>Change profile photo</NavLink>
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="flex w-[194px] items-start justify-end font-semibold">
                  Name
                </div>
                <div className="w-[502px] pl-4 pr-[147px] gap-y-3 flex flex-col">
                  <Field
                    name="fullName"
                    className="border-[#dbdbdb] border box-border px-[10px] h-8 w-full"
                  />
                  {errors.fullName && touched.fullName ? (
                    <div>{errors.fullName}</div>
                  ) : null}
                  <p className="text-[12px] text-[#8e8e8e]">
                    In most cases, you'll be able to change your username back
                    to mervan37 for another 14 days.{" "}
                    <NavLink className="text-brand">Learn more</NavLink>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[194px] items-start justify-end font-semibold">
                  Username
                </div>
                <div className="w-[502px] pl-4 pr-[147px] gap-y-3 flex flex-col">
                  <Field
                    name="username"
                    className="border-[#dbdbdb] border box-border px-[10px] h-8 w-full rounded"
                  />
                  {errors.username && touched.username ? (
                    <div>{errors.username}</div>
                  ) : null}
                  <p className="text-[12px] text-[#8e8e8e]">
                    You are using the same name on Instagram and Facebook. Go to
                    Facebook to change your name.
                    <NavLink className="text-brand">Change Name</NavLink>
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[194px] items-start justify-end font-semibold">
                  Website
                </div>
                <div className="w-[502px] pl-4 pr-[147px] gap-y-3 flex flex-col">
                  <Field
                    name="website"
                    className="border-[#dbdbdb] border box-border px-[10px] h-8 w-full rounded"
                  />
                  {errors.Website && touched.Website ? (
                    <div>{errors.Website}</div>
                  ) : null}
                  <p className="text-[12px] text-[#8e8e8e]">
                    Editing your links is only available on mobile. Visit the
                    Instagram app and edit your profile to change the websites
                    in your bio.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[194px] items-start justify-end font-semibold">
                  Bio
                </div>
                <div className="w-[502px] pl-4 pr-[147px] gap-y-3 flex flex-col">
                  <Field
                    as="textarea"
                    name="bio"
                    className="border-[#dbdbdb] border px-[10px] h-20 w-full rounded"
                  />
                  {errors.bio && touched.bio ? <div>{errors.bio}</div> : null}
                  <p className="text-[12px] text-[#8e8e8e]">
                    {41} / 150 
                  </p>

                  <p className="text-[12px] text-[#8e8e8e]">
                    <p>Personal information</p>
                    Provide your personal information, even if the account is
                    used for a business, a pet or something else. This won't be
                    a part of your public profile.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[194px] items-start justify-end font-semibold">
                  Email
                </div>
                <div className="w-[502px] pl-4 pr-[147px] gap-y-3 flex flex-col">
                  <Field
                    name="email"
                    className="border-[#dbdbdb] border box-border px-[10px] h-8 w-full rounded"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[194px] items-start justify-end font-semibold">
                  Phone number
                </div>
                <div className="w-[502px] pl-4 pr-[147px] gap-y-3 flex flex-col">
                  <Field
                    name="phoneNumber"
                    className="border-[#dbdbdb] border box-border px-[10px] h-8 w-full rounded"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div>{errors.phoneNumber}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[194px] items-start justify-end font-semibold">
                  Gender
                </div>
                <div className="w-[502px] pl-4 pr-[147px] gap-y-3 flex flex-col">
                  <Field
                    component="select"
                    name="gender"
                    className="border-[#dbdbdb] border box-border px-[10px] h-8 w-full rounded"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="nottosay">Prefer not to say</option>
                  </Field>
                  {errors.gender && touched.gender ? (
                    <div>{errors.gender}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[194px] items-start justify-end font-semibold text-right">
                  Similar account suggestions
                </div>
                <div className="w-[502px] pl-4 pr-[147px] gap-y-3 flex">
                  <div className="flex gap-x-2 justify-start items-start">
                    <Field
                      type="checkbox"
                      className="border-[#dbdbdb] border box-border px-[10px] h-4 rounded mt-1"
                    />
                    <p className="flex-nowrap pr-20 font-semibold text-sm">
                      Include your account when recommending similar accounts
                      people might want to follow.{" "}
                      <NavLink className="text-brand">[?]</NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex w-[194px] items-start justify-end font-semibold text-right"></div>
                <div className="w-[502px] pl-4 gap-y-3 flex pr-[130px]">
                  <button
                    type="submit"
                    className="bg-brand h-[30px] w-[65px] border border-white py-[5px] px-[9px] text-sm text-white font-semibold "
                  >
                    Submit
                  </button>
                  <div className="w-full font-semibold text-sm justify-end items-end flex">
                    <NavLink className="text-brand">
                      Temporarily deactivate my account
                    </NavLink>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    )
  );
}
