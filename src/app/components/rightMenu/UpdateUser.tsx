"use client";

import { updateProfile } from "@/lib/actions";
import { User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useActionState, useState } from "react";
import UpdateButton from "./UpdateButton";

interface UpdateUserProps {
  user: User;
}

const UpdateUser = ({ user }: UpdateUserProps) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);
  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
    document.body.classList.remove("overflow-hidden");
    if (state.success) {
      router.refresh();
    }
  };
  const handleOpen = () => {
    setOpen(true);
    document.body.classList.add("overflow-hidden");
  };
  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  return (
    <div>
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={handleOpen}
      >
        Update
      </span>
      {/* Overlay */}
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={(formData) =>
              formAction({ formData, coverUrl: cover?.secure_url || "" })
            }
            className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 lg:w-1/3 relative"
          >
            {/* Title  */}
            <h1>Update Profile</h1>
            <div className="mt-4 text-xs text-gray-500">
              Use the navbar profile to change the avatar or username
            </div>
            {/* Picture upload  */}
            <CldUploadWidget
              uploadPreset="social"
              onSuccess={(res) => {
                setCover(res.info);
              }}
            >
              {({ open }) => {
                return (
                  <div
                    className="flex flex-col gap-4 my-4"
                    onClick={() => open()}
                  >
                    <label htmlFor="">Cover Picture</label>
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Image
                        src={user.cover || "/noCover.png"}
                        alt=""
                        width={48}
                        height={32}
                        className="w-12 h-8 rounded-md object-cover"
                      />
                      <span className="text-xs underline text-gray-600">
                        Change
                      </span>
                    </div>
                  </div>
                );
              }}
            </CldUploadWidget>

            {/* Inputs  */}
            <div className="flex flex-wrap justify-between gap-2 xl:gap-4">
              <div className="flex flex-col gap-4">
                <label className="text-xs text-gray-500">First Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder={user.name || "Hien"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-xs text-gray-500 ">Surname</label>
                <input
                  name="surname"
                  type="text"
                  placeholder={user.surname || "Giang Tuan"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-xs text-gray-500 ">Description</label>
                <input
                  name="description"
                  type="text"
                  placeholder={user.description || "Life is pink..."}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-xs text-gray-500 ">City</label>
                <input
                  name="city"
                  type="text"
                  placeholder={user.city || "New York"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-xs text-gray-500 ">School</label>
                <input
                  name="school"
                  type="text"
                  placeholder={user.school || "HCMUT"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-xs text-gray-500 ">Work</label>
                <input
                  name="work"
                  type="text"
                  placeholder={user.work || "Apple"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-xs text-gray-500 ">Website</label>
                <input
                  name="website"
                  type="text"
                  placeholder={user.website || "frontendscratch.dev"}
                  className="ring-1 ring-gray-300 p-[13px] rounded-md text-xs"
                />
              </div>
            </div>
            <UpdateButton />
            {/* <button className="bg-blue-500 p-2 mt-2 rounded-md text-white">
              Update
            </button> */}
            {state.success && (
              <span className="text-green-500 bg-green-100 py-1 px-2 rounded-md ">
                Profile has been updated!
              </span>
            )}
            {state.error && (
              <span className="text-red-500 bg-red-100 px-2 py-1 rounded-md ">
                Something went wrong, please try again!
              </span>
            )}
            <div
              className="absolute text-lg right-2 top-3 cursor-pointer"
              onClick={handleClose}
            >
              X
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
