"use client"
import {usePathname} from "next/navigation"
export default function ContactUs() {
    const pathname=usePathname();
    console.log("pathname"+pathname);
    return (   
        <div>
            <h1>Contact Us Page</h1>
        </div>
    );
}       