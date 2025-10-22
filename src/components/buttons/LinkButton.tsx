import Link from 'next/link'
import React from 'react'

type LinkButtonProps = {
    reverse?: boolean
    val: string
}

const LinkButton = ({reverse = true, val}: LinkButtonProps) => {
  return (
    <Link href="" className={`flex border-2 h-11 w-full justify-center items-center  ${reverse ? "":"bg-foreground text-background"} `}>
        {val}
    </Link>
  )
}

export default LinkButton