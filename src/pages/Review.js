import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import auth from "../firebase.config";
import "react-confirm-alert/src/react-confirm-alert.css";
const Review = () => {
  const [user, loading] = useAuthState(auth);
  const [allReview, setAllReview] = useState([]);
  const loadReview = async () => {
    const res = await fetch(
      `https://service-saver.vercel.app/review/${user?.email}`
    );
    const data = await res.json();
    setAllReview(data);
  };
  useEffect(() => {
    if (user?.email) {
      loadReview();
    }
  }, [user]);
  if (loading) {
    return;
  }
  const handleDelet = (id) => {
    fetch(`https://service-saver.vercel.app/review/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Deleted successfully...");
        loadReview();
      });
  };
  const deleteAlert = (id) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => handleDelet(id),
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };
  return (
    <div>
      <Menubar />
      {allReview?.length <= 0 ? (
        <div className="flex items-center justify-center h-screen w-full">
          <h1 className="text-warning text-center text-2xl">
            No reviews were added
          </h1>
        </div>
      ) : (
        <>
          <div class="overflow-x-auto min-h-screen">
            <table class="table table-compact w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Service Name</th>
                  <th>Desc</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {allReview?.map((item, i) => (
                  <tr>
                    <th>{i + 1}</th>
                    <td>{item?.service?.name}</td>
                    <td>{item?.desc}</td>
                    <td>{item?.email}</td>
                    <td>{item?.rating}</td>
                    <td className="text-center">
                      <button className="btn btn-xs ml-[3px] bg-green-600">
                        Edit
                      </button>
                      <button
                        onClick={() => deleteAlert(item?._id)}
                        className="btn btn-xs ml-[3px] bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Review;
