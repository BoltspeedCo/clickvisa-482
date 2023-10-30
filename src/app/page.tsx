import { SliceZone } from '@prismicio/react'
import { createClient } from "../prismicio";
import { components } from "../slices";
import RootLayout from '@/components/RootLayout';
import { Metadata } from 'next';
import { websiteConfig } from '@/config';
import { LocalBusinessJsonLd, LogoJsonLd } from 'next-seo'
import { isFilled } from '@prismicio/client';

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const homepage = await client.getByUID('flexiblePage', 'homepage',)
  return {
    title: homepage.data.meta_title || websiteConfig.defaultMetadata.title,
    description: homepage.data.meta_description || websiteConfig.defaultMetadata.description,

  }
}

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID('flexiblePage', 'homepage', {
    fetchLinks: ['service.name', 'service.featuredDescription', 'service.featuredIcon']
  })
  const globalSections = await client.getSingle('globalSections')
  const settings = await client.getSingle('settings')
  const { addressCountry, addressLocality, addressRegion, businessDescription, businessEmail, businessName, businessTelephone, images, logo, postalCode, streetAddress } = settings.data


  // console.log("page", page)
  return (
    <RootLayout settings={settings} globalContext={globalSections}>
      <LocalBusinessJsonLd
        useAppDir={true}
        type='LegalService'
        address={{
          streetAddress: isFilled.keyText(streetAddress) ? streetAddress : '',
          addressLocality: isFilled.keyText(addressLocality) ? addressLocality : '',
          addressRegion: isFilled.keyText(addressRegion) ? addressRegion : '',
          postalCode: isFilled.keyText(postalCode) ? postalCode : '',
        }}
        id={websiteConfig.siteUrl}
        description={isFilled.keyText(businessDescription) ? businessDescription : ''}
        email={businessEmail}
        name={isFilled.keyText(businessName) ? businessName : websiteConfig.siteName}

      // images={images}
      />
      <LogoJsonLd
        logo={isFilled.image(logo) ? logo.url : ''}
        url={websiteConfig.siteUrl}
        useAppDir={true}
      />
      <SliceZone slices={page.data.slices} components={components} context={{
        globalSections: globalSections
      }} />
    </RootLayout>

  )
}
