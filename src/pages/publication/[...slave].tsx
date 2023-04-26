import { slaveGSSP } from "@/slave-boot-model";
import Link from 'next/link'
import { boot, $slugs, test } from "@/slave-model";
import { useStore } from "effector-react";
import { usePageEvent } from "nextjs-effector";

const Slave = () => {
  const slugs = useStore($slugs)

  usePageEvent(test, { runOnce: true })

  return (
    <div>
      <h1>Publication page: {JSON.stringify(slugs)}</h1>

      <div style={{ display: 'flex', flexFlow: 'column nowrap', marginTop: '75px'}}>
        <Link href="/publication/a/b/c">move to a/b/c</Link>
        <Link href="/publication/a/b/c/d/e">move to a/b/c/d/e</Link>
      </div>
    </div>
  )
}

export const getServerSideProps = slaveGSSP({
  pageEvent: boot
})

export default Slave