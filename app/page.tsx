import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.email} target="_blank">
        <Image src="/profile.webp" alt="Profile photo" className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0" unoptimized width={160} height={160} priority />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Hi there,</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>I am an entrepreneur and full-stack software engineer with over a decade of experience specializing in web applications.</p>
        <p>Throughout my career, I have successfully built, scaled, and navigated the lifecycle of various startups, culminating in my latest venture, which was sold in a seven-figure deal.</p>
        <p>These experiences have provided me with valuable insights and expertise in the tech industry.</p>
      </div>
    </section>
  );
}
