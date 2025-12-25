export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" bg-gray-100">
        <div className="bg-white shadow-md p-4">haeder  from contact us</div>
        <div className="container mx-auto px-4 py-8">
      {children}
        </div>  
    </div>
  );
}