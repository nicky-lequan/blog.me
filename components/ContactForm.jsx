'use client';

import {useContext, useState, useRef} from 'react';
import {CheckCircleIcon} from './Icons';
import {AlertContext} from '@/providers/AlertProvider';
import {Button} from '@/providers/AppProvider';

function ContactForm() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const {setAlertState} = useContext(AlertContext);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setAlertState({
      type: 'SHOW',
      data: {
        icon: <CheckCircleIcon />,
        title: 'Success',
        content: "Thanks. I'll get back to you ASAP ;)",
      },
    });
    setTimeout(() => {
      setAlertState({type: 'HIDE'});
      setLoading(false);
    }, 4000);
  };

  return (
    <>
      <div className="m-8 xl:w-full green-violet-gradient p-[0.063rem] rounded-[1.25rem]">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="p-8 flex flex-col bg-white/90 dark:bg-slate-950/90 gap-8 rounded-[1.25rem]">
          <label className="flex flex-col">
            <span className="text-text font-semibold mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4 px-6 bg-zinc-50 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-text rounded-lg border dark:border-gray-600 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-text font-semibold mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 px-6 bg-zinc-50 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-text rounded-lg border dark:border-gray-600 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-text font-semibold mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="py-4 px-6 bg-zinc-50 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-text rounded-lg border dark:border-gray-600 font-medium resize-none"
            />
          </label>

          <Button
            type="submit"
            ripple={false}
            fullWidth={true}
            disabled={loading}
            className="bg-slate-300 dark:bg-slate-800 text-text shadow-none hover:scale-105 hover:shadow-none font-raleway font-bold">
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
