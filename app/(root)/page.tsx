import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview with AI-Powered Practice Questions</h2>
          <p className="text-lg">
            Practice job interview questions with AI to prepare for your next
            interview.
          </p>
          <Button className="btn-primary max-sm:w-full">
            <Link href="/interview">Start Interview`</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robo-bhai" width={400} height={400} className="max-sm:hidden" />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-2xl font-medium">Your Interviews</h2>

        <div className="interviews-section">
          <p>You haven&apos;t taken any interviews yet</p>
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          <p>There are no interviews available</p>
        </div>
      </section>
    </>
  );
};

export default Page;
