import { Bracket } from "@thirdbracket/bracketui";
import PageHeader from "../../../components/PageHeader";

function ContactForm() {
  return (
    <form className="max-w-xl mx-auto">
      <div className="mb-6">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-primary-300 dark:border-primary-700 bg-white dark:bg-primary-800"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 rounded-lg border border-primary-300 dark:border-primary-700 bg-white dark:bg-primary-800"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2">Message</label>
        <textarea
          rows={6}
          className="w-full px-4 py-2 rounded-lg border border-primary-300 dark:border-primary-700 bg-white dark:bg-primary-800"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
      >
        Send Message
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <Bracket>
      <PageHeader title="Contact Us" description="Get in touch with our team" />
      <div className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        <ContactForm />
      </div>
    </Bracket>
  );
}
