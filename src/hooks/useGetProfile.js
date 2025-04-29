import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userSlice";

const useGetProfile = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMyProfile = async () => {
            if (!id) return;

            try {
                const res = await axios.get(`${USER_API_END_POINT}/profile/${id}`, {
                    withCredentials: true
                });

                console.log("Profile Data:", res.data);
                dispatch(getMyProfile(res.data.user));

            } catch (e) {
                console.log("Error fetching Profile:", e);

                if (e.response?.status === 401) {
                    console.warn("Unauthorized! Redirecting to login...");
                    //handle logout or redirect logic here
                }
            }
        };

        fetchMyProfile();
    }, [id, dispatch]);
}

export default useGetProfile;