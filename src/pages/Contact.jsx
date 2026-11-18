import { useState } from "react";

export default function Contact() {

    const [sent, setSent] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        console.log("New Contact Message:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        setSubmittedData({
            name: name,
            email: email,
            message: message
        });

        setSent(true);
    }

    return (
        <div style={{
            minHeight: "100vh",
            backgroundColor: "#f8f1eb",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "90px 20px 40px",
            boxSizing: "border-box"
        }}>

            <h1 style={{
                color: "#650d2b",
                fontSize: "40px",
                fontFamily: "Georgia"
            }}>
                Contact Us
            </h1>

            <p style={{
                color: "#777",
                marginBottom: "30px"
            }}>
                We'd love to hear from you!
            </p>

            {sent ? (

                <div style={{
                    backgroundColor: "white",
                    padding: "35px",
                    borderRadius: "15px",
                    width: "100%",
                    maxWidth: "400px",
                    boxShadow: "0 5px 20px #ddd",
                    boxSizing: "border-box"
                }}>

                    <h3 style={{
                        color: "#650d2b",
                        textAlign: "center"
                    }}>
                        Message Submitted Successfully!
                    </h3>

                    <p>
                        <strong>Name:</strong> {submittedData.name}
                    </p>

                    <p>
                        <strong>Email:</strong> {submittedData.email}
                    </p>

                    <p style={{
                        overflowWrap: "anywhere",
                        whiteSpace: "pre-wrap"
                    }}>
                        <strong>Message:</strong> {submittedData.message}
                    </p>

                    <p style={{
                        color: "#777",
                        fontSize: "13px",
                        marginTop: "20px"
                    }}>
                        Demo submission — no email was sent.
                    </p>

                    <button
                        onClick={() => {
                            setSent(false);
                            setSubmittedData(null);
                        }}
                        style={buttonStyle}
                    >
                        Send Another Message
                    </button>

                </div>

            ) : (

                <form
                    onSubmit={handleSubmit}
                    style={{
                        backgroundColor: "white",
                        padding: "35px",
                        borderRadius: "15px",
                        width: "100%",
                        maxWidth: "400px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        boxShadow: "0 5px 20px #ddd",
                        boxSizing: "border-box"
                    }}
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        required
                        style={inputStyle}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        required
                        style={inputStyle}
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        aria-label="Your Message"
                        required
                        rows={5}
                        style={inputStyle}
                    />

                    <button
                        type="submit"
                        style={buttonStyle}
                    >
                        Send Message
                    </button>

                </form>

            )}

        </div>
    );
}

const inputStyle = {
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    width: "100%",
    boxSizing: "border-box"
};

const buttonStyle = {
    padding: "15px",
    backgroundColor: "#650d2b",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
    marginTop: "10px"
};