import Link from "next/link";

export default function Home() {
  return (
    <div>
  
      <Link className='hover:text-yellow-600 flex gap-4' href="/">HOME</Link>
      <Link className='hover:text-yellow-600 flex gap-4' href="/app/about/page.tsx">ABOUT</Link>
      <Link className='hover:text-yellow-600 flex gap-2' href="/app/contact/veiws">CONTACT</Link>
      <Link className='hover:text-yellow-600 flex gap-4' href="/app/services">SERVICES</Link>
      <h1>hey!I am yusra waheed</h1>

    </div>
  );
}
