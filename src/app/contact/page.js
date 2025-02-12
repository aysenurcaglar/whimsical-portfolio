import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <main className="bg-cover bg-center bg-no-repeat bg-fixed h-screen w-screen bg-[url('/background/contact.jpg')]">
      <div className="flex items-center justify-center w-full h-full">
        <ContactForm />
      </div>
    </main>
  );
}
