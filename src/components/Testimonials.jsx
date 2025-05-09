export default function Testimonials() {
    const reviews = [
      {
        name: 'John Doe',
        role: 'IT Manager',
        company: 'TechCorp',
        review: 'SoftSell made it easy to recover value from unused licenses!'
      },
      {
        name: 'Jane Smith',
        role: 'Procurement Lead',
        company: 'InnovaSoft',
        review: 'Seamless process and quick payout. Highly recommended.'
      }
    ];
    return (
      <section className="py-16 px-6">
        <h3 className="text-2xl font-semibold mb-8 text-center">Customer Testimonials</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((t, i) => (
            <div key={i} className="border p-4 rounded shadow">
              <p className="italic">"{t.review}"</p>
              <p className="mt-2 font-semibold">{t.name}</p>
              <p className="text-sm">{t.role}, {t.company}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }