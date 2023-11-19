import ServicesList from "./ServicesList"

export default function Services() {
    return(
        <>
        <div className="services">
            <ServicesList
                title={"Audio Recording"}
                thumbnail={"/jonathan-velasquez-c1ZN57GfDB0-unsplash.jpg"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            />
            <ServicesList
                title={"Audio Mixing"}
                thumbnail={"/techivation-Y3NtmqdJ3TE-unsplash.jpg"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            />
            <ServicesList
                title={"Audio Mastering"}
                thumbnail={"/amin-asbaghipour-wLJqFMTQfa0-unsplash.jpg"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
            />
        </div>
        </>
    )
}

