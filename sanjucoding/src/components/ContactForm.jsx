import React, { useState } from 'react'

const ContactForm = () => {

    const [first,setFirst] = useState('')
    const [last,setLast] = useState('')
    const [text,setText] = useState('')
    const [email,setEmail] = useState('')

    const submitHandler = async (e) => {
      e.preventDefault();

      try {
        const res = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ first, last, email, text }),
        });

        const data = await res.json();

        if (res.ok) {
          alert(data.message); // "Email sent successfully!"
          setFirst("");
          setLast("");
          setEmail("");
          setText("");
        } else {
          alert(data.message || "Failed to send message!");
        }
      } catch (err) {
        console.error(err);
        alert("Error sending message!");
      }
    };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className=" border-2 border-violet-400 lg:h-full lg:w-full h-auto w-full lg:px-10 lg:py-10 px-5 py-5 rounded-2xl flex flex-col gap-5 shadow-[0_0_50px_10px_rgba(0,0,0,0.75)] hover:shadow-[0_0_25px_15px_rgba(126,34,206,0.6)] transition-all duration-300 ease-out"
        action="#"
      >
        <div className="flex justify-between lg:flex-nowrap flex-wrap gap-5">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-semibold ml-5" htmlFor="FirstName">
              First Name :
            </label>
            <input
              className="px-10 py-2 border-2  border-violet-400 rounded-2xl"
              type="text"
              name="FirstName"
              id=""
              placeholder="Enter First Name"
              value={first}
              onChange={(e) => {
                setFirst(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-semibold ml-5" htmlFor="LastName">
              Last Name :
            </label>
            <input
              className="px-10 py-2 border-2 border-violet-400 rounded-2xl"
              type="text"
              name="LastName"
              id=""
              placeholder="Enter Last Name"
              value={last}
              onChange={(e) => {
                setLast(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold ml-5" htmlFor="Email">
            Email :
          </label>
          <input
            className="px-10 py-2 border-2 border-violet-400 rounded-2xl"
            type="email"
            name="Email"
            id=""
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg font-semibold ml-5" htmlFor="Message">
            Message :
          </label>
          <textarea
            className="px-10 py-2 border-2 border-violet-400 rounded-2xl"
            name="Message"
            id=""
            cols="30"
            rows="3"
            placeholder="Enter Your Message"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>
        <button className="px-10 py-2 text-2xl font-bold border-2 border-violet-400 bg-violet-500 rounded-3xl hover:bg-violet-600 transition-all duration-300 ease-out active:scale-95">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm
