import Link from 'next/link';
import React from 'react'

export default function AdminDashboard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
    <Link href={"/dashboard/admin"}>{"Dashboard>"}</Link>
    <div>{children}</div>
    </>
  )
}
