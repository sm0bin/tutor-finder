'use client';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';
import { Helmet } from "react-helmet-async";
import Skeleton from "react-loading-skeleton";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { motion } from "framer-motion"

const MySchedules = () => {
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState([]);
    const [myPending, setMyPending] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    const handleStateChange = (e, id) => {
        const serviceState = e.target.value;
        console.log(serviceState);
        axiosSecure.put(`/bookings/${id}`, { serviceState })
            .then(res => {
                if (res.data.modifiedCount) {
                    console.log(res.data);
                    toast.success("State Updated!");
                }
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message)
            })
    }

    useEffect(() => {

        axiosSecure.get(`/bookings?email=${user.email}`)
            .then(res => {
                setMyBookings(res.data.userBooking);
                setMyPending(res.data.userPending);
                setLoading(false);
            })
    }, [user.email, axiosSecure])



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            <Toaster />
            <Helmet>
                <title>TutorHive | My Schedules</title>
            </Helmet>
            <h2 className="font-bold text-3xl text-center mb-12 mt-20">My Booking</h2>
            <div className=" grid grid-cols-1 gap-6 mb-20">
                {
                    loading ? <Skeleton count={4} /> :
                        myBookings.length === 0 ? <h3 className="font-semibold text-2xl text-center py-12 bg-slate-200 rounded-lg">No Service Booked</h3> :
                            myBookings?.map(service => (

                                <div key={service._id} className="flex overflow-hidden flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img className="md:w-1/2 object-cover w-[600px] h-[400px] rounded-t-lg  md:rounded-none md:rounded-l-lg" src={service.serviceImage} alt={`${service?.serviceName} image`} />
                                    <div className="flex flex-col md:w-1/2 justify-between p-4 leading-normal space-y-3">
                                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{service?.serviceName}</h5>
                                        <div className="flex items-center gap-3">
                                            <img className="w-12 h-12 rounded-full object-cover" src={service?.serviceProvider?.image} alt={`${service?.serviceProvider?.name} image`} />
                                            <h4 className="font-bold text-lg">{service?.serviceProvider?.name}</h4>
                                        </div>
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${service?.servicePrice}</h5>
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Service Area: {service?.serviceArea}</h5>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service?.serviceDescription}</p>
                                        <Link to={`/services/${service.serviceId}`} className="w-max inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Book Again
                                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))
                }
            </div>
            <h2 className="font-bold text-3xl text-center mb-12 mt-20">My Pending Works</h2>
            <div className=" grid grid-cols-1 gap-6 mb-20">
                {
                    loading ? <Skeleton count={4} /> :
                        myPending.length === 0 ? <h3 className="font-semibold text-2xl text-center py-12 bg-slate-200 rounded-lg">No Pending Works</h3> :
                            myPending?.map(service => (

                                <div key={service._id} className="flex overflow-hidden flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                    <img className="md:w-1/2 object-cover w-[600px] h-[400px] rounded-t-lg  md:rounded-none md:rounded-l-lg" src={service.serviceImage} alt={`${service?.serviceName} image`} />
                                    <div className="flex flex-col md:w-1/2 justify-between p-4 leading-normal space-y-2">
                                        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{service?.serviceName}</h5>
                                        <div className="flex items-center gap-3">
                                            <img className="w-12 h-12 rounded-full object-cover" src={service?.serviceUser?.image} alt={`${service?.serviceUser?.name} image`} />
                                            <div>
                                                <h4 className="font-bold text-lg">{service?.serviceUser?.name}</h4>
                                                <h4 className="font-semibold text-base">{service?.serviceUser?.email}</h4>

                                            </div>
                                        </div>
                                        {/* <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Price: ${service?.servicePrice}</h5> */}
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Service Area: {service?.serviceArea}, {service?.serviceDetails?.address}</h5>
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Starting Date: {service?.serviceDetails?.startingDate}</h5>

                                        <select onChange={(e) => handleStateChange(e, service._id)} defaultValue={service?.serviceDetails?.state} className="w-max bg-gray-50 text-gray-900 font-semibold border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            {/* <option selected hidden defaultValue={service?.serviceDetails?.state}>Pending</option> */}
                                            <option value="pending">Pending</option>
                                            <option value="inProgress">In Progress</option>
                                            <option value="completed">Completed</option>
                                        </select>

                                    </div>
                                </div>
                            ))
                }
            </div>

        </motion.div>
    );
};

export default MySchedules;