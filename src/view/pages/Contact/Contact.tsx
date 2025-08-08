import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from '@emailjs/browser';

type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();
    const [isSending, setIsSending] = useState(false);
    const [serverMessage, setServerMessage] = useState<{text: string; isError: boolean} | null>(null);

    const onSubmit = async (data: FormData) => {
        setIsSending(true);
        setServerMessage(null);
        try {
            // Using EmailJS to handle the email sending
            const templateParams = {
                from_email: data.email,
                to_email: import.meta.env.VITE_EMAIL_USER,
                subject: data.subject,
                message: data.message
            };

            const response = await emailjs.send(
                'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                templateParams,
                'YOUR_PUBLIC_KEY'   // Replace with your EmailJS public key
            );

            if (response.status === 200) {
                setServerMessage({
                    text: 'Message sent successfully!',
                    isError: false
                });
                reset();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setServerMessage({
                text: 'Failed to send message. Please try again later.',
                isError: true
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6">Contact Us</h2>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block text-gray-700 mb-2">Your Email</label>
                    <input
                        type="email"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200'
                        }`}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Subject</label>
                    <input
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200'
                        }`}
                        {...register('subject', {
                            required: 'Subject is required',
                            minLength: {
                                value: 5,
                                message: 'Subject must be at least 5 characters'
                            },
                            maxLength: {
                                value: 100,
                                message: 'Subject must be at most 100 characters'
                            }
                        })}
                    />
                    {errors.subject && (
                        <span className="text-red-500 text-sm mt-1">{errors.subject.message}</span>
                    )}
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                        rows={5}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-purple-200'
                        }`}
                        {...register('message', {
                            required: 'Message is required',
                            minLength: {
                                value: 10,
                                message: 'Message must be at least 10 characters'
                            },
                            maxLength: {
                                value: 1000,
                                message: 'Message must be at most 1000 characters'
                            }
                        })}
                    ></textarea>
                    {errors.message && (
                        <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSending}
                >
                    {isSending ? "Sending..." : "Send Message"}
                </button>

                {serverMessage && (
                    <div className={`mt-4 p-3 rounded text-center ${
                        serverMessage.isError
                            ? 'bg-red-100 text-red-700'
                            : 'bg-green-100 text-green-700'
                    }`}>
                        {serverMessage.text}
                    </div>
                )}
            </form>
        </div>
    );
}