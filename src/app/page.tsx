import { SliceZone } from '@prismicio/react'
import { createClient } from "../prismicio";
import { components } from "../slices";
import RootLayout from '@/components/RootLayout';

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle('flexiblePage', {
    fetchLinks: ['service.name', 'service.featuredDescription', 'service.featuredIcon']
  })
  // console.log("page", page)
  return (
    <RootLayout>
      <SliceZone slices={page.data.slices} components={components} />
    </RootLayout>

  )
}
