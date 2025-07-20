'use client';

import {useContext, useState, useRef} from 'react';
import {CheckCircleIcon, ExclamationCircleIcon} from '../Icons';
import {AlertContext} from '@/providers/AlertProvider';
import {Button} from '@/providers/AppProvider';
import * as EmailService from '@/services/external/Emailjs/emailService';

function ContactForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);
  const {setAlertState} = useContext(AlertContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid =
      nameRef.current.value &&
      emailRef.current.value &&
      messageRef.current.value;
    if (valid) {
      setLoading(true);
      EmailService.sendEmail(
        nameRef.current.value,
        'Nicky',
        emailRef.current.value,
        'nicky.lequan@gmail.com',
        messageRef.current.value
      )
        .then(
          () => {
            setAlertState({
              type: 'SHOW',
              data: {
                icon: <CheckCircleIcon className="!w-7 !h-7" />,
                title: 'Email Sent',
                content: "Thanks. I'll get back to you ASAP ;)",
              },
            });
            setTimeout(() => {
              setAlertState({type: 'HIDE'});
              setLoading(false);
            }, 4000);
          },
          (error) => {
            console.error(error);
            setAlertState({
              type: 'SHOW',
              data: {
                icon: <ExclamationCircleIcon className="!w-7 !h-7" />,
                title: 'Fail',
                content:
                  "Something went wrong :( Sometimes lengthy message leads to an error, so if that's the case, please email me directly.",
              },
            });
            setTimeout(() => {
              setAlertState({type: 'HIDE'});
              setLoading(false);
            }, 10000);
          }
        )
        .finally(() => {
          nameRef.current.value = '';
          emailRef.current.value = '';
          messageRef.current.value = '';
        });
    } else {
      setAlertState({
        type: 'SHOW',
        data: {
          icon: <ExclamationCircleIcon className="!w-7 !h-7" />,
          title: 'Incomplete Form',
          content: 'Please fill in all the fields.',
        },
      });
      setTimeout(() => {
        setAlertState({type: 'HIDE'});
      }, 4000);
    }
  };

  return (
    <div className="green-violet-gradient p-[0.063rem] rounded-lg">
      <form
        onSubmit={handleSubmit}
        className="p-5 flex flex-col bg-white/90 dark:bg-slate-950/90 gap-8 rounded-lg">
        <label className="flex flex-col">
          <span className="text-text font-semibold mb-4">Your Name</span>
          <input
            ref={nameRef}
            type="text"
            name="name"
            value={nameRef.current?.value}
            placeholder="What's your name?"
            className="py-4 px-6 bg-zinc-50 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-text rounded-lg border dark:border-gray-600 font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-text font-semibold mb-4">Your Email</span>
          <input
            ref={emailRef}
            type="email"
            name="email"
            value={emailRef.current?.value}
            placeholder="What's your email?"
            className="py-4 px-6 bg-zinc-50 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-text rounded-lg border dark:border-gray-600 font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-text font-semibold mb-4">Your Message</span>
          <textarea
            ref={messageRef}
            rows={7}
            name="message"
            value={messageRef.current?.value}
            placeholder="What do you want to say?"
            className="py-4 px-6 bg-zinc-50 dark:bg-zinc-900 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 text-text rounded-lg border dark:border-gray-600 font-medium resize-none"
          />
        </label>

        <Button
          type="submit"
          ripple={false}
          fullWidth={true}
          disabled={loading}
          className="bg-primary text-text shadow-none hover:scale-105 hover:shadow-none font-raleway font-bold">
          {loading ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
