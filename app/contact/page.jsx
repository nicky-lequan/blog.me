import Contact from '@/components/Contact/Contact';
import Resume from '@/components/Resume/Resume';

function ContactPage() {
  return (
    <div className="px-0 sm:px-8 flex flex-col bg-neutral rounded-2xl drop-shadow-lg">
      <Contact />
      <Resume />
    </div>
  );
}

export default ContactPage;
