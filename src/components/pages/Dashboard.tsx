import { useEffect } from "react";
import { makeAPIGETRequest } from "../../utils/apiActions";
import { useDispatch, useSelector } from "react-redux";
import { setUserAPIDetails, UserAPIDetails } from "../../store/loggedInUserSlice";
import { RootState } from "../../store/store";
import adminDashboardIcon from "../../assets/images/AdminDashboard.png";
import { setIsLoading } from "../../store/loaderSlice";

export default function Dashboard() {
    const dispatch = useDispatch();
    const { username } = useSelector(
        (state: RootState) => state.loggedInUser.userAPIDetails as UserAPIDetails || { username: "Guest User" }
    );

    const getUserDetails = () => {
        dispatch(setIsLoading(true));
        const options = {
            successCallBack: (res: any) => {
                dispatch(setUserAPIDetails(res));
                dispatch(setIsLoading(false));
            },
            failureCallBack: (err: any) => {
                console.error("Error fetching user API details:", err);
                dispatch(setIsLoading(false));
            },
        }
        makeAPIGETRequest('/identityservices/auth/v1/users', {}, options)
    }

    useEffect(() => {
        getUserDetails();
    }, [])

    return (
        <div className="w-full flex flex-col items-center mt-[70px]">
            <img src={adminDashboardIcon} alt="login" className="w-auto h-auto" />

            <div className="text-center text-[#856EF7] font-montserrat font-bold text-[22px] mt-5">
                Hello {username}!
            </div>

            <div className="text-center text-[#4B465C] font-montserrat font-bold text-[15px]">
                Welcome to Smartdash
            </div>
        </div>
    );
}   