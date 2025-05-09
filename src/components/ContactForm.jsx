export default function ContactForm() {
    return (
      <section className="py-16 px-6 bg-blue-50 dark:bg-gray-700">
        <h3 className="text-2xl font-semibold mb-8 text-center">Contact Us</h3>
        <form className="max-w-2xl mx-auto grid gap-4">
          <input type="text" placeholder="Name" required className="p-2 rounded border" />
          <input type="email" placeholder="Email" required className="p-2 rounded border" />
          <input type="text" placeholder="Company" className="p-2 rounded border" />
          <select required className="p-2 rounded border">
            <option value="">Select License Type</option>
            <option>Operating System</option>
            <option>Office Suite</option>
            <option>Antivirus</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Message" required className="p-2 rounded border"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Submit</button>
        </form>
      </section>
    );
  }