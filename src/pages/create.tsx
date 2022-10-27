import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '../components/Nav'

interface Props {}

const Create: NextPage<Props> = ({}) => {

  return <div>
        <Head>
            <title>Create Product - joof.io</title>
        </Head>
      <h1 className="text-3xl py-[100rem] h-screen bg-red-100">Create</h1>

  </div>
}

export default Create