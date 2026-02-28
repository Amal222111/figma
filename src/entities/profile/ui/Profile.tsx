import { useGetProfileInfoQuery } from "../api/profileApi";

export default function Profile() {
    const { data, isLoading, error } = useGetProfileInfoQuery();

    return (
        
       <div className="min-h-screen flex items-center justify-center p-10">
            <div className="bg-gray-600 text-white rounded-[40px] shadow-2xl 
                            p-20 w-full max-w-3xl">
                
                <h2 className="text-5xl font-extrabold mb-16 text-center">
                    Profile Info
                </h2>

                <div className="flex flex-col space-y-10 text-3xl">
                    
                    <p><span className="font-bold text-4xl block mb-3">Name</span>{data?.name}</p>
                    <p><span className="font-bold text-4xl block mb-3">Email</span>{data?.email}</p>
                    <p><span className="font-bold text-4xl block mb-3">Phone</span>{data?.phone}</p>
                    <p><span className="font-bold text-4xl block mb-3">Username</span>{data?.username}</p>
                    <p><span className="font-bold text-4xl block mb-3">Address</span>{data?.address}</p>
                    <p><span className="font-bold text-4xl block mb-3">City</span>{data?.city}</p>
                    <p><span className="font-bold text-4xl block mb-3">State</span>{data?.state}</p>
                    <p><span className="font-bold text-4xl block mb-3">ZIP</span>{data?.zip}</p>
                    <p><span className="font-bold text-4xl block mb-3">Country</span>{data?.country}</p>

                </div>
            </div>
        </div>
    );
}