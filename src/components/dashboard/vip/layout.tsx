import Link from 'next/link';
import React from 'react'

export default function VipDashboard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
    <Link href={"/dashboard/vip"}>{"Dashboard>"}</Link>
    <div>{children}</div>
    </>
  )
}
