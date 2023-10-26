import { SliceZone } from '@prismicio/react'
import { createClient } from "../prismicio";
import { components } from "../slices";
import RootLayout from '@/components/RootLayout';

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID('flexiblePage', 'homepage', {
    fetchLinks: ['service.name', 'service.featuredDescription', 'service.featuredIcon']
  })
  const globalSections = await client.getSingle('globalSections')
  const settings = await client.getSingle('settings')

  // console.log("page", page)
  return (
    <RootLayout settings={settings} globalContext={globalSections}>
      <SliceZone slices={page.data.slices} components={components} context={{
        globalSections: globalSections
      }} />
    </RootLayout>

  )
}
