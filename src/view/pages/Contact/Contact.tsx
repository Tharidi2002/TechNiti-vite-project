// import './Contact.css';
import { useForm } from "react-hook-form";

/*
type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    // send the data backend
    const onSubmit = (data: FormData) => {
        console.log(data);
        alert('Form submitted successfully!');
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                    <label>Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>

                <div className={`form-group ${errors.subject ? 'error' : ''}`}>
                    <label>Subject</label>
                    <input
                        type="text"
                        {...register('subject', {
                            required: 'Subject is required',
                            minLength: {
                                value: 10,
                                message: 'Subject must be at least 10 characters'
                            },
                            pattern: {
                                value: /^.{10,30}$/,
                                message: 'Subject must be between 10-30 characters'
                            }
                        })}
                    />
                    {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                </div>

                <div className={`form-group ${errors.message ? 'error' : ''}`}>
                    <label>Message</label>
                    <textarea
                        rows={5}
                        {...register('message', {
                            required: 'Message is required',
                            minLength: {
                                value: 10,
                                message: 'Message must be at least 10 characters'
                            },
                            pattern: {
                                value: /^.{10,50}$/,
                                message: 'Message must be between 10-50 characters'
                            }
                        })}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message.message}</span>}
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
}
 */




type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        alert('Form submitted successfully!');
    };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-6">Contact Us</h2>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block text-gray-700 mb-2">Email</label>
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
                                value: 10,
                                message: 'Subject must be at least 10 characters'
                            },
                            maxLength: {
                                value: 30,
                                message: 'Subject must be at most 30 characters'
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
                                value: 500,
                                message: 'Message must be at most 500 characters'
                            }
                        })}
                    ></textarea>
                    {errors.message && (
                        <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}