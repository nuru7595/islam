export default function () {
    return (
        <>
            <div className="flex flex-row justify-center gap-3 flex-wrap">
                <span>Started - 01 Dec 24</span>
                <span>Updated - 18 Dec 24</span>
                <span>Qaza Due - 0</span>
                <span>Most Qaza - Fojor</span>
                <span>Most Qaza Cause - Sleep</span>
                <span>v0.0.17.1</span>
            </div>
            <section className="overflow-hidden">
                <div className="relative">
                    <select
                        defaultValue="dec24"
                        className="block appearance-none w-full bg-bg p-2 outline-none cursor-pointer px-4"
                    >
                        {/* <option value="apr25" disabled>April 2025</option>
                        <option value="mar25" disabled>March 2025</option> */}
                        <option value="feb25" disabled>
                            February 2025
                        </option>
                        <option value="jan25" disabled>
                            January 2025
                        </option>
                        <option value="dec24">December 2024</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    );
}
