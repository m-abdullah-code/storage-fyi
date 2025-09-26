import React from "react";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";
import twitter from "../../assets/twitter.png";
import pin from "../../assets/pin.png";
import youtube from "../../assets/youtube.png";

function Footer() {
    // Social links
    const socialLinks = [
        { href: "#", img: email, alt: "Email" },
        { href: "#", img: facebook, alt: "Facebook" },
        { href: "#", img: google, alt: "Google" },
        { href: "#", img: twitter, alt: "Twitter" },
        { href: "#", img: pin, alt: "Pinterest" },
        { href: "#", img: youtube, alt: "YouTube" },
    ];

    // Footer columns
    const footerColumns = [
        {
            title: "Website",
            links: [
                { text: "How it Works", href: "#" },
                { text: "List Your", href: "#" },
            ],
        },
        {
            title: "Search",
            links: [
                { text: "Find Real Estate Agents", href: "#" },
                { text: "Get Space Advice", href: "#" },
            ],
        },
        {
            title: "Support",
            links: [
                { text: "Password Retrieval", href: "#" },
                { text: "Contact Us", href: "#" },
            ],
        },
    ];

    return (
        <footer className="bg-[#FAFAFE]">
            <div className="side-space">
                <div className="flx-col flex justify-between gap-10">
                    {/* Left side */}
                    <div className="left-content">
                        <h3>About</h3>
                        <p>
                            Finding Real Estate Agents is easy by searching our trusted network
                            of top-rated Real Estate Agents.
                        </p>
                        <div className="social-links flex flex-wrap gap-2 mt-15">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} target="_blank" rel="noreferrer">
                                    <img src={link.img} alt={link.alt} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="right-content">
                        <div className="col-flx flex justify-between">
                            {footerColumns.map((col, index) => (
                                <div key={index} className={`col col${index + 1}`}>
                                    <h3>{col.title}</h3>
                                    <ul>
                                        {col.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a href={link.href}>{link.text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <a
                            href="#"
                            className="btn-join inline-flex justify-center items-center mt-15 transition-all"
                        >
                            Real Estate Agents - Join Our Website Today »
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
